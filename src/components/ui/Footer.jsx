import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <p>© {year} Powerhouse Percussion</p>
                <nav aria-label="Footer">
                    <ul className="footer-nav">
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><a href="mailto:hello@example.com">Email</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;