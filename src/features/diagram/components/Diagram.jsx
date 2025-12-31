import { useLayoutEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";
import { DiagramNodeComponent } from "./DiagramNode";
import { shiftArrow } from "../utils/shiftArrow";

export const Diagram = ({ nodes, onDeleteNode }) => {
  const nodesRef = useRef(new Map());
  const [arrows, setArrows] = useState([]);

  useLayoutEffect(() => {
    const arrows = [];
    nodes.forEach((node) => {
      const { x: x1, y: y1, dependencies } = node;

      dependencies.forEach((dependencyId) => {
        const dependencyNode = nodes.find((n) => n.id === dependencyId);

        if (dependencyNode) {
          const { x: x2, y: y2 } = dependencyNode;
          arrows.push(
            shiftArrow(
              {
                start: {
                  x: x1,
                  y: y1,
                },
                end: {
                  x: x2,
                  y: y2,
                },
                id: `${node.id}-${dependencyId}`,
              },
              nodesRef.current.get(node.id),
              nodesRef.current.get(dependencyNode.id)
            )
          );
        }
      });
    });

    setArrows(arrows);
  }, [nodes]);

  return (
    <div style={{ position: "relative", width: "800px", height: "600px" }}>
      {arrows.map((arrow) => (
        <Arrow key={arrow.id} arrow={arrow} />
      ))}
      {nodes.map((node) => (
        <DiagramNodeComponent
          key={node.id}
          rootRef={(htmlNode) => {
            if (htmlNode) {
              nodesRef.current.set(node.id, htmlNode);
            } else {
              nodesRef.current.delete(node.id);
            }
          }}
          node={node}
          onDelete={onDeleteNode}
        />
      ))}
    </div>
  );
};
