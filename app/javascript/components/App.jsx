import React, { PureComponent } from "react";
import { hot } from "react-hot-loader";
import { v4 as uuid } from "uuid";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import styles from "./App.module.scss";

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      todos: [],
    };

    this.handleTodoAdd = this.handleTodoAdd.bind(this);
    this.handleTodoRemove = this.handleTodoRemove.bind(this);
    this.handleTodoToggle = this.handleTodoToggle.bind(this);
  }

  handleTodoAdd(todoDescription) {
    const todo = {
      id: uuid.v4(),
      label: todoDescription,
      completed: false,
    };
    const { todos } = this.state;
    this.setState({ todos: [todo, ...todos] });
  }

  handleTodoRemove(todoId) {
    console.info("Removing", todoId);
    const { todos } = this.state;
    const updated = todos.filter(t => t.id !== todoId);
    this.setState({ todos: updated });
  }

  handleTodoToggle(todoId) {
    console.info("Toggling", todoId);
    const { todos } = this.state;
    const updated = todos.map(todo => {
      if (todo.id === todoId) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    this.setState({ todos: updated });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className={styles.app}>
        <h3>Todos ✔</h3>
        <TodoForm handleTodoAdd={this.handleTodoAdd} />
        <TodoList
          todos={todos}
          handleTodoRemove={this.handleTodoRemove}
          handleTodoToggle={this.handleTodoToggle}
        />
      </div>
    );
  }
}

export default hot(module)(App);
