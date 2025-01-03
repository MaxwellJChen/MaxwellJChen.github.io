import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Education from './pages/Education';
import ProceduralCanvas from './components/ProceduralCanvas';

function App() {
    return (
        <div className='app'>
            <div>
                <Navbar />
                <Homepage />
                <Education />
            </div>
            <ProceduralCanvas />
        </div>
    );
}
 
export default App;