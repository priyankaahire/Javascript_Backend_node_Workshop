
Run npx webpack-dev-server 
1. npm install -D webpack webpack-cli webpack-dev-server
1. create typescript folder, move all files from src
2. rename .js files to .ts
2. npm install typescript ts-node
2. npm i -g typescript
3. tsc --init in root folder (Create the tsconfig.json file) Even always in cmd
4. refactor TodoComponent from js to ts
5. tsc --watch
6. npx webpack-dev-server --mode=development


** Note: If you want to see the ts to js conversion first open a 2 commond promt not a Powesheel first Run the "tsc -watch" and in 2nd terminal run the "npx webpack-dev-server --mode=development"

** if user want to Cretae js file in "src" folder and "Ts" file in typescript folder then need to be chnage the "tsconfig.json"

 {
    "module": "commonjs",                                
    "rootDir": "./typescript",  
    "target": "es6", 
    "outDir": "./src", 
 }



Run the node project by installing below
npm install -g typescript
npm install @types/express
npm install -g ts-node
nodemon index.js //? using this no need to run the app every time
nodemon --exec ts-node TodoRouterHandler.ts

then run postman all API
