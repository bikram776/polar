import { Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header'
import Info from './components/Info';
import Plans from './components/Plans';
import Story from './components/Story';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Signup from './components/SignupForm';
import { useState } from 'react';

function App() {

  const [showSignup, setShowSignup] = useState(false);
  const handleGetStarted =()=>{
    setShowSignup(!false);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseSignup = () =>{
    setShowSignup(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <div className='App'>
      <Nav onLetgo={(handleGetStarted)}/>
      {showSignup && <Signup onClose={handleCloseSignup}/>}

      
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/plans' element={<Plans/>}/>
        <Route path='/story' element={<Story/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
