import React, { useState, useEffect } from "react";
import "../styles/TypingText.css"; 

const TypingText = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className="typing-container">
      <span>{displayedText}</span>
      <span className="cursor"></span>
    </span>
  );
};

export default TypingText;
