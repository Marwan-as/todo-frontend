import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../Form";
import { Container } from "./styles";
import TodoList from "../TodoList";
import { todosUrl } from "../../constants/Api";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  const [formData, setFormData] = useState({
    text: "",
  });

  const getTodos = async () => {
    try {
      const response = await axios.get(todosUrl);
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = async (payload) => {
    const config = { headers: { "Content-type": "application/json" } };

    try {
      const response = await axios.post(todosUrl, payload, config);

      if (response.status === 201) {
        getTodos();
        setFormData({ text: "" });
      }
    } catch (error) {
      console.log(error);
      alert("Failed to add todo");
    }
  };

  const handleFieldChange = (value, fieldName) => {
    setFormData((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(formData);
  };

  return (
    <Container>
      <Form
        handleFieldChange={handleFieldChange}
        handleSubmit={handleSubmit}
        data={formData}
      />
      <TodoList todos={todos} getTodos={getTodos} />
    </Container>
  );
};

export default Todo;
