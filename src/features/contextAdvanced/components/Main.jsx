import TodoProvider from "../context/TodoContext";
import NewTodo from "./NewTodo";
import TodoInfo from "./TodoInfo";
import TodoList from "./TodoList";
import styles from "./Main.module.css";

function Main() {
  return (
    <TodoProvider>
      <div className={styles.main}>
        <NewTodo />
        <TodoList />
        <TodoInfo />
      </div>
    </TodoProvider>
  );
}

export default Main;
