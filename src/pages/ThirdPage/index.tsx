import { useEffect, useRef } from "react";
import { VideoBackground, MainContainer } from "./styles";
import videoBg from "../../assets/videos/vecteezy_colorful-liquid-gradient-animation_2017303.mp4";

export function ThirdPage() {
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
    </MainContainer>
  );
}
