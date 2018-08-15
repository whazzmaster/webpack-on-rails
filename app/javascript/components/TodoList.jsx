import React, { Component } from "react";
import PropTypes from "prop-types";

import Todo from "./Todo";

import styles from "./TodoList.module.scss";

class TodoList extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    let { todos } = this.props;
    const { handleTodoRemove, handleTodoToggle } = this.props;

    todos = todos.map(todo => (
      <Todo
        key={todo.id}
        todo={todo}
        handleTodoRemove={handleTodoRemove}
        handleTodoToggle={handleTodoToggle}
      />
    ));

    if (todos.length === 0) {
      todos = [
        <li key="noTodos" className={styles.noTodos}>
          No todos yet
        </li>,
      ];
    }

    return <ul className={styles.todoList}>{todos}</ul>;
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ).isRequired,
  handleTodoRemove: PropTypes.func.isRequired,
  handleTodoToggle: PropTypes.func.isRequired,
};

export default TodoList;
