import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Courier12.png';




class NavBar extends React.Component{

    render() {
        return (
            <div id="navBar">
                <img id="C12Logo" src={logo}></img>
                <div id="NavBar-page">
                    <Link to="/submit" className="navBarLinks">Submit</Link>
                    <Link to="/" className="navBarLinks">About The Contest</Link>
                    {/* <Link to="/news" className="navBarLinks">News</Link> */}
                    <Link to="/contact" className="navBarLinks">Contact Us</Link>
                </div>
            </div>
        )
    }
}

export default NavBar