//~* Bundle all files for webpack

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