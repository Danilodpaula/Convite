import React from "react";
import { CardImage, CardDescription, CardContainer } from "./styles";

interface CardProps {
  imageSrc: any;
  description: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ imageSrc, description, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <CardImage src={imageSrc} alt={description} />
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
