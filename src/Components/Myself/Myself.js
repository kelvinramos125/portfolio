import React from 'react';
import "../Myself/myself.css"

const Myself = () => {
    return (
        <div>
            <div className = "heading">
            <div className = "profile__img" />
                <h1>Kelvin Melendez-Benitez Portfolio</h1>
                <h2>Designer and Front-End Developer</h2>
            </div>
            <div className = "Me">
                <div className = "about">
                    <h2>About myself</h2>
                        <p>Currently working on graduating from R2H program at 
                        RV to learn not only web developing but also improve my social 
                        and professional skills and working with teams and learning to be 
                        a team player. Graduated from YTC with an Associates in Computer 
                        Science. I’ve had experience in working with HTML, CSS, and JS 
                        during the program, while also having encountered C#, Java, and 
                        MySQL during my time in college. I’m passionate and creative and 
                        want to show what I can do to a great company like yours.</p>
                        <img src="/img/html.png" alt = "html icon" />
                        <img src="/img/css.png" alt = "css icon" />
                        <img src="/img/javascript.png" alt = "javascript icon" />
                        <img src="/img/react.png" alt = "react icon" />
                </div>
            </div>
        </div>
    )
}

export default Myself;
