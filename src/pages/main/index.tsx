import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainContainer, ButtonContainer, YesButton, FunnyButton } from "./styles";

export function MainPage() {
  const navigate = useNavigate();
  const [isSimClicked, setIsSimClicked] = useState(false);
  const [naoPosition, setNaoPosition] = useState({ top: 10, left: 500 });

  const handleSimClick = () => {
    setIsSimClicked(true);
  };

  const handleNaoClick = () => {
    setNaoPosition({
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    });
  };

  return (
    <MainContainer>
      <div>
        <button
          onClick={() => {
            navigate("/second");
          }}
        >
          second
        </button>
      </div>
      <br />
      <ButtonContainer>
        <YesButton onClick={handleSimClick}>
          Sim!
        </YesButton>
        <FunnyButton
          onClick={handleNaoClick}
          top={naoPosition.top}
          left={naoPosition.left}
        >
          Não!
        </FunnyButton>
      </ButtonContainer>
    </MainContainer>
  );
}
