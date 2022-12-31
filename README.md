# Javascript_Backend_node_Workshop

## Bundle all files for webpack

 *  Install Webpack
    `npm install -d webpack webpack-cli webpack-dev-Servicer`

 *  Create ./src for script
    `move ALL *.js ro ./src`

 *  Refactor index.js
    `move TodoComponent to TodoComponent.js`

 *  Export JS classes
    `module.exports = TodoComponent;`

 *  Import TodoComponent in index.js
     `const TodoComponent = require("./TodoComponent")`

 *  Change the <script src>
    `<script src="main.js"></script>`

 *  `npx webpack-dev-server --mode=development`
   
## FrontEnd

   
### Required pacakges for Frontend
- **Webpack** - `npm install webpack webpack-cli webpack-dev-server`
- **TypeScript** - `npm install -g typescript`
- **nodemon**- `npm install -g nodemon`

### How to Run Frontend
Open a two commond prompt in visula studio code (cmd not the powershell) in one cmd
- `tsc --watch`: It will watch the typeScript file changes and compile ts to js
- `npx web-dev-server --mode="development"`: It will compile js file to main.js and reload the server on file change: 
 
   
## BackEnd

   
### Required pacakges for Backend
   
   
- **Javascript Express**- `npm install express`
- **TypeScript express** - `npm install @types/express`
- **ts-node**- `npm install -g ts-node`
- **mysql2**- `npm install mysql2`
- **Typescript mysql2**- `npm install types/mysql2`


### How to Run BackEnd
   
   
   1. Run `nodemon --exec ts-node TodoRouterHandler.ts`
 
## MySql
    npm init -y
    npm install sync-mysql
    node mysqlcall.js

    In mysql: Run in cmd is.. cmd:"node filepath"

  


## MySQLCallback
    1. Required mysql2
        npm init -y
        npm i @types/mysql
   
   First we create the mysqlcallback.js file then we created .ts file But before that we need some packges
        Run ts-node index.ts | Run node mysqlcallback.js
        
## MySQLAsync

   1. Required mysql2
        npm i mysql2
        npm i types/mysql2

    Run ts-node index.ts
    
## Documentation files:

TypeScript: [TypeScript Docs][ts]
Express : [Express Docs][express]

[ts]: https://www.typescriptlang.org/docs/
[express]: https://expressjs.com/en/starter/installing.html

## Help


 - If you want to see the ts to js conversion first open a 2command prompt not a Powesheel In first Run the "tsc -watch" and in 2nd 
   run the "npx webpack-dev-server --mode=development"


 - If user want to Cretae js file in "src" folder and "Ts" file in typescript folder so modification in "tsconfig.json"
  {
      "module": "commonjs",                                
      "rootDir": "./typescript",  
      "target": "es6", 
      "outDir": "./src", 
  }


  - If your are facing the error while exicuting the query on mysql, 
    Error:  Client does not support authentication protocol requested by server; consider upgrading MySQL client
    Solution: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';




