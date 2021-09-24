import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { TodoItem } from '../todo-list/todo-item/todo-item.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class TodosService implements OnInit {
  todosData = new EventEmitter<TodoItem[]>();

  private _todos: TodoItem[] = [];

  get todos() {
    return [...this._todos];
  }

  set todos(todo: TodoItem[]) {
    this._todos = todo;
  }

  constructor(private localStorage: LocalStorageService) {
    this._todos = (this.localStorage.getData('todos') as TodoItem[]) || [];
  }

  ngOnInit(): void {}

  toggleTodo(id: number) {
    const todo = this._todos.filter((item) => item.id === id)[0];
    todo.isCompleted = !todo.isCompleted;
    // this.removeTodo(todo.id);
    // this._todos = !!todo.isCompleted
    //   ? [...this._todos, todo]
    //   : [todo, ...this._todos];
    // this.localStorage.setData('todos', this._todos);
    // this.todosData.emit([...this._todos]);
  }

  removeTodo(id: number) {
    const todos = this._todos.filter((item) => item.id !== id);
    this._todos = todos;
    this.localStorage.setData('todos', this._todos);
    this.todosData.emit([...this._todos]);
  }

  addTodo(task: string) {
    const todo: TodoItem = new TodoItem(task);
    this._todos.unshift(todo);
    this.localStorage.setData('todos', this._todos);
    this.todosData.emit([...this._todos]);
  }
}
