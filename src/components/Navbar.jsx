import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); 
    };

    return (
        <nav className="navbar">
            <div className="navbar">
                <h1 className="navbar-title">LEGO</h1>
                <div className="navbar-toggle" onClick={toggleMenu}>
                    <span className="navbar-toggle-icon"></span>
                    <span className="navbar-toggle-icon"></span>
                    <span className="navbar-toggle-icon"></span>
                </div>
                <ul className={`navbar-links ${menuOpen ? 'show' : ''}`}>
                    <li><Link to="/" onClick={toggleMenu}>Products</Link></li>
                    <li><Link to="/cart" onClick={toggleMenu}>Cart</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
