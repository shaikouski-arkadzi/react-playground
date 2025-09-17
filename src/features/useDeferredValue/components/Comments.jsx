import { useDeferredValue } from "react";

const Comments = ({ entities = [] }) => {
  // Кэшируем значения, помечаем как не срочное для обновления
  const values = useDeferredValue(entities);

  return (
    <ul>
      {values.map((comment) => (
        <li key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
};

export { Comments };
