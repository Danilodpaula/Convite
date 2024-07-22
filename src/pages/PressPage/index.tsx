import { useEffect, useRef } from "react";
import videoBg from "../../assets/videos/vecteezy_colorful-liquid-gradient-animation_2017303.mp4";
import { useNavigate } from "react-router-dom";
import { MainContainer, VideoBackground } from "./styles";

export function PressPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

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
      <h1 style={{ fontFamily: "Montserrat", color: "#fff5e1" }}>
        Pressione o botão
      </h1>
      <br />
      <button
        style={{
          width: "50px",
          padding: "0.2rem 0.2rem 0.2rem 0.2rem",
          borderRadius: "999px",
          fontFamily: "Montserrat",
          color: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => navigate("/main")}
      >
        aqui
      </button>
    </MainContainer>
  );
}
