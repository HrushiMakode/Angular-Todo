import { Component, Input, OnInit } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoItem } from './todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: TodoItem;

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {}

  removeTodo() {
    this.todosService.removeTodo(this.todo.id);
  }

  toggle() {
    this.todosService.toggleTodo(this.todo.id);
  }
}
