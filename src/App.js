import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import ProceduralCanvas from './components/ProceduralCanvas';

function App() {
    return (
        <div className='app'>
            <ProceduralCanvas />
            <Navbar />
            <Homepage />
            <About />
            <Projects />
            <Experience />
            <Education />
        </div>
    );
}
 
export default App;