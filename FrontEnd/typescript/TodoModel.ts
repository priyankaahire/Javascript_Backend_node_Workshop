export class Todo {
    public static lastKey = 0;
    public todoItem: string;
    public todoKey: number

    constructor(todoItem:string) {
        this.todoKey = ++Todo.lastKey;
        this.todoItem =  todoItem;
    }

}