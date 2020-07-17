import React from 'react';
import '../Navbar/navbar.css'

const Navbar = ()=> {
        return(
            <div>
                <nav className = "navbar">
                    <ul className = "nav_ul">
                        <li><a href = "/">Home</a></li>
                        <li><a href = "/Projects">Project</a></li>
                        <li><a href = "/Resume">Resume</a></li>
                        <li><a href = "/Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }


export default Navbar;