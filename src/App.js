import './App.css';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Section from './components/Section';
import ProceduralCanvas from './components/ProceduralCanvas';

function App() {
    return (
        <>
            <Navbar />
            <Homepage />
            <Section />
            <ProceduralCanvas />
        </>
    );
}
 
export default App;