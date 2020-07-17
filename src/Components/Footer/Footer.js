import React from 'react';
import "../Footer/footer.css"

const Footer = ()=> {
        return(
            <div className = "footer">
                <div>
                    <ul className = "footer_ul">
                        <li><a href = "/">Home</a></li>
                        <li><a href = "/Projects">Project</a></li>
                        <li><a href = "/Resume">Resume</a></li>
                        <li><a href = "/Contact">Contact</a></li>
                    </ul>
                </div>
                <div className="contact__icon">
                        <a href="https://github.com/kelvinramos125"><img src="/img/github.png" /></a>
                        <a href="https://www.linkedin.com/in/kelvin-melendez-benitez-262a69193/"><img src="/img/linkedin.png" /></a>
                        <a href="twitter"><img src="/img/twitter.png" /></a>
                    </div>
                <p className='copyright'>Kelvin Portfolio &copy; 2020 | All Right Reserved</p>
            </div>
        )
    }


export default Footer;