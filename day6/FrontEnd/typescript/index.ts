import {TodoComponent} from './TodoComponent';
import { RefactorTodoLocalService } from './RefactorTodoLocalService';
import { TodoRemoteService } from './TodoRemoteService';

//~% Execute only after the HTML is parsed and DOM tree is ready
document.addEventListener("DOMContentLoaded", () => {
    //const todoComponent = new TodoComponent('app-todo')
    const todoComponent = new TodoComponent('app-todo', new RefactorTodoLocalService())
    //const todoComponent = new TodoComponent('app-todo', new TodoRemoteService('http://localhost:20000'))

});


