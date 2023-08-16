
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Tour from './components/Tour';
import Contact from './components/Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
<Route exact path="/" element={<Home/>}/>
<Route  path="/about" exact element={<About/>}/>
<Route  path="/tour" element={<Tour/>}/>
<Route  path="/contact" element={<Contact/>}/>
      </Routes>
      
     </Router>
    </div>
  );
}

export default App;
