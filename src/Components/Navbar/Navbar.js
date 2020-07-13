import React from 'react';
import '../Navbar/navbar.css'

const Navbar = ()=> {
        return(
            <div>
                <nav className = "navbar">
                    <ul>
                        <li><a href = "/">Home</a></li>
                        <li><a href = "/Projects">Project</a></li>
                    </ul>
                </nav>
            </div>
        )
    }


export default Navbar;