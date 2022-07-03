import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import bars from '../images/bars.svg';
import close from '../images/close.svg';
import logo from '../images/dev-weight-logo-full.png';

function NavBar() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
        setActive(!isActive);
    }

    
  return (
    <div className='navbar'>
        <div className='logo'><Link to="/"><img src={logo} alt="Dev Weight | Developer Tutorials" /></Link></div>
        <div className='mainNav'>
             <Link to="/">Home </Link>
             {/* <Link to="/story">Our Story</Link> */}
             <Link to="/blog">Blog</Link>
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
                {/* <Link to="/story">Our Story</Link> */}
                <Link to="/blog">Blog</Link>
            </div>
            <div className='overlay'/>
        </div>
    </div>

    );
}

export default NavBar;
