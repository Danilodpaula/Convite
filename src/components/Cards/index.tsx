import React from 'react';
import { CardContainer, CardImage, CardDescription } from './styles';

interface CardProps {
  imageSrc: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, description }) => {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt={description} />
      <CardDescription>{description}</CardDescription>
    </CardContainer>
  );
};

export default Card;
