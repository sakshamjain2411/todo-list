import { Component, OnInit } from '@angular/core';
import { todoObject } from './todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  localItem: string;
  todoArray: todoObject[];
  constructor() {
    this.localItem = localStorage.getItem("todo");
    if (this.localItem == null) {
      this.todoArray = [];
    }
    else
    {
      this.todoArray = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteToDo(todo: todoObject) {
    const index = this.todoArray.indexOf(todo);
    this.todoArray.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(this.todoArray));
  }

  addToDo(todo: todoObject) {
    this.todoArray.push(todo);
    localStorage.setItem("todo", JSON.stringify(this.todoArray));
  }

  toggleToDo(todo: todoObject) {
    todo.active = !todo.active;
    localStorage.setItem("todo", JSON.stringify(this.todoArray));
  }

}
