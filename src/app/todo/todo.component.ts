import { Component, EventEmitter, Input, Output } from '@angular/core';

type Todo = {
	id: number
	title: string
  completed: boolean
}

@Component({
  selector: 'app-todo', // element
  template: `
    <li
      [ngStyle]="{color: todoProp.completed ? 'green' : 'red' }"
      [id]="todoProp.id"
      (click)="onToggleCompleted()"
    >
      {{todoProp.title}}
      <button (click)="onDelete(todoProp.id)">X</button>
    </li>
  `
})
export class TodoComponent {
  @Input() todoProp: Todo = {title:"", id:0, completed: false}
  @Input() onDelete: Function = () => {}

  // create an event in the child
  // emit in the child
  // then listen the event in the parent (with @Output)
  @Output() toggleCompleted = new EventEmitter<number>();

  onToggleCompleted() {
    this.toggleCompleted.emit(this.todoProp.id)
  }

}
