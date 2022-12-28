"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
const TodoModel_1 = require("./TodoModel");
class TodoComponent {
    constructor(selector) {
        var _a;
        this.todoList = [];
        const template = `
    <div>
        <input class="input-text" id="todo-input" type="text" placeholder="Enter the task" />
        <button class="btn btn-primary" id="add-button">Add</button>
    </div>
    <ul id="item-list"></ul>
    `;
        //~% Process to the given "string" and convert to DOM Element
        //~! xvcxbvhxchxhx
        const root = document.querySelector(selector);
        root === null || root === void 0 ? void 0 : root.insertAdjacentHTML("beforeend", template);
        const addButton = document.querySelector("#add-button");
        const itemList = document.querySelector("#item-list");
        const todoInput = document.querySelector("#todo-input");
        this.todoList = JSON.parse((_a = localStorage.getItem("todolist")) !== null && _a !== void 0 ? _a : "[]");
        this.todoList.forEach((todo) => {
            const item = `<li>${todo.todoItem}</li>`;
            itemList.insertAdjacentHTML("beforeend", item);
        });
        console.log("Constrcutor", this.todoList);
        //~* Dynamic add using the button click
        addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", () => {
            const todo = new TodoModel_1.Todo(todoInput === null || todoInput === void 0 ? void 0 : todoInput.value);
            this.todoList.push(todo);
            //% Prepared the li element
            const item = `<li>${todoInput === null || todoInput === void 0 ? void 0 : todoInput.value}</li>`;
            //% Add it
            itemList.insertAdjacentHTML("beforeend", item);
            //% Make input null login
            todoInput.value = "";
            console.log("local strorage", this.todoList);
            localStorage.setItem("todolist", JSON.stringify(this.todoList));
        });
    }
}
exports.TodoComponent = TodoComponent;
