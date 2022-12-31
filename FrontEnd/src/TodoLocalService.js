"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoLocalService = void 0;
const TodoModel_1 = require("./TodoModel");
class TodoLocalService {
    //~* Crud
    constructor() {
        var _a, _b;
        this.localStorageKey = "TodoList";
        const list = this.getAllTodos();
        TodoModel_1.Todo.lastKey = (_b = (_a = list.at(-1)) === null || _a === void 0 ? void 0 : _a.todoKey) !== null && _b !== void 0 ? _b : 0;
    }
    createTodo(item) {
        var _a, _b;
        const todo = new TodoModel_1.Todo(item);
        //* get the existing data
        const list = this.getAllTodos();
        TodoModel_1.Todo.lastKey = (_b = (_a = list.at(-1)) === null || _a === void 0 ? void 0 : _a.todoKey) !== null && _b !== void 0 ? _b : 0;
        list.push(todo);
        this.saveTodoList(list);
        return todo;
    }
    //~% cRud
    getTodo(todokey) {
        return this.getAllTodos().find(todo => todo.todoKey == todokey);
    }
    getAllTodos() {
        var _a;
        return JSON.parse((_a = localStorage.getItem(this.localStorageKey)) !== null && _a !== void 0 ? _a : "[]");
    }
    //~! cruD
    deleteTodo(todoKey) {
        let list = this.getAllTodos();
        list = list.filter(todo => todo.todoKey != todoKey);
        this.saveTodoList(list);
        return true;
    }
    //~? crUd
    updateTodo(todokey, item) {
        const list = this.getAllTodos();
        const todo = list.find((todo) => todo.todoKey == todokey);
        if (todo) {
            todo.todoItem = item;
            this.saveTodoList(list);
            return true;
        }
        return false;
    }
    saveTodoList(list) {
        localStorage.setItem(this.localStorageKey, JSON.stringify(list));
    }
}
exports.TodoLocalService = TodoLocalService;
