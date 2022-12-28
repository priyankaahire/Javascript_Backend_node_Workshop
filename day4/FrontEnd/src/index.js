"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TodoComponent_1 = require("./TodoComponent");
//~% Execute only after the HTML is parsed and DOM tree is ready
document.addEventListener("DOMContentLoaded", () => {
    const todoComponent = new TodoComponent_1.TodoComponent('app-todo');
});
