export const shiftArrow = ({ start, end, id }, startNode, endNode) => {
  const startRect = startNode.getBoundingClientRect();
  const endRect = endNode.getBoundingClientRect();

  let newStart, newEnd;

  if (startRect.right < endRect.left) {
    // Start element is to the left of the end element
    newStart = {
      x: start.x + startRect.width,
      y: start.y + startRect.height / 2,
    };
    newEnd = { x: end.x, y: end.y + endRect.height / 2 };
  } else if (startRect.left > endRect.right) {
    // Start element is to the right of the end element
    newStart = { x: start.x, y: start.y + startRect.height / 2 };
    newEnd = { x: end.x + endRect.width, y: end.y + endRect.height / 2 };
  } else if (startRect.bottom < endRect.top) {
    // Start element is above the end element
    newStart = {
      x: start.x + startRect.width / 2,
      y: start.y + startRect.height,
    };
    newEnd = { x: end.x + endRect.width / 2, y: end.y };
  } else {
    // Start element is below the end element
    newStart = { x: start.x + startRect.width / 2, y: start.y };
    newEnd = { x: end.x + endRect.width / 2, y: end.y + endRect.height };
  }

  // Если нужно изменить логику определения точек, вы можете сделать это здесь

  return { id, start: newStart, end: newEnd };
};
