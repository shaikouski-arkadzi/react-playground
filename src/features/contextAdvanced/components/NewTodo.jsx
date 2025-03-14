import { useTodoActions } from "../hooks/useTodoActions";
import styles from "./NewTodo.module.css";

function NewTodo() {
  const { addTodo } = useTodoActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.todo.value;
    if (!title) return;
    addTodo({ id: Math.random().toString(), title, completed: false });
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      autoComplete="off"
      className={styles.newTodoForm}
    >
      <label htmlFor="text">New Todo</label>
      <input type="text" id="text" name="todo" className={styles.inputField} />
    </form>
  );
}

export default NewTodo;
