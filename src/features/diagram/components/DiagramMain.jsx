import { useState } from "react";
import { Diagram } from "./Diagram";

export default function DiagramMain() {
  const [nodes, setNodes] = useState([
    {
      id: "1",
      text: "Block 1 ith long text text ",
      x: 50,
      y: 50,
      dependencies: ["2", "3"],
    },
    {
      id: "2",
      text: "Block 2 ",
      x: 220,
      y: 300,
      dependencies: ["3"],
    },
    {
      id: "3",
      text: "Block 3 w",
      x: 350,
      y: 50,
      dependencies: [],
    },
    {
      id: "4",
      text: "Block 4",
      x: 500,
      y: 200,
      dependencies: ["1", "3"],
    },
  ]);

  const handleDeleteNode = (id) => {
    const updatedNodes = nodes.filter((node) => node.id !== id);
    setNodes(updatedNodes);
  };

  return <Diagram nodes={nodes} onDeleteNode={handleDeleteNode} />;
}
