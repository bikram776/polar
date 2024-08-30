import '../components/Header.css'
import Hiking from '../assets/hiking.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header({onGetstarted}) {
    // const [menuShow, setMenushow] = useState(0);
    // function toggleMenu(){
    //     setMenushow(!menuShow);
    // };
    

  return (
    <div className="header">
      {/* <Nav/> */}
      {/* <div className="nav-container">
        <h1>Polar</h1>
        <nav className={`nav ${menuShow ? "show" : ""}`}>
          <ul className="nav-links">
            <li className="navlink"><Link className='a' to="/">Home</Link></li>
            <li className="navlink"><Link className='a' to="/info">Info</Link></li>
            <li className="navlink"><Link className='a' to="/plans">Plans</Link></li>
            <li className="navlink"><Link className='a' to="/story">Story</Link></li>
          </ul>
        </nav>
        <div className={`mobile-menu ${menuShow ? "show" : ""}`} onClick={toggleMenu}>
        {menuShow ? (<i class="fa-solid fa-xmark"></i>) :
        (<i class="fa-solid fa-bars"></i>)}
        </div>
      </div> */}
      <div className="hero-container">
        <div className="hero-text">
          <h1>EXPLORE THE UNCHARTED</h1>
          <p>Discover the world's most remote and untouched destinations</p>
          <a href='#' onClick={onGetstarted}>Get Started</a>
        </div>
        <div className="hero-img">
          <img alt="hikeImage" src={Hiking} />
        </div>
      </div>
    </div>
  )
}

export default Header;