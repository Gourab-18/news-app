import "./App.css";
import News from "./components/News";
import Search from "./components/Search";
import Pagination from "./components/Pagination";
import styled from "styled-components";
function App() {
  return (
    <>
      <Container>
        <Search />
        <Pagination />

        <News />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  background-color: hsl(210, 36%, 96%);
  height: 100%;
  width: 100%;
`;
