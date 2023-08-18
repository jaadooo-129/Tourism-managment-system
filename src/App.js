
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Tour from './components/Tour';
import Contact from './components/Contact';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import AuthForm from './components/AuthForm';

function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
<Route exact path="/Home" element={<Home/>}/>
<Route exact path="/" element={<Login/>}/>
<Route  path="/about" exact element={<About/>}/>
<Route  path="/tour" element={<Tour/>}/>
<Route  path="/contact" element={<Contact/>}/>
<Route  path="/signup" element={<AuthForm/>}/>
      </Routes>
      
     </Router>
     <Footer/>
    </div>
  );
}

export default App;
