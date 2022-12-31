import {Todo} from './TodoModel';

//~? We are defining a CONTRACT for All providers

export interface ITodoService {
    createTodo(item:string) : Todo;
    getTodo(todoKey: number) : Todo | undefined
    getAllTodos() : Todo[];
    deleteTodo(todokey: number) : Todo | boolean;
    updateTodo(todoKey: number, todoItem: string) : boolean;
}