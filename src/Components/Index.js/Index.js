import React from 'react';
import Myself from '../Myself/Myself';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div>
            <div className = "main">
                <Myself />
                <Resume />
            </div>
        </div>
    )
}

export default Home;