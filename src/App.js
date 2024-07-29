import "./App.css";
import Aboutme from "./Components/Aboutme/Aboutme";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import Section2 from "./Components/Section2/Section2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Section2 />
      <Aboutme />
    </div>
  );
}

export default App;
