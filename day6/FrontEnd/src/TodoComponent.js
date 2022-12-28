"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoComponent = void 0;
//~% M -  - C
class TodoComponent {
    //~* M - (V I E W) - C
    constructor(selector, service) {
        var _a, _b;
        this.todoList = [];
        this._todoService = service;
        //~* craete View
        this.createView((_a = document.querySelector(selector)) !== null && _a !== void 0 ? _a : document.body);
        //~? Store 
        this.addButton = document.querySelector("#add-button");
        this.itemList = document.querySelector("#item-list");
        this.todoInput = document.querySelector("#todo-input");
        (_b = this.addButton) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
            var _c;
            const result = yield this._todoService.createTodo((_c = this.todoInput) === null || _c === void 0 ? void 0 : _c.value);
            this.renderTodo(result);
            this.todoInput.value = "";
        }));
        const renderListAsyn = () => __awaiter(this, void 0, void 0, function* () {
            const response = yield this._todoService.getAllTodos();
            response.forEach((todo) => this.renderTodo(todo));
        });
        renderListAsyn();
    }
    renderTodo(todo) {
        //% Prepared the li element
        const item = `<li id='todo-${todo.todoKey}'>${todo.todoItem}
                        <button  id="btn-${todo.todoKey}" class="btn btn-danger" >X</button></li>`;
        //% Add it
        this.itemList.insertAdjacentHTML("beforeend", item);
        const btnEle = document.querySelector(`#btn-${todo.todoKey}`);
        btnEle === null || btnEle === void 0 ? void 0 : btnEle.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            var _a;
            console.log(todo.todoKey);
            yield this._todoService.deleteTodo(todo.todoKey);
            (_a = this.itemList.querySelector(`#todo-${todo.todoKey}`)) === null || _a === void 0 ? void 0 : _a.remove();
        }));
    }
    createView(root) {
        const template = `
        <div>
            <input class="input-text" id="todo-input" type="text" placeholder="Enter the task" />
            <button class="btn btn-primary" id="add-button">Add</button>
        </div>
        <ul id="item-list"></ul>
        `;
        root === null || root === void 0 ? void 0 : root.insertAdjacentHTML("beforeend", template);
    }
}
exports.TodoComponent = TodoComponent;
// <table style="width:60%; margin:5px"><thead><th style="width:20%">#</th><th>Name</th><th style="width:20%">Action</th></thead><tbody id="item-list"></tbody></table>
