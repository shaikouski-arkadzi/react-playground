import { useState, useEffect, useTransition } from "react";
import { Comments } from "./Comments";
import "../styles/style.css";

const filterBySearch = (entities, search) =>
  entities.filter((item) => item.name.concat(item.body).includes(search));

function MainUseTransition() {
  const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    startTransition(() => {
      setSearch(e.target.value);
    });
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then(setComments);
  }, []);

  return (
    <div>
      <input onChange={handleSearch} />
      {isPending && <h1>Rendering...</h1>}
      <Comments entities={filterBySearch(comments, search)} />
    </div>
  );
}

export default MainUseTransition;
