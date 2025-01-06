import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Education from './pages/Education';
import ProceduralCanvas from './components/ProceduralCanvas';

function App() {
    return (
        <div className='app'>
            <div>
                <Navbar />
                <Homepage />
                <About />
                {/* <Education /> */}
            </div>
            <ProceduralCanvas />
        </div>
    );
}
 
export default App;