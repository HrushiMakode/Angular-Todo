export class TodoItem {
  public id: number;
  public task: string;
  public isCompleted: boolean;

  constructor(task: string) {
    this.id = Math.random();
    this.task = task;
    this.isCompleted = false;
  }
}
