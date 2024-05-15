import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  
  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: null, // Initialize dueDate with a default value
    completed: false
  };

  constructor(private datePipe: DatePipe, private taskService: TaskService) {}
  
  ngOnInit(): void {
  }

  addTask(): void {
    if (this.task.title.trim() !== '') {
      const currentDate = new Date();
      const formattedDate = this.datePipe.transform(currentDate, 'yyyy-MM-dd');

      this.taskService.addTask({
        id: 0,
        title: this.task.title,
        description: this.task.description,
        dueDate: formattedDate ? new Date(formattedDate) : null, // Use dueDate if not null, otherwise use formattedDate
        completed: false
      });
      this.task = {
        id: 0,
        title: '',
        description: '',
        dueDate: null, // Reset dueDate to null after adding task
        completed: false
      };
    }
  }
}
