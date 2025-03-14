import { useContext } from "react";
import { TodoActionsContext } from "../context/TodoContext";

export const useTodoActions = () => {
  const todoActionsContext = useContext(TodoActionsContext);

  if (!todoActionsContext)
    throw new Error("useTodo must be used within a TodoActionsProvider");

  return todoActionsContext;
};
