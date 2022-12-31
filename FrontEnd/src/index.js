"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoComponent_1 = require("./TodoComponent");
const TodoRemoteService_1 = require("./TodoRemoteService");
//~% Execute only after the HTML is parsed and DOM tree is ready
document.addEventListener("DOMContentLoaded", () => {
    //const todoComponent = new TodoComponent('app-todo')
    //const todoComponent = new TodoComponent('app-todo', new RefactorTodoLocalService())
    const todoComponent = new TodoComponent_1.TodoComponent('app-todo', new TodoRemoteService_1.TodoRemoteService('http://localhost:30000'));
});
