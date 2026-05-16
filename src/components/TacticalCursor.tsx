import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const TacticalCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(
        target.tagName === "BUTTON" || 
        target.tagName === "A" || 
        target.closest(".card-hover") !== null
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/40 rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          borderColor: isHovering ? "rgba(212, 175, 55, 0.8)" : "rgba(212, 175, 55, 0.4)",
        }}
      >
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/20 scale-x-50" />
        <div className="absolute top-0 left-1/2 h-full w-[1px] bg-primary/20 scale-y-50" />
      </motion.div>
      
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-primary rounded-full pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default TacticalCursor;
