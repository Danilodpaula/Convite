import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  ButtonContainer,
  YesButton,
  FunnyButton,
  VideoBackground,
  Title,
  Letter,
} from "./styles";
import videoBg from "../../assets/videos/vecteezy_colorful-liquid-gradient-animation_2017303.mp4";

const AnimatedTitle = ({ text, onComplete }: { text: string, onComplete?: () => void }) => {
  useEffect(() => {
    if (onComplete) {
      const duration = text.length * 0.1 * 1000 + 500; // Delay for each character + extra time
      const timer = setTimeout(onComplete, duration);
      return () => clearTimeout(timer);
    }
  }, [text, onComplete]);

  return (
    <Title>
      {text.split("").map((char, index) => (
        <Letter key={index} delay={index * 0.1}>
          {char === " " ? "\u00A0" : char}
        </Letter>
      ))}
    </Title>
  );
};

export function MainPage() {
  // const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  // const [isSimClicked, setIsSimClicked] = useState(false);
  const [showSecondTitle, setShowSecondTitle] = useState(false);

  const handleSimClick = () => {
    // setIsSimClicked(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Ajuste a velocidade do vídeo aqui
    }
  }, []);

  return (
    <>
      <VideoBackground ref={videoRef} autoPlay muted loop>
        <source src={videoBg} type="video/mp4" />
      </VideoBackground>
      <MainContainer>
        <AnimatedTitle text="Tá todo mundo querendo saber..." onComplete={() => setShowSecondTitle(true)} />
        {showSecondTitle && <AnimatedTitle text="Bo sair?" />}
        {!showSecondTitle && <AnimatedTitle text=" " />}
        <ButtonContainer>
          <YesButton onClick={handleSimClick}>Sim!</YesButton>
          <FunnyButton>Não!</FunnyButton>
        </ButtonContainer>
      </MainContainer>
    </>
  );
}
