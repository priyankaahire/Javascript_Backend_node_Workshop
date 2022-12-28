//~* Bundle all files for Webpack

* 1. Install WEbpack
    npm install webpack webpack-cli webpack-dev-server

* 2. Create ./src for script
        move ALL *.js to ./src

* 3. Create ./public for everything else
        move index.html to ./public

* 4. Refactor index.js
        move TodoComponent to TodoComponent.js

* 5. Export JS classes
        module.exports = TodoComponent

* 6. Chnage the <script src>
        <script src="main.js"></script>
* 7. npx webpack-dev-server --mode=development