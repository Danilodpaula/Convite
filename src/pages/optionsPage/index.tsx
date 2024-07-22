import { useEffect, useRef, useState } from "react";
import { CardsContainer, MainContainer, ZapLogo } from "./styles";
import Card from "../../components/Cards";
import { AnimatedTitle } from "../../components/AnimatedTitle";
import doubt from "../../assets/images/question-mark-svgrepo-com.svg";
import cinema from "../../assets/images/cinema.jpeg";
import park from "../../assets/images/park.jpeg";
import jazz from "../../assets/images/jazz.jpeg";
import zap from "../../assets/images/zap.svg";

export function OptionsPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showSecondTitle, setShowSecondTitle] = useState(false);
  const [showThirdTitle, setShowThirdTitle] = useState(false);
  const [showZap, setShowZap] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [showEnd, setShowEnd] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Velocidade do video
    }
  }, []);

  return (
    <MainContainer>
      {!showEnd && (
        <>
          <AnimatedTitle
            text="O que vamos fazer??"
            onComplete={() => setShowSecondTitle(true)}
          />
          {showSecondTitle && (
            <AnimatedTitle
              text="Clique em uma opção:"
              onComplete={() => setShowCards(true)}
            />
          )}
        </>
      )}

      <CardsContainer>
        {showCards && (
          <>
            <Card
              onClick={() => {
                setShowEnd(true);
                setShowCards(false);
              }}
              imageSrc={park}
              description="Passear em algum parque/passar a tarde juntos"
            />
            <Card
              onClick={() => {
                setShowEnd(true);
                setShowCards(false);
              }}
              imageSrc={cinema}
              description="Ver algum filme mt foda no cinema (clichê)"
            />
            <Card
              onClick={() => {
                setShowEnd(true);
                setShowCards(false);
              }}
              imageSrc={jazz}
              description="Ver uma apresentação de Jazz no teatro (O de sexta parece do krlh)"
            />
            <Card
              onClick={() => {
                setShowEnd(true);
                setShowCards(false);
              }}
              imageSrc={doubt}
              description="Você escolhe!! Eu apenas concordo com tudo! (posso discordar)"
            />
          </>
        )}
      </CardsContainer>
      {showEnd && (
        <>
          <AnimatedTitle
            text="Q FODAAAA!!!!"
            onComplete={() => setShowThirdTitle(true)}
          />
          <br />
          {!showThirdTitle && <AnimatedTitle text=" " />}
          {showThirdTitle && (
            <AnimatedTitle
              text="A gente se fala pelo zap??"
              onComplete={() => setShowZap(true)}
            />
          )}
          {showZap && (
            <>
              <br />
              <AnimatedTitle>
                <ZapLogo
                  src={zap}
                  alt="Zap"
                  onClick={() =>
                    (window.location.href =
                      "https://api.whatsapp.com/send/?phone=55092984373113&text&type=phone_number&app_absent=0")
                  }
                />
              </AnimatedTitle>
            </>
          )}
        </>
      )}
    </MainContainer>
  );
}
