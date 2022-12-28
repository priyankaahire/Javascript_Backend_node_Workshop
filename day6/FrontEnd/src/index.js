"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoComponent_1 = require("./TodoComponent");
const RefactorTodoLocalService_1 = require("./RefactorTodoLocalService");
//~% Execute only after the HTML is parsed and DOM tree is ready
document.addEventListener("DOMContentLoaded", () => {
    //const todoComponent = new TodoComponent('app-todo')
    const todoComponent = new TodoComponent_1.TodoComponent('app-todo', new RefactorTodoLocalService_1.RefactorTodoLocalService());
    //const todoComponent = new TodoComponent('app-todo', new TodoRemoteService('http://localhost:20000'))
});
