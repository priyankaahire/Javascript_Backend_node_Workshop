import {Todo} from './TodoModel'
import { ITodoService } from './ITodoService';

export class TodoLocalService implements ITodoService {

    private localStorageKey = "TodoList"
    //~* Crud
    constructor() {
      const list = this.getAllTodos();
      Todo.lastKey = list.at(-1)?.todoKey ?? 0;
    }
    createTodo(item:string) {
      const todo = new Todo(item);
      //* get the existing data
      const list = this.getAllTodos();
      Todo.lastKey = list.at(-1)?.todoKey ?? 0;
      list.push(todo);
      this.saveTodoList(list)
      return todo;
    }
    //~% cRud
    getTodo(todokey:number) {
      return this.getAllTodos().find(todo => todo.todoKey == todokey)
    }
  
    getAllTodos():Todo[] {
      return JSON.parse(localStorage.getItem(this.localStorageKey) ?? "[]") as Todo[]; 
    }
    //~! cruD
    deleteTodo(todoKey:number) {
      let list = this.getAllTodos()
      list =  list.filter(todo => todo.todoKey != todoKey);
      this.saveTodoList(list) 
      return true
    }
    //~? crUd
    updateTodo(todokey:number, item:string) {
      const list = this.getAllTodos();
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