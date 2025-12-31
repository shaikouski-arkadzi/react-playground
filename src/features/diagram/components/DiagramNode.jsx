import { useRef } from "react";

export function DiagramNodeComponent({ node, onDelete, rootRef }) {
  const ref = useRef();

  return (
    <div
      key={node.id}
      ref={(value) => {
        ref.current = value ?? undefined;
        typeof rootRef === "function"
          ? rootRef(value)
          : (rootRef.current = value);
      }}
      style={{
        position: "absolute",
        left: node.x,
        top: node.y,
        maxWidth: "300px",
        backgroundColor: "#e0e0e0",
        border: "2px solid black",
        padding: 5,
      }}
    >
      <div>{node.text}</div>
      <div>
        <button
          style={{ backgroundColor: "white", padding: "0.5em" }}
          onClick={() => onDelete(node.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
