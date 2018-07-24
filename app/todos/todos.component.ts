import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';
import { Todos } from './Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todos[];
  newTodos: any = {};
  
  constructor(private _todoService: TodosService) { }

  ngOnInit() {
    this.getTodos();
  }

  getTodos() {
    this.todos = this._todoService.getTodoList();
  }

  addTodo(newTodoLabel){
    var newTodo = {
      name: newTodoLabel,
      done:false
    };
    this.todos.push(newTodo);
  }

  deleteTodos(todo:Todos){
    this._todoService.deleteTodos(todo);
  }
}
