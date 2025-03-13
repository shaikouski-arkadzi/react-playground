import useIntersactionObserver from "../hooks/useIntersactionObserver";

function IntersectionSection() {
  const [targetRef, isVisible] = useIntersactionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  return (
    <section
      ref={targetRef}
      style={{
        padding: 100,
        margin: "500px 0",
        backgroundColor: isVisible ? "green" : "red",
      }}
    >
      {isVisible ? "Visible" : "Invisible"}
    </section>
  );
}

export default IntersectionSection;
