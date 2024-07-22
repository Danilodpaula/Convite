import styled, { keyframes } from "styled-components";

// Animação de entrada do título
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;
// Título com animação e responsividade
export const Title = styled.p`
  font-family: "Montserrat", sans-serif;
  color: #fff5e1;
  display: flex;
  flex-wrap: wrap;
`;

// Letra individual com animação
export const Letter = styled.span<{ delay: number }>`
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  animation-delay: ${(props) => props.delay}s;
  font-size: 40px;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 32px;
  }

  @media (min-width: 1025px) {
    font-size: 40px;
  }
`;
