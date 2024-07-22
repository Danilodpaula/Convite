import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  ButtonContainer,
  YesButton,
  FunnyButton,
  VideoBackground,
  AnimatedButton,
} from "./styles";
import videoBg from "../../assets/videos/vecteezy_colorful-liquid-gradient-animation_2017303.mp4";
import { AnimatedTitle } from "../../components/AnimatedTitle";

export function MainPage() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSecondTitle, setShowSecondTitle] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const handleSimClick = () => {
    navigate("/OqFaremos?");
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Velocidade do video
    }
  }, []);

  return (
    <>
      <VideoBackground ref={videoRef} autoPlay muted loop playsInline>
        <source src={videoBg} type="video/mp4" />
      </VideoBackground>
      <MainContainer>
        <AnimatedTitle
          text="Tá todo mundo querendo saber..."
          onComplete={() => setShowSecondTitle(true)}
        />
        {!showSecondTitle && (
          <AnimatedTitle text=" " onComplete={() => setShowButtons(false)} />
        )}
        {showSecondTitle && (
          <AnimatedTitle
            text="Bo sair?"
            onComplete={() => setShowButtons(true)}
          />
        )}
        <ButtonContainer>
          {!showButtons && (
            <AnimatedButton delay={0.5} style={{ zIndex: -10000 }}>
              <YesButton onClick={handleSimClick} style={{ zIndex: -10000 }}>
                Sim!
              </YesButton>
            </AnimatedButton>
          )}
          {!showButtons && (
            <AnimatedButton delay={1} style={{ zIndex: -10000 }}>
              <FunnyButton style={{ zIndex: -10000 }}>Não!</FunnyButton>
            </AnimatedButton>
          )}
          {showButtons && (
            <AnimatedButton delay={0.5}>
              <YesButton onClick={handleSimClick}>Sim!</YesButton>
            </AnimatedButton>
          )}
          {showButtons && (
            <AnimatedButton delay={1}>
              <FunnyButton>Não!</FunnyButton>
            </AnimatedButton>
          )}
        </ButtonContainer>
      </MainContainer>
    </>
  );
}
