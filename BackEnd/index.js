const express = require("express");

const myApp = express()
myApp.get('/', handler);
myApp.get("/cust", (req, res) => {
    res.send("Customer required..")
})


function handler(req, res) {
    console.log("Request", req.method, req.url);
    res.send("hello, Express");
}
myApp.listen(10000, ()=>console.log("My App listing 10000"))

