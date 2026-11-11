"use client";
import { useEffect, useRef } from "react";

// Starts the heatmap scrolled to the most recent weeks (matters on narrow screens).
export default function ScrollEnd({ children, className }) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) ref.current.scrollLeft = ref.current.scrollWidth;
  }, []);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
