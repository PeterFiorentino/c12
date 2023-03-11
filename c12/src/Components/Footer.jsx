import React from 'react';
import { Link } from 'react-router-dom';




class Footer extends React.Component{

    render() {
        return (
            <div id="footer">
                <div id="footer-page">
                    <Link to="submit" className="footerLinks">Twitter</Link>
                    <Link to="/" className="footerLinks">Instagram</Link>
                    <Link to="rules" className="footerLinks">Facebook</Link>  
                    <input type="text"></input>                 
                    <Link to="contact" className="footerLinks">Remind Me</Link>
                </div>
            </div>
        )
    }
}

export default Footer