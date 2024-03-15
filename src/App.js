import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import Projects from './pages/projects.jsx';

const App = () => {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;