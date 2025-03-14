/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useCallback, useMemo } from "react";

export const TodoContext = createContext(null);
export const TodoActionsContext = createContext(null);

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([]);

  const totalTodos = todos.length;

  const addTodo = useCallback(
    (todo) => setTodos((todos) => [...todos, todo]),
    []
  );

  const toggleTodo = useCallback(
    (id) =>
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      ),
    []
  );

  const removeTodo = useCallback(
    (id) => setTodos((todos) => todos.filter((todo) => todo.id !== id)),
    []
  );

  const value = useMemo(
    () => ({
      todos,
      totalTodos,
    }),
    [todos, totalTodos]
  );

  const actions = useMemo(
    () => ({
      addTodo,
      toggleTodo,
      removeTodo,
    }),
    [addTodo, toggleTodo, removeTodo]
  );

  return (
    <TodoContext.Provider value={value}>
      <TodoActionsContext.Provider value={actions}>
        {children}
      </TodoActionsContext.Provider>
    </TodoContext.Provider>
  );
}

export default TodoProvider;
