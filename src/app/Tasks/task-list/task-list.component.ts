import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  markAsCompleted(task: Task): void {
    task.completed = true;
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task);
    this.tasks = this.taskService.getTasks();
  }
}