import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import LoginResponse from "./LoginResponse"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = req.body.user;
    const password = req.body.password;
    const response: LoginResponse = { Successful: false };
    if (name == "abc" && password == "abc") {
        response.Successful = true;
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: response
        };
    }
    else {
        context.res = { body: response };
    }
};

export default httpTrigger;