import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Wishes from './components/Wishes';
import Fireworks from './components/Fireworks';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/fireworks" element={<Fireworks />} /> 
      </Routes>
    </Router>
  );
}

export default App;
