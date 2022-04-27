import './App.css';
import Navbar from './navbar/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// npm install react-router-dom 

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={About} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
