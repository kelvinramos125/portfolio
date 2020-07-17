import React from 'react';
import "../Footer/footer.css"

const Footer = ()=> {
        return(
            <div className = "footer">
                <div className="contact__icon">
                        <a href="https://github.com/kelvinramos125"><img src="/img/github.png" alt = "github logo" /></a>
                        <a href="https://www.linkedin.com/in/kelvin-melendez-benitez-262a69193/"><img src="/img/linkedin.png" alt = "linkedin logo" /></a>
                        <a href="twitter"><img src="/img/twitter.png" alt = "twitter logo" /></a>
                    </div>
                <p className='copyright'>Kelvin Portfolio &copy; 2020 | All Right Reserved</p>
            </div>
        )
    }


export default Footer;