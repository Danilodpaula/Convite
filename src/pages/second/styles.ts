import styled, { keyframes } from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  background: #0b0b0b;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  padding: 0 1rem; // Adicionado padding para evitar overflow em telas pequenas
`;

export const MainTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: fit-content;
  width: fit-content;
  padding: 4vh 4vh;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MainTitleText = styled.span`
  color: #FFF7FC;
  border-image: url("https://darksouls.wiki.fextralife.com/file/Dark-Souls/dks-remaster-wiki-hr.png") 30 20;
  border-image-slice: 30 20;
  border-style: solid;
  border-width: 20px; 
  font-size: 84px;
  /* font-weight: bold; */
  font-family: 'OptimusPrinceps'; // Utilizando a fonte importada
  animation: ${fadeIn} 6s ease-in-out;  // Aplicando a animação ao carregar
  transition: all 6s ease;

  @media (max-width: 768px) {
    font-size: 48px;  // Tamanho do texto reduzido para telas menores
    border-width: 10px;
  }

  @media (max-width: 480px) {
    font-size: 36px;  // Tamanho do texto ainda mais reduzido para telas muito pequenas
    border-width: 5px;
  }
`;

export const MainButtonContainer = styled.div`
  animation: ${fadeIn} 3s ease-in-out;  // Aplicando a animação ao carregar
  transition: all 3s ease;
`;

export const MainButton = styled.button`
  margin-top: 10vh;
  background: linear-gradient(180deg, #3a2b12, #402F0F);
  border: 3px solid transparent;
  color: #F2E0BD;
  width: 300px;
  border-radius: 400px / 50px;
  box-shadow: 0 0 15px rgba(64, 47, 15, 0.7), 0 0 25px rgba(64, 47, 15, 0.5);
  transition: all 6s ease;
  font-family: 'OptimusPrinceps'; // Utilizando a fonte importada

  &:hover {
    background: linear-gradient(135deg, #4b3920, #50381D);
    box-shadow: 0 0 25px rgba(64, 47, 15, 0.9), 0 0 35px rgba(64, 47, 15, 0.7);
  }

  @media (max-width: 768px) {
    width: 200px;  // Largura do botão reduzida para telas menores
    margin-top: 5vh;
  }

  @media (max-width: 480px) {
    width: 150px;  // Largura do botão ainda mais reduzida para telas muito pequenas
    margin-top: 5vh;
  }
`;
