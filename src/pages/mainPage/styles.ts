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

// Container principal
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Container dos botões
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

// Botão estilizado base
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

// Botão "não" (FunnyButton)
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

// Botão "sim" (YesButton)
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

// Animação de entrada dos botões
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
