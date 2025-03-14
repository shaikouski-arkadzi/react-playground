import { memo } from "react";
import { useTodoActions } from "../hooks/useTodoActions";
import styles from "./TodoItem.module.css";

function TodoItem({ id, title, completed }) {
  const { toggleTodo, removeTodo } = useTodoActions();

  return (
    <li className={styles.todoItem}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      {title}
      <button onClick={() => removeTodo(id)} className={styles.deleteButton}>
        Delete
      </button>
    </li>
  );
}

export default memo(TodoItem);
