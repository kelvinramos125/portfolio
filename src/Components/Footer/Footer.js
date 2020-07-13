import React from 'react';
import "../Footer/footer.css"

const Footer = ()=> {
        return(
            <div className = "footer">
                <div className = "nav">
                    <ul>
                        <li><a href = "/">Home</a></li>
                        <li><a href = "/Contact">Project</a></li>
                    </ul>
                </div>
                <p className='copyright'>Kelvin Portfolio &copy; 2020, All Right Reserved</p>
            </div>
        )
    }


export default Footer;