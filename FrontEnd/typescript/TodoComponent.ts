import { ITodoService } from './ITodoService';
import {Todo} from './TodoModel'
//import { TodoLocalService } from './TodoLocalService';
//import { TodoRemoteService } from './TodoRemoteService';
import { RefactorITodoService } from './RefactorITodoService';
//~% M -  - C
export class TodoComponent {
    private todoList : Todo[] = [];
    //private _todoService = new TodoService();
    // private _todoService: ITodoService;
    private _todoService: RefactorITodoService
    private addButton : HTMLButtonElement;
    private todoInput : HTMLInputElement;
    private itemList: HTMLUListElement

    //~* M - (V I E W) - C

    constructor(selector: string, service: RefactorITodoService) {

        this._todoService = service;
        
        //~* craete View
        this.createView(document.querySelector(selector) ?? document.body);

        //~? Store 
        this.addButton = document.querySelector("#add-button") as HTMLButtonElement;
        this.itemList  =  document.querySelector("#item-list") as HTMLUListElement;
        this.todoInput = document.querySelector("#todo-input") as HTMLInputElement;

        this.addButton?.addEventListener("click", async() => {
            const result = await this._todoService.createTodo(this.todoInput?.value); 
            this.renderTodo(result)
            this.todoInput.value = "";
        })

        const renderListAsyn = async () => {
            const response  = await this._todoService.getAllTodos()
            response.forEach((todo:Todo) => this.renderTodo(todo))
        }
        renderListAsyn();
       
    }
    public renderTodo(todo:Todo) {
        //% Prepared the li element
        console.log(todo)
        const item = `<li id='todo-${todo.todoKey}'>${todo.todoItem}
                        <button  id="btn-${todo.todoKey}" class="btn btn-danger" >X</button></li>`;
                        //% Add it
        this.itemList.insertAdjacentHTML("beforeend", item)
        const btnEle = document.querySelector(`#btn-${todo.todoKey}`)
    
        btnEle?.addEventListener('click', async () => {
            console.log(todo.todoKey)
            await this._todoService.deleteTodo(todo.todoKey);
            this.itemList.querySelector(`#todo-${todo.todoKey}`)?.remove();
        })
    }
    public createView(root: HTMLElement) {

        const template = `
        <div>
            <input class="input-text" id="todo-input" type="text" placeholder="Enter the task" />
            <button class="btn btn-primary" id="add-button">Add</button>
        </div>
        <ul id="item-list"></ul>
        `
        root?.insertAdjacentHTML("beforeend", template);
    }
   
}
// <table style="width:60%; margin:5px"><thead><th style="width:20%">#</th><th>Name</th><th style="width:20%">Action</th></thead><tbody id="item-list"></tbody></table>

