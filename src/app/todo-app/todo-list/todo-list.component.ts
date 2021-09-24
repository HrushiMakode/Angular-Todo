import { Component, OnInit } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { TodoItem } from './todo-item/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  host: {
    class: 'full-width',
  },
})
export class TodoListComponent implements OnInit {
  todos: TodoItem[] = [];

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.todos = this.todosService.todos;
    this.todosService.todosData.subscribe((newTodos) => {
      this.todos = [...newTodos];
    });
  }
}
