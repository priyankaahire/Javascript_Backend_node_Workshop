# Javascript_Backend_node_Workshop

## Bundle all files for webpack

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
## Run npx webpack-dev-server 
    1. npm install -D webpack webpack-cli webpack-dev-server
    1. create typescript folder, move all files from src
    2. rename .js files to .ts
    2. npm install typescript ts-node
    2. npm i -g typescript
    3. tsc --init in root folder (Create the tsconfig.json file) Even always in cmd
    4. refactor TodoComponent from js to ts
    5. tsc --watch
    6. npx webpack-dev-server --mode=development


## Note: If you want to see the ts to js conversion first open a 2command prompt not a Powesheel In first Run the "tsc -watch" and in 2nd run the "npx webpack-dev-server --mode=development"

## if user want to Cretae js file in "src" folder and "Ts" file in typescript folder so modification in "tsconfig.json"
    {
        "module": "commonjs",                                
        "rootDir": "./typescript",  
        "target": "es6", 
        "outDir": "./src", 
    }

## Required Installation
    npm install -g typescript
    npm install @types/express
    npm install -g ts-node
    nodemon index.js //? using this no need to run the app every time
    nodemon --exec ts-node TodoRouterHandler.ts
    

## BackEnd
1. Run nodemon --exec ts-node TodoRouterHandler.ts

# FrontEnd
1. Run tsc --watch
2. npx webpack-dev-server --mode=development
  
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


