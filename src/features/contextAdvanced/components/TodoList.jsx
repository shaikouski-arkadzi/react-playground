import { useTodo } from "../hooks/useTodo";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

function TodoList() {
  const { todos } = useTodo();

  return (
    <ul className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}

export default TodoList;
