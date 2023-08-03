import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks:Task[]=[new Task("task1"),new Task("task2"),new Task("task3"),new Task("task4")];
  add(newTask:string){
    this.tasks.push(new Task(newTask));
  }
  remove(existingTask:Task){
    var userConfermed=confirm(`Are you sure you want to delete this task?\n ${existingTask}`);
    if(userConfermed){
      this.tasks=this.tasks.filter(task=>task!==existingTask);
    }
  }
  markAsDone(task:Task){
    task.isDone=true;
    }

  }
class Task{
  constructor(public title:string){}
  isDone:boolean=false;
}
