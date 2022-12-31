# Javascript_Backend_node_Workshop

# Bundle all files for webpack

    * 1. Install Webpack
        npm install -d webpack webpack-cli webpack-dev-ServiceWorkerRegistration

    * 2. Create ./src for script
        move ALL *.js ro ./src

    * 3. Refactor index.js
            move TodoComponent to TodoComponent.js

    * 5. Export JS classes
            module.exports = TodoComponent;

    * 6. Import TodoComponent in index.js
        const TodoComponent = require("./TodoComponent")

    * 7. Change the <script src>
            <script src="main.js"></script>
            
    * 8. npx webpack-dev-server --mode=development
   
# FrontEnd
   ### Required pacakges for Frontend
      -**Webpack**    - `npm install webpack webpack-cli webpack-dev-server`
      -**TypeScript** - `npm install -g typescript`
      -**nodemon**    - `npm install -g nodemon`
   ### How to Run Frontend
       1. `tsc --watch`
       2. `npx webpack-dev-server --mode=development`

# Required Installation
   
    npm install @types/express
    npm install -g ts-node
    nodemon index.js //? using this no need to run the app every time
    nodemon --exec ts-node TodoRouterHandler.ts
    

# BackEnd
   1. Run nodemon --exec ts-node TodoRouterHandler.ts


  
## MySql
    npm init -y
    npm install sync-mysql
    node mysqlcall.js

    In mysql: Run in cmd is.. cmd:"node filepath"

    Error:  Client does not support authentication protocol requested by server; consider upgrading MySQL client

    Ans:ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';


## MySQLCallback
    1. Required mysql2
        npm init -y
        npm i @types/mysql
   
   First we create the mysqlcallback.js file then we created .ts file But before that we need some packges
        Run ts-node index.ts | Run node mysqlcallback.js
# MySQLAsync

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
    ### Note:
       1. If you want to see the ts to js conversion first open a 2command prompt not a Powesheel In first Run the "tsc -watch" and in 2nd 
         run the "npx webpack-dev-server --mode=development"

       2. if user want to Cretae js file in "src" folder and "Ts" file in typescript folder so modification in "tsconfig.json"
        {
            "module": "commonjs",                                
            "rootDir": "./typescript",  
            "target": "es6", 
            "outDir": "./src", 
        }



