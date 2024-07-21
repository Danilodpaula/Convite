// SecondPage.js

import { useNavigate } from "react-router-dom";

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
