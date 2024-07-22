import styled, { keyframes } from "styled-components";

// Animação de entrada do título e dos cards
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-20px);
    transition: 1s;
  }
  
  100% {
    transition: 1s;
    opacity: 1;
    transform: translateX(0);
  }
`;

// Container principal
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background: red;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Container dos cards
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 50vw;
  gap: 10px;

  @media (max-width: 1200px) {
    width: 70vw;
  }

  @media (max-width: 992px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

// Estilo dos cards individuais com animação fade-in
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 22%;
  height: auto;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  transition: 2s;
  animation-delay: 1s;

  @media (max-width: 1200px) {
    width: 30%;
  }

  @media (max-width: 992px) {
    width: 45%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

// Estilo da imagem dos cards
export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

// Estilo da descrição dos cards
export const CardDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  color: black;
  text-align: center;
  margin-top: 10px;
`;

// Título com animação e responsividade
export const Title = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: #fff5e1;
  display: flex;
  flex-wrap: wrap;
`;

// Outros estilos para botões e vídeo
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const BaseButton = styled.button<{ isClicked?: boolean }>`
  background-color: ${(props) => (props.isClicked ? "green" : "initial")};
  padding: 10px 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  color: #fff5e1;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

export const FunnyButton = styled(BaseButton)`
  background: #c40c0c;
  width: 80px;
  box-shadow: 0px 0px 10px #c40c0c;

  @media (max-width: 768px) {
    width: 70px;
  }

  &:hover {
    background: #c80036;
    box-shadow: 0px 0px 30px #c80036;
    transition: 1s;
    transform: translateY(-5px);
  }
`;

export const YesButton = styled(BaseButton)`
  background: #1a5319;
  box-shadow: 0px 0px 10px #1a5319;
  width: 80px;

  @media (max-width: 768px) {
    width: 70px;
  }

  &:hover {
    background: #508d4e;
    box-shadow: 0px 0px 30px #508d4e;
    transition: 1s;
    transform: translateY(-5px);
  }
`;

export const AnimatedButton = styled.div<{ delay: number }>`
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  animation-delay: ${(props) => props.delay}s;
`;

export const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;
