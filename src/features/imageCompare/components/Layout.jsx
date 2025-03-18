import { useEffect, useRef, useState } from "react";
import left from "../assets/left.jpg";
import right from "../assets/right.jpg";
import styles from "./Layout.module.css";

function Layout() {
  const [isDown, setIsDown] = useState(false);
  const [lineX, setLineX] = useState(0);
  const [widthLeft, setWidthLeft] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const handleMove = (event) => {
      setLineX((x) => compute(x, event));
      setWidthLeft((x) => compute(x, event));
    };
    if (isDown) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("touchmove", handleMove);
    }
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, [isDown]);

  useEffect(() => {
    if (!ref.current) return;

    const handleUp = () => setIsDown(false);

    setLineX(ref.current.clientWidth / 2);
    setWidthLeft(ref.current.clientWidth / 2);

    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);

    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  const compute = (x, event) => {
    if (!ref.current) return 0;

    let position;
    if ("movementX" in event) {
      position = x + event.movementX;
    } else {
      position = event.touches[0].pageX - ref.current.offsetLeft;
    }
    if (position >= 0 && position <= ref.current.clientWidth) {
      return position;
    }

    return x;
  };

  const handleMouseKeyDown = () => {
    setIsDown(true);
  };

  return (
    <div
      className={styles.right}
      ref={ref}
      style={{ backgroundImage: `url(${right})` }}
    >
      <div
        className={styles.left}
        style={{
          backgroundImage: `url(${left})`,
          clipPath: `polygon(0% 0%, ${widthLeft}px 0%, ${widthLeft}px 100%, 0% 100%)`,
        }}
      ></div>
      <div
        style={{ left: lineX }}
        className={styles.line}
        onMouseDown={handleMouseKeyDown}
        onTouchStart={handleMouseKeyDown}
      ></div>
    </div>
  );
}

export default Layout;
