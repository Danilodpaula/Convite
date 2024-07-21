import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import RoutesSystem from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesSystem />
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}

export default App;
