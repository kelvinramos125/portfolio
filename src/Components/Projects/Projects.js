import React from 'react';
import data from '../data/project.json';
import '../Projects/projects.css'

const Projects = () => {
    return (
        <div>
          <h1>My Projects</h1>
          <h2>Bellow are projects I have worked on in either teams or solo</h2>
          <div className = "my__projects">
            {data.projects.map((data, i) => {
              return (
              <div key={i} className = "Projects">
                <h2>{data.title}</h2>
                <img src={data.img} alt={data.alt} />
                <p>{data.description}</p>
                <a href = {data.link} className = "project__link">More info</a>
              </div>
              );
          })}
          </div>
        </div>
    )
}

export default Projects;