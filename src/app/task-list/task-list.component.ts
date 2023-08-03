import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {

  constructor() {}
  ngOnInit(): void {}
  
  tasks: Task[] = [
    new Task('task1'),
    new Task('task2'),
    new Task('task3'),
    new Task('task4'),
  ];
  add(newTask: string) {
    this.tasks.push(new Task(newTask));
  }
  remove(existingTask: Task) {
    var userConfermed = confirm(
      `Are you sure you want to delete this task?\n ${existingTask.title}`
    );
    if (userConfermed) {
      this.tasks = this.tasks.filter((task) => task !== existingTask);
    }
  }
}
class Task {
  constructor(public title: string) {}
  isDone: boolean = false;
  toggleIsDone() {
    this.isDone = !this.isDone;
  }
}
