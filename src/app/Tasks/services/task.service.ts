// task.service.ts

import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  deleteTask(task: Task): void {
    const index = this.tasks.findIndex(t => t === task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
