import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  host: {
    class: 'todo-app',
  },
})
export class TodoAppComponent implements OnInit {
  task: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  addTodo() {
    this.task = this.task.trim();
    if (this.task.length) {
      this.todosService.addTodo(this.task);
      this.task = '';
    }
  }
}
