import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TextDecodeProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextDecode: React.FC<TextDecodeProps> = ({ text, className = "", delay = 0 }) => {
  const [displayText, setDisplayText] = useState("");
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let iteration = 0;
    
    const startAnimation = () => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((char, index) => {
              if (index < iteration) return text[index];
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    };

    timeout = setTimeout(startAnimation, delay * 1000);
    return () => clearTimeout(timeout);
  }, [text, delay]);

  return <span className={className}>{displayText}</span>;
};

export default TextDecode;
