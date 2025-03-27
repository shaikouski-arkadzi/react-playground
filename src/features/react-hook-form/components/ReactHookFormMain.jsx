import { Controller, useForm } from "react-hook-form";
import styles from "./Form.module.css";

function ReactHookFormMain() {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    setValue,
    watch,
    control,
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      firstName: "test1",
      age: 18,
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <>
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
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <input
              {...field}
              className={`${styles.input} ${
                errors?.firstName ? styles.inputError : ""
              }`}
            />
          )}
        />
        <input type="submit" disabled={!isValid} className={styles.submit} />
        <button type="button" onClick={() => setValue("firstName", "test2")}>
          Установить значение
        </button>
        <div style={{ height: 40 }}>
          {errors?.firstName && (
            <p className={styles.errorMessage}>{errors?.firstName.message}</p>
          )}
        </div>
      </form>
      {watch("firstName")}
    </>
  );
}

export default ReactHookFormMain;
