import { Component } from '@angular/core';

type Todo = {
	id: number
	title: string
  completed: boolean
}

@Component({
  selector: 'app-todos', // element
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todo:string = "";
  placeholder:string = 'Add a new todo';
  todos: Todo[] = [];
  // onKeyup(event: any) {
  //   this.todo = event.target.value
  // };
  disableAdd: Function = () => {
    return this.todo.length < 3
  };
  shouldRenderTodos() {
    return this.todos.length > 0
  };
  onAdd:Function = () => {
    const todo: Todo = {
      title: this.todo,
      id: Math.random(),
      completed: false
    }
    this.todos.push(todo)
    this.todo = ""
  };
  //  arrow function always binds to its parent’s this (?)
  public onDelete = (id: number) => {
    const elemInd = this.todos.findIndex((todo) => todo.id === id)
    this.todos.splice(elemInd,1)
  };
  updateTodos = (id: number) => {
    const updatedTodoInd = this.todos.findIndex((todo) => id === todo.id);
    this.todos[updatedTodoInd].completed = !this.todos[updatedTodoInd].completed
  }
}
