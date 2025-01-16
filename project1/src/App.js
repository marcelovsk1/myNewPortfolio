import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar"
import Intro from "./Components/Intro/Intro"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Projects from "./Components/Projects/Projects"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Experience/>
      <Projects/>

    </div>
  );
}

export default App;
