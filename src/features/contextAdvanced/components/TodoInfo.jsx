import { useTodo } from "../hooks/useTodo";
import styles from "./TodoInfo.module.css";

function TodoInfo() {
  const { totalTodos } = useTodo();

  return <div className={styles.todoInfo}>Total Todos: {totalTodos} </div>;
}

export default TodoInfo;
