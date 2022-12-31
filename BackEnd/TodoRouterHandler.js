"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
//~? MODEL
class Todo {
    constructor(key, item) {
        this.todoKey = key;
        this.todoItem = item;
    }
}
class TodoRouterHandler {
    constructor() {
        this.port = 20000;
        this.todoList = [];
        this.router = (0, express_1.default)();
        this.router.use(body_parser_1.default.urlencoded({ extended: true }));
        this.router.use(body_parser_1.default.json());
        this.todoList.push(new Todo(1, "Buy Milk"));
        this.todoList.push(new Todo(2, "Buy Paneer"));
        this.addRouter();
        this.router.listen(this.port, () => console.log(`Todo started at ${this.port}`));
    }
    addRouter() {
        //~! D of curuD
        this.router.delete("/:todoKey", (req, res) => {
            const found = this.todoList.find(todo => todo.todoKey === +req.params.todoKey);
            if (!found)
                res.sendStatus(404);
            else {
                this.todoList = this.todoList.filter(todo => todo.todoKey != +req.params.todoKey);
                res.send(this.todoList);
            }
        });
        //~? R of cRud
        //? getAllTodos()
        this.router.get("/", (req, res) => {
            res.send(this.todoList);
        });
        //? getTodo()
        this.router.get("/:tk", (req, res) => {
            const key = +req.params.tk;
            const foundTodo = this.todoList.find(todo => todo.todoKey == key);
            if (foundTodo)
                res.send(foundTodo);
            else
                res.sendStatus(404);
        });
        //~* C of Crud
        this.router.post("/", (req, res) => {
            var _a, _b;
            const body = req.body;
            let lastkey = ((_b = (_a = this.todoList) === null || _a === void 0 ? void 0 : _a.at(-1)) === null || _b === void 0 ? void 0 : _b.todoKey) + 1;
            const todo = new Todo(lastkey !== null && lastkey !== void 0 ? lastkey : 1, req.body.todoItem);
            this.todoList.push(todo);
            res.send(todo);
        });
    }
}
const rodoRouterHandler = new TodoRouterHandler();
