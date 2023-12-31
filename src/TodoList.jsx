import { useState, useEffect } from "react";
import List from "@mui/material/List";
import { Box, Typography } from "@mui/material";
import ToDoItem from "./TodoItem";
import TodoForm from "./TodoForm";

const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todos"));
  if (!data) return [];
  return data;
};

export default function TodoList() {
  const [todos, setTodos] = useState(getInitialData);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((t) => t.id !== id);
    });
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    });
  };

  const addTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { text: text, id: crypto.randomUUID(), completed: false },
      ];
    });
  };

  return (
    <Box
      sc={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        To Dos
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            remove={removeTodo}
            toggle={toggleTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </List>
    </Box>
  );
}
