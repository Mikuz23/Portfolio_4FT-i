import React from 'react';

import {MenuData} from '../navbarData'

const Navbar = () => {
    return(
        <nav className='app-navbar'>
            
            <h1>ANDREWTATE FORTNTIE</h1><div
            style={{
                borderRadius:"20px",
                border:"1px solid black",
                background:"#333AFF",
                boxShadow: "blue 0px 0px 0px 2px inset, rgb(255, 255, 255) 4px -4px 0px -2px, rgb(31, 193, 27) 4px -4px, rgb(255, 255, 255) 8px -8px 0px -2px, rgb(255, 217, 19) 8px -8px, rgb(255, 255, 255) 12px -12px 0px -2px, rgb(255, 156, 85) 12px -12px, rgb(255, 255, 255) 16px -16px 0px -2px, rgb(255, 85, 85) 16px -16px"
            }}
            >
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
            </ul></div>

        </nav>
    );
}

export default Navbar;