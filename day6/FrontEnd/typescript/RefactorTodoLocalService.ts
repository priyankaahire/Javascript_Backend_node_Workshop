import {Todo} from './TodoModel'
import { RefactorITodoService } from './RefactorITodoService';

export class RefactorTodoLocalService implements RefactorITodoService {

    private localStorageKey = "TodoList"
   
    constructor() {
      this.init()
    }
    async init() {
      const list = await this.getAllTodos();
      Todo.lastKey = list.at(-1)?.todoKey ?? 0;
    }

     //~* Crud
    async createTodo(item:string): Promise<Todo> {
      const todo = new Todo(item);
      //* get the existing data
      const list = await this.getAllTodos();
      list.push(todo);
      Todo.lastKey = list.at(-1)?.todoKey ?? 0;
      console.log(todo)
      this.saveTodoList(list)
      return todo;
    }

    //~% cRud
    async getTodo(todokey:number) : Promise<Todo | undefined> {
      return (await this.getAllTodos()).find(todo => todo.todoKey == todokey)
    }
  
    async getAllTodos(): Promise<Todo[]> {
      return JSON.parse(localStorage.getItem(this.localStorageKey) ?? "[]") as Todo[]; 
    }

    //~! cruD
    async deleteTodo(todoKey:number): Promise<Todo | boolean> {
      let list = await this.getAllTodos()
      list =  list.filter(todo => todo.todoKey != todoKey);
      this.saveTodoList(list) 
      Todo.lastKey = list.at(-1)?.todoKey ?? 0;
      return true
    }

    //~? crUd
    async updateTodo(todokey:number, item:string) : Promise<boolean> {
      const list = await this.getAllTodos();
      const todo = list.find((todo:Todo) => todo.todoKey == todokey)
      if(todo) {
        todo.todoItem = item;
        this.saveTodoList(list);
        return true;
      }
      return false;
    }

    saveTodoList(list:Todo[]): void {
      localStorage.setItem(this.localStorageKey, JSON.stringify(list))
    }
}