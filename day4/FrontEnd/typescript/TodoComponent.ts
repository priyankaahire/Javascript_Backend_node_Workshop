import {Todo} from './TodoModel'
//~% M -  - C
export class TodoComponent {

    private todoList : Todo[] = [];
    
    //~* M - (V I E W) - C
    constructor(selector: string) {
        const template = `
    <div>
        <input class="input-text" id="todo-input" type="text" placeholder="Enter the task" />
        <button class="btn btn-primary" id="add-button">Add</button>
    </div>
    <ul id="item-list"></ul>
    `
        //~% Process to the given "string" and convert to DOM Element
        
        const root = document.querySelector(selector);
        root?.insertAdjacentHTML("beforeend", template)

        const addButton = document.querySelector("#add-button") as HTMLButtonElement;
        const itemList = document.querySelector("#item-list") as HTMLUListElement;
        const todoInput = document.querySelector("#todo-input") as HTMLInputElement;
        //~! Read back from the local storage
        this.todoList = JSON.parse(localStorage.getItem("todolist") ?? "[]")
        this.todoList.forEach((todo:Todo) => {
            const item = `<li>${todo.todoItem}</li>`
            itemList.insertAdjacentHTML("beforeend", item)
        })
        console.log("Constrcutor", this.todoList)
        //~* Dynamic add using the button click
        addButton?.addEventListener("click", () => {

            const todo = new Todo(todoInput?.value);
            this.todoList.push(todo);
            //% Prepared the li element
            const item = `<li>${todoInput?.value}</li>`;
            //% Add it
            itemList.insertAdjacentHTML("beforeend", item)

            //% Make input null login
            todoInput.value = "";

            console.log("local strorage", this.todoList)
            //~! Write to the local storage
            localStorage.setItem("todolist", JSON.stringify(this.todoList))
        })
    }
}

