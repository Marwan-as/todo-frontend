import React from "react";
import { ListContainer, Li, DeleteIcon, Text } from "./styles";
import axios from "axios";
import { todosUrl } from "../../constants/Api";

const TodoList = ({ todos, getTodos }) => {
  const updateTodo = async (id) => {
    try {
      const response = await axios.put(`${todosUrl}/${id}`, { id });
      getTodos();
      return response.data.json;
    } catch (error) {
      console.error(error.message);
      alert("Failed to update todo");
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(`${todosUrl}/${id}`, { id });
      getTodos();
      return response.data.json;
    } catch (error) {
      console.error(error.message);
      alert("Failed to delete todo");
    }
  };

  const convertDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString();
  };

  const renderText = (todo) => {
    return (
      <Text
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
        onClick={() => updateTodo(todo._id)}
        title={
          todo.completed
            ? `Added on ${convertDate(
                todo.createdAt
              )}\nCompleted on ${convertDate(todo.updatedAt)}`
            : `Added on ${convertDate(todo.createdAt)}\nClick to complete`
        }
      >
        {todo.text}
      </Text>
    );
  };

  const renderDeleteIcon = (todo) => {
    return (
      <DeleteIcon
        type="button"
        onClick={() => deleteTodo(todo._id)}
        title="Delete Todo"
      >
        <i className="fa fa-trash"></i>
      </DeleteIcon>
    );
  };

  const renderList = (todo) => {
    return (
      <Li key={todo._id}>
        {renderText(todo)}
        {renderDeleteIcon(todo)}
      </Li>
    );
  };

  return <ListContainer>{todos?.map(renderList)}</ListContainer>;
};

export default TodoList;
