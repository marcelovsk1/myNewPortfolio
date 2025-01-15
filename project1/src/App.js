import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Intro from "./Components/Intro/Intro"
import About from "./Components/About/About"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
    </div>
  );
}

export default App;
