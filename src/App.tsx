import { GlobalStyles } from "./GlobalSyles";
import Container from "./assets/components/Container/Container";
import data from "../data.json";

function App() {
  return (
    <main>
      <GlobalStyles />
      <Container data={data} />
    </main>
  );
}

export default App;
