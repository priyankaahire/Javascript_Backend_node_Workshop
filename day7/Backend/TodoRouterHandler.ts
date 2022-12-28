import express, {Router, Express, Request, Response } from "express";
import bodyParser from 'body-parser';
//~? MODEL

class Todo {
    todoKey : number;
    todoItem: string;

    constructor(key:number, item:string) {
        this.todoKey  = key;
        this.todoItem = item;
    }
}



class TodoRouterHandler {
    private port     : number = 20000;
    private router   : Express;
    private todoList : Todo[] = [];


    public constructor() {
        this.router = express();
        this.router.use(bodyParser.urlencoded({extended:true}));
        this.router.use(bodyParser.json())
        this.todoList.push(new Todo(1, "Buy Milk"));
        this.todoList.push(new Todo(2, "Buy Paneer"));
        this.addRouter();
        this.router.listen(this.port, ()=>console.log(`Todo started at ${this.port}`))

    }

    private addRouter() : void {
        
         //~! D of curuD

         this.router.delete("/:todoKey", (req: Request, res: Response) => {
            const found = this.todoList.find(todo => todo.todoKey === +req.params.todoKey);
            if(! found)
                res.sendStatus(404)
            else {
                this.todoList = this.todoList.filter(todo => todo.todoKey != +req.params.todoKey);
                res.send(this.todoList)
            }
        })

        //~? R of cRud

        //? getAllTodos()
        this.router.get("/", (req, res) => {
            res.send(this.todoList)
        });

        //? getTodo()

        this.router.get("/:tk", (req:Request, res:Response) => {
            const key = +req.params.tk;
            const foundTodo = this.todoList.find(todo => todo.todoKey == key)
            if(foundTodo)
                res.send(foundTodo)
            else
                res.sendStatus(404)
        })

        //~* C of Crud

        this.router.post("/", (req: Request, res: Response) => {
            const body = req.body;
            let lastkey = (this.todoList?.at(-1)?.todoKey)!+1;
            const todo = new Todo(lastkey??1, req.body.todoItem)
            this.todoList.push(todo);
            res.send(todo);
        })

       
    }
}

const rodoRouterHandler = new TodoRouterHandler();