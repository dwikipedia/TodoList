import { TODOS } from './todos/todos-detail';
import { Todos } from './todos/Todos';
import { Injectable } from '@angular/core';

@Injectable()
export class TodosService {
  private todoList = TODOS;
  
  getTodoList():Todos[]{
    console.log(this.todoList);
    return this.todoList
  }

  deleteTodos(todo:Todos){
    this.todoList.splice(this.todoList.indexOf(todo),1);
    console.log(this.todoList); 
  }
}
