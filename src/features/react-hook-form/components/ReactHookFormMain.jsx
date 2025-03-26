import { useForm } from "react-hook-form";
import styles from "./Form.module.css";

function ReactHookFormMain() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <input
        {...register("firstName", {
          required: "Enter your name",
          minLength: {
            value: 5,
            message: "Length must be more than 5 char",
          },
        })}
        className={`${styles.input} ${
          errors?.firstName ? styles.inputError : ""
        }`}
      />
      <input type="submit" disabled={!isValid} className={styles.submit} />
      <div style={{ height: 40 }}>
        {errors?.firstName && (
          <p className={styles.errorMessage}>{errors?.firstName.message}</p>
        )}
      </div>
    </form>
  );
}

export default ReactHookFormMain;
