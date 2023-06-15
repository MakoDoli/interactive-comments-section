import { GlobalStyles } from "./GlobalSyles";
import Container from "./assets/components/Container/Container";
import data from "../data.json";
import Overlay from "./assets/components/Overlay";

function App() {
  return (
    <main>
      <Overlay />
      <GlobalStyles />
      <Container data={data} />
    </main>
  );
}

export default App;
