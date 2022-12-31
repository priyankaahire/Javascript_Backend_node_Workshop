import {Todo} from './TodoModel';

//~? We are defining a CONTRACT for All providers

export interface RefactorITodoService {
    createTodo(item:string) : Promise<Todo>;
    getTodo(todoKey:number) : Promise<Todo | undefined>
    getAllTodos() : Promise<Todo[]>
    deleteTodo(todoKey: number) : Promise<Todo | boolean>;
    updateTodo(todoKey: number, todoItem: string) : Promise<boolean>;
}