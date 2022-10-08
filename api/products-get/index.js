
module.exports = async function (context, req) {
  try {
    //context.res.status(200).json(products);
    context.res = { "body": req.headers["x-forwarded-for"]};
    console.log(context);
  } catch (error) {
    context.res.status(500).send(error);
  }
};