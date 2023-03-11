import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Courier12.png';




class NavBar extends React.Component{

    render() {
        return (
            <div id="navBar">
                <img id="C12Logo" src={logo} alt="logo"></img>
                <div id="NavBar-page">
                    <Link to="submit" className="navBarLinks">Submit</Link>
                    <Link to="/" className="navBarLinks">The Contest</Link>
                    <Link to="rules" className="navBarLinks">Rules & Guidelines</Link>                   
                    <Link to="contact" className="navBarLinks">Contact Us</Link>
                </div>
            </div>
        )
    }
}

export default NavBar