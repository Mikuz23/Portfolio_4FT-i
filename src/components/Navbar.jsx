import React from 'react';

import {MenuData} from '../navbarData'

const Navbar = () => {
    return(
        <nav className='app-navbar'>
            
            <h1>ANDREWTATE FORTNTIE</h1>
            <ul className='navbar-items'>
                {MenuData.map((item, i) => {
                    
                    return(
                        <li key ={`navbar.${i}`}>
                            <a href={item.url} className="nav-links">
                                {item.title}
                            </a>
                        </li>
                    )

                })}
            </ul>

        </nav>
    );
}

export default Navbar;