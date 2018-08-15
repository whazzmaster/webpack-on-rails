import React, { PureComponent } from "react";
import PropTypes from "prop-types";

import styles from "./TodoForm.module.scss";

class TodoForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
    };

    this.handleTodoChange = this.handleTodoChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const { todo } = this.state;
    const { handleTodoAdd } = this.props;
    handleTodoAdd(todo);
    this.setState({ todo: "" });
  }

  handleTodoChange(event) {
    event.preventDefault();
    this.setState({ todo: event.target.value });
  }

  render() {
    const { todo } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        <input
          className={styles.todoInput}
          type="text"
          placeholder="Add todo"
          onChange={this.handleTodoChange}
          value={todo}
        />
      </form>
    );
  }
}

TodoForm.propTypes = {
  handleTodoAdd: PropTypes.func.isRequired,
};

export default TodoForm;
