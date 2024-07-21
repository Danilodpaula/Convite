// SecondPage.js

import { useNavigate } from "react-router-dom";
import { MainTitle, MainTitleText } from "./styles";

export function SecondPage() {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        main
      </button>
    </>
  );
}
