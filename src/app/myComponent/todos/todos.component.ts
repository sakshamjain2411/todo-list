import { Component, OnInit } from '@angular/core';
import { todoObject } from './todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todoArray:todoObject[];
  constructor() {
    this.todoArray = [
    {
      sno:1,
      title: "This is Title 1",
      desc: "This is Description",
      active: true
    },
    {
      sno:2,
      title: "This is Title 2",
      desc: "This is Description",
      active: true
    },
    {
      sno:3,
      title: "This is Title 3",
      desc: "This is Description",
      active: true
    }
    ]
   }

  ngOnInit(): void {
  }

}
