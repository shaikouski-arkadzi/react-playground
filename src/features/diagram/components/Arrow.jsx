export function Arrow({
  arrow: {
    start: { x: x1, y: y1 },
    end: { x: x2, y: y2 },
  },
}) {
  return (
    <svg
      style={{
        position: "absolute",
        zIndex: 1,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="2" />
    </svg>
  );
}
