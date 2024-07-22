import { useEffect, useRef } from "react";
import { VideoBackground, MainContainer,  } from "./styles";
import videoBg from "../../assets/videos/vecteezy_colorful-liquid-gradient-animation_2017303.mp4";
import Card from "../../components/Cards";
import { CardsContainer } from "../../components/Cards/styles";

export function OptionsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Velocidade do video
    }
  }, []);

  return (
    <MainContainer>
      <VideoBackground ref={videoRef} autoPlay muted loop playsInline>
        <source src={videoBg} type="video/mp4" />
      </VideoBackground>
      <CardsContainer>
        <Card
          imageSrc="https://via.placeholder.com/150?text=Photo+1"
          description="Descrição do Card 1"
        />
        <Card
          imageSrc="https://via.placeholder.com/150?text=Photo+2"
          description="Descrição do Card 2"
        />
        <Card
          imageSrc="https://via.placeholder.com/150?text=Photo+3"
          description="Descrição do Card 3"
        />
        <Card
          imageSrc="https://via.placeholder.com/150?text=Photo+4"
          description="Descrição do Card 4"
        />
      </CardsContainer>
    </MainContainer>
  );
}
