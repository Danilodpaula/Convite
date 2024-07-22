import { useEffect } from "react";
import { Title, Letter } from "./styles";

export const AnimatedTitle = ({
  text,
  onComplete,
}: {
  text: string;
  onComplete?: () => void;
}) => {
  useEffect(() => {
    if (onComplete) {
      const duration = text.length * 0.1 * 1000 + 500; // Delay
      const timer = setTimeout(onComplete, duration);
      return () => clearTimeout(timer);
    }
  }, [text, onComplete]);

  return (
    <Title>
      {text.split("").map((char, index) => (
        <Letter key={index} delay={index * 0.1}>
          {char === " " ? "\u00A0" : char}
        </Letter>
      ))}
    </Title>
  );
};
