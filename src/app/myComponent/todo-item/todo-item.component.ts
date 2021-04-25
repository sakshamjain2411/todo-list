import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { todoObject } from '../todos/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: todoObject;
  @Output() todoDelete: EventEmitter<todoObject> = new EventEmitter();
  @Output() todoToggle: EventEmitter<todoObject> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: todoObject){
    this.todoDelete.emit(todo);
    console.log(todo.title)
  }

  onCheckBoxClick(todo: todoObject){
    this.todoToggle.emit(todo);
  }

}
