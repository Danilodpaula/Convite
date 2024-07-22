import { useEffect, ReactNode } from "react";
import { Title, Letter } from "./styles";

interface AnimatedTitleProps {
  text?: string;
  onComplete?: () => void;
  children?: ReactNode;
}

export const AnimatedTitle: React.FC<AnimatedTitleProps> = ({
  text,
  onComplete,
  children,
}) => {
  
  useEffect(() => {
    if (onComplete && text) {
      const duration = text.length * 0.1 * 1000 + 500; // Delay
      const timer = setTimeout(onComplete, duration);
      return () => clearTimeout(timer);
    }
  }, [text, onComplete]);

  if (text) {
    return (
      <Title>
        {text.split("").map((char, index) => (
          <Letter key={index} delay={index * 0.1}>
            {char === " " ? "\u00A0" : char}
          </Letter>
        ))}
      </Title>
    );
  }

  return <Title>{children}</Title>;
};
