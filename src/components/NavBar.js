import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import bars from '../images/bars.svg';
import close from '../images/close.svg';

function NavBar() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    }

    
  return (
    <div className='navbar'>
        <div className='logo'><Link to="/">Logo</Link></div>
        <div className='mainNav'>
             <Link to="/">Home </Link>
             <Link to="/story">Our Story</Link>
             <Link to="/products">Products</Link>
        </div>
        <div className={`mobileNav ${isActive ? "" : "is-open"}`}>
            <div className='controls'>
                <button onClick={handleToggle}>
                    <img className="open" src={bars} alt="hamburger nav" />
                    <img className="close" src={close} alt="close"/>
                </button>
            </div>
            <div className="mobileNav-container">
                <Link to="/">Home </Link>
                <Link to="/story">Our Story</Link>
                <Link to="/products">Products</Link>
            </div>
            <div className='overlay'/>
        </div>
    </div>

    );
}

export default NavBar;
