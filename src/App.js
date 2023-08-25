import "./App.css";
import { Fragment, useEffect, useState } from "react";
import ToDoForm from "./components/todo-form";
import ToDoTop from "./components/todo-top";
import ToDoList from "./components/todo-list";

function App() {
  const [todos, setTodos] = useState(() => {
    const localStore = localStorage.getItem("TODOS");

    if (localStore === null) return [];

    return JSON.parse(localStore);
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = (title) => {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title }];
    });
  };

  const removeTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  console.log(todos);

  return (
    <Fragment>
      <ToDoTop />
      <ToDoForm submit={addNewTodo} />
      <ToDoList todos={todos} removeTodo={removeTodo} />
    </Fragment>
  );
}

export default App;
