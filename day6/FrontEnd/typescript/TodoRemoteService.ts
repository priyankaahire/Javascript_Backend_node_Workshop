import {Todo} from './TodoModel';
import { RefactorITodoService } from './RefactorITodoService';

export class TodoRemoteService implements RefactorITodoService {

    constructor(private url: string) {

    }
    async createTodo(item: string): Promise<Todo> {
      const result = await fetch(this.url + "/", {
        method: "post",
        mode:"cors",
        headers:{'Content-Type':"application/json"},
        body: JSON.stringify({todoItem: item})
      })
      return await result.json()

    }
    async getTodo(todoKey: number): Promise<Todo | undefined> {
        const result = await fetch(this.url + "/" + todoKey);
        return result.json();
    }
    async getAllTodos(): Promise<Todo[]> {
      return await (await fetch(this.url + "/")).json()
    }
    async deleteTodo(todoKey: number): Promise<boolean | Todo> {
        const result = await fetch(this.url + `/${todoKey}`, {
            method:"delete",
            mode:"cors",
        })
       return await result.json();
    }
    async updateTodo(todoKey: number, todoItem: string): Promise<boolean> {
        const result = await fetch(this.url + `/${todoKey}`, {
            method:"put",
            mode:"cors",
            headers: {'Content-Type':"application/json"},
            body: JSON.stringify({todoItem: todoItem})
        })
       return await result.json();
    }

}