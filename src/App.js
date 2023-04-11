import "./styles.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Input from "./components/input";

import TodoList from "./components/TodoList";
export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const handleAddInput = (todo) => {
    setInputTodo(todo);
  };
  const handleAddTask = () => {
    setTodos([
      ...todos,
      { task: inputTodo, id: Date.now().toString(), isCompleted: false }
    ]);
    setInputTodo("");
  };
  const handleDeleteTask = (deletedtodo) => {
    const newTodos = todos.filter((todo) => todo.id !== deletedtodo);
    setTodos(newTodos);
    console.log(newTodos);
  };
  const handleTodoComplete = (todoid) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoid) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    });
    console.log(todos);
    setTodos(newTodos);
  };
  const handlefilter = () => {
    if (filter == "Active") {
      return todos.filter((todo) => todo.isCompleted === false);
    } else if (filter === "Compelete") {
      return todos.filter((todo) => todo.isCompleted === true);
    } else {
      return todos;
    }
  };
  const clearCompleteTodo = () => {
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    setTodos(activeTodos);
  };
  //get active todo
  const getActiveTodo = () => {
    const activeTodos = todos.filter((todo) => !todo.isCompleted);
    return activeTodos.length;
  };
  const [inputTodo, setInputTodo] = useState("");
  return (
    <div id="main">
      <div className="InputClass">
        <Input
          handleAddInput={handleAddInput}
          inputTodo={inputTodo}
          handleAddTask={handleAddTask}
        />
      </div>
      <TodoList
        handlefilter={handlefilter}
        handleTodoComplete={handleTodoComplete}
        handleDeleteTask={handleDeleteTask}
      />
      <Footer
        getActiveTodo={getActiveTodo}
        setFilter={setFilter}
        clearCompleteTodo={clearCompleteTodo}
      />
    </div>
  );
}
