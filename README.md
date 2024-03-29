# React basic

[Azure Static Web Apps](https://docs.microsoft.com/azure/static-web-apps/overview) allows you to easily build [React](https://reactjs.org/) apps in minutes. Use this repo with the [React quickstart](https://docs.microsoft.com/azure/static-web-apps/getting-started?tabs=react) to build and customize a new static site.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# build
 install nodejs
 install all dependencies with this command:
 ```
 npm install
 ```

# Useful commands notes
```bash
# start react web
npm start 
npm run build
npm test

cd api
npm install # install azure functions if created api funcs

#azure function creating
cd api / func start
cd api / npm start
func --version
func init api --typescript
func new --name [api-name] --template "HTTP trigger" --authlevel "anonymous"
```

tsconfig.json in sub-directory need an extra line:
```json
 "compilerOptions": {
    ...,
    "typeRoots": ["./node_modules/@types"]
}
```

# Links
[快速入门：在 Azure 中通过命令行创建 TypeScript 函数](https://learn.microsoft.com/zh-cn/azure/azure-functions/create-first-function-cli-typescript?tabs=azure-powershell%2Cbrowser)
[管理 Azure Cosmos DB 中数据的 Node.js 示例](https://learn.microsoft.com/zh-cn/azure/cosmos-db/sql/sql-api-nodejs-samples)