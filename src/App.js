import "./App.css";
import Header from "./components/Header/Header";
import Inputs from "./components/Header/Inputs/Inputs";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{marginTop:'1rem'}}>
        <Inputs title={"Servers"} value={0} />
        <Inputs title={"Bus Boys"} value={0} />
        <Inputs title={"Bus Girls"} value={0} />
        <Inputs title={"Total Tips"} value={0} />
      </div>
    </div>
  );
}

export default App;
