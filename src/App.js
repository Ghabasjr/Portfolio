import "./App.css";
import Aboutme from "./Components/Aboutme/Aboutme";
import Footer from "./Components/Footer/Footer";
import Myprojects from "./Components/Myprojects/Myprojects";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import Section2 from "./Components/Section2/Section2";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section />
      <Section2 />
      <Aboutme />
      <Myprojects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
