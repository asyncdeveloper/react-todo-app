import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {

  state = {
      todos:[]
  };

  deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
         return todo.id !== id;
      });
      this.setState({
          todos: todos
      })
  };

  addTodo = (todo) => {
      todo.id = parseInt(Math.random() * 100);
      let todos = [...this.state.todos,todo];
      this.setState({
         todos: todos
      });
  };

  render() {
      return (
        <div className="todo-app container">
            <h1 className="center blue-text">Todo App</h1>
            <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
            <AddTodo addTodo={this.addTodo} />
        </div>
      );
  }
}

export default App;
