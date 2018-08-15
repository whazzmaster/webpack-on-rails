import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Todo.module.scss";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onCompletedToggle = this.onCompletedToggle.bind(this);
  }

  shouldComponentUpdate() {
    return true;
  }

  onRemoveClick(event) {
    event.preventDefault();
    const { todo } = this.props;
    const { handleTodoRemove } = this.props;
    handleTodoRemove(todo.id);
  }

  onCompletedToggle() {
    const { todo } = this.props;
    const { handleTodoToggle } = this.props;
    handleTodoToggle(todo.id);
  }

  render() {
    const { todo } = this.props;
    let classes = "";
    if (todo.completed) {
      classes = styles.completed;
    }

    return (
      <li className={styles.todo}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={this.onCompletedToggle}
        />
        <a role="button" tabIndex="-1" onClick={this.onRemoveClick}>
          &times;
        </a>
        <span className={classes}>{todo.label}</span>
      </li>
    );
  }
}

Todo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  handleTodoRemove: PropTypes.func.isRequired,
  handleTodoToggle: PropTypes.func.isRequired,
};

export default Todo;
