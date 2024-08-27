import '../components/nav.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Nav() {
  const [menuShow, setMenushow] = useState(0);
  function toggleMenu(){
      setMenushow(!menuShow);
  }
  return (
    <div>
        <div className="nav-container">
        <h1>Polar</h1>
        <nav className={`nav ${menuShow ? "show" : ""}`}>
          <ul className="nav-links">
            <li className="navlink"><Link to='/' className='a' href="#">Home</Link></li>
            <li className="navlink"><Link to='/info' className='a' href="#">Info</Link></li>
            <li className="navlink"><Link to='/plans' className='a' href="#">Plans</Link></li>
            <li className="navlink"><Link to='/story' className='a' href="#">Story</Link></li>
            <li className="navlink"><Link to='/about' className='a' href="#">About</Link></li>
            <li className="navlink"><Link to='/contact' className='a' href="#">Contact Us</Link></li>
          </ul>
        </nav>
        <div className={`mobile-menu ${menuShow ? "show" : ""}`} onClick={toggleMenu}>
        {menuShow ? (<i class="fa-solid fa-xmark"></i>) :
        (<i class="fa-solid fa-bars"></i>)}
        </div>
      </div>
    </div>
  )
}

export default Nav;