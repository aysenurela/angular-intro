import { Component } from '@angular/core';

type Todo = {
	id: number;
	title: string;
}

@Component({
  selector: 'app-input', // element
  templateUrl: './app.input.html'
  // styleUrls: ['./app.component.css']
})
export class AppInput {
  todo:string = "";
  placeholder:string = 'Add a new todo';
  todos: Todo[] = [];
  onKeyup(event: any) {
    this.todo = event.target.value
  };
  disableAdd: Function = () => {
    return this.todo.length < 3
  };
  shouldRenderTodos() {
    return this.todos.length > 0
  };
  onAdd:Function = () => {
    const todo: Todo = {
      title: this.todo,
      id: Math.random()
    }
    this.todos.push(todo)
    this.todo = ""
  };
  onDelete:Function = (id: number) => {
    const elemInd = this.todos.findIndex((todo) => todo.id === id)
    this.todos.splice(elemInd,1)
  };
}
