import styled from "styled-components";

// Container principal
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 100vw;
  height: 100vh;
  background: #0c1844;
`;

// Container dos botões
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  padding: 20px; // Adicionando um padding para espaçamento interno
`;

// Botão estilizado
export const StyledButton = styled.button<{ isClicked?: boolean }>`
  background-color: ${(props) => (props.isClicked ? "green" : "initial")};
`;

// Botão "não" (FunnyButton)
export const FunnyButton = styled(StyledButton)<{
  top: number;
  left: number;
}>`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  background: #c80036;
  width: 80px;
  height: 30px;
  border-radius: 999px;
  box-shadow: 0px 0px 10px #c80036;
  color: #fff5e1;
  border: none;
  font-family: "Space Mono", monospace; // Certifique-se de que a fonte está importada ou disponível
  cursor: pointer;
`;

// Botão "sim"
export const YesButton = styled(StyledButton)`
  background: green;
  background: #677d6a;
  box-shadow: 0px 0px 10px #677d6a;
  width: 80px;
  height: 30px; // Adicionei "px" para a altura
  border-radius: 999px;
  color: #fff5e1;
  border: none;
  font-family: "Space Mono", monospace; // Certifique-se de que a fonte está importada ou disponível
  cursor: pointer;
`;
