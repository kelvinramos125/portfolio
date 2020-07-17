import React from 'react';
import "../Resume/resume.css"

const Resume = () => {
    return (
        <div>
            <h1 className = "resume__heading">Resume</h1>
        <div className = "resume__paper">
            <h3>Kelvin Melendez-Benitez</h3>
            <p><a href = "mailto: abc@example.com">kelvin.ramos125@gmail.com</a></p>

            <h3>Career Objective</h3>
            <p>To assist in building and setting up Websites for 
                businesses/companies; my desire is to gain more knowledge with 
                design and gain work experience with the line of work I want.</p>

            <h3>Education</h3>
            <p>York Technical College S.C.(Graduate 2019) - Associates Degree GPA 3.5</p>
            <p>Indian Land High School, Indian Land, S.C. (Graduate 2016) - GPA 3.4</p>

            <h4>Relevant Courses</h4>
            <p>Principal of Engineering</p>
            <p>Introduction to Engineering Design</p>
            <p>Computer Engineering</p>

            <h4>Extracurricular activities:</h4>
            <p>Dean’s List of York Technical College</p>
            <p>ILHS Student Council Member (1/2 year)</p>

            <h3>Experience</h3>
            <p>Technology Fellow-Road to Hire-Coding Fellowship.org</p>
            <p>Summer Internship at PC-Paramedic</p>
        </div>
        </div>
    )
}

export default Resume;