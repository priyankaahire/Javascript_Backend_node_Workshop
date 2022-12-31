const express  = require("express");



class TodoRouter {
    port = 10000;

    constructor() {
        this.router = express();

        this.addRoutes();
        this.router.listen(this.port, ()=>console.log(`Todo started at ${this.port}`));
    }

    addRoutes() {
        this.router.get('/', (req, res) => {
            res.send({"todokey":1, "todoItem":"Buy Milk"})
        });
        this.router.post("/", (req, res) => res.send("Todo Added"))
    }
}

const todoRouter = new TodoRouter();