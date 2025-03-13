import { useSyncExternalStore, useRef } from "react";

const useIntersactionObserver = (options) => {
  const targetRef = useRef(null);

  const getSnapshot = () => {
    if (targetRef.current) {
      const rect = targetRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const subscribe = (callback) => {
    const observer = new IntersectionObserver(callback, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
    return () => observer.disconnect();
  };

  const isVisible = useSyncExternalStore(subscribe, getSnapshot);

  return [targetRef, isVisible];
};

export default useIntersactionObserver;
