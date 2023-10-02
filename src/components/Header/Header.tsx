import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import './style.css';

const Links: Array<string> = [
    'About Us',
    'Projects',
    'Community',
    'Sponsors',
    'Connect',
];

const Header: React.FC = () => {
    return (
        <header className="container header">
            <StaticImage
                src="../../assets/images/logo.png"
                alt="level zero logo"
            />
            <div className="links">
                <ul>
                    {Links.map((link, index) => {
                        return (
                            <li key={index}>
                                <a href="#">{link}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </header>
    );
};

export default Header;
