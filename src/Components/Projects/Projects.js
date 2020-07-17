import React from 'react';
import data from '../data/project.json';
import '../Projects/projects.css'

const Projects = () => {
    return (
        <div>
          <div id = "project__heading">
            <h1>My Projects</h1>
            <h2>Below are projects I have worked on in either teams or solo</h2>
          </div>
          <div className = "my__projects">
            {data.projects.map((data, i) => {
              return (
              <div key={i} className = "Projects">
                <h2>{data.title}</h2>
                <img src={data.img} alt={data.alt} />
                <p>{data.description}</p>
                <div className = "button__link">
                <a href = {data.linkhub} className = "github__link">Github View</a>
                <div id = "divider" />
                <a href = {data.link} className = "project__link">View Project</a>
              </div>
              </div>
              );
          })}
          </div>
        </div>
    )
}

export default Projects;