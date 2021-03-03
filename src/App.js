import logo from "./logo.svg";
import "./App.css";
import OuterContainer from "./Components/OuterContainer";
import "rsuite/dist/styles/rsuite-default.css";
import { Container, Header, Content, Footer, Sidebar, Button } from "rsuite";

function App() {
  return (
    <div className="backgroundImage p-0">
      <div className="App">
        <OuterContainer />
      </div>
    </div>
  );
}

export default App;
