const http = require("node:http")

const restServer = http.createServer(handler)
console.log("Starting server at port 1000")
restServer.listen(10000);


function handler(req, res) {
    console.log(req);

    res.write("Hello, REST");
    res.end();
}