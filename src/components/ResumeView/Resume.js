import React from 'react';
import './Resume.css';

//components
import ApplicableProjects from './SubComponents/ApplicableProjects';
import Education from './SubComponents/Education';
import Interest from './SubComponents/Interest';
import ProjectedCoursework from './SubComponents/ProjectedCoursework';
import Skills from './SubComponents/Skills'
import WorkExperience from './SubComponents/WorkExperience'
import InvolvementVolunteering from './SubComponents/InvolvementVolunteering';

const Resume = () => {
    return (
        <div className="resume">
            <div className="container">
                <Education></Education>
                <ProjectedCoursework></ProjectedCoursework>
                <ApplicableProjects></ApplicableProjects>
                <Skills></Skills>
                <WorkExperience></WorkExperience>
                <InvolvementVolunteering></InvolvementVolunteering>
                <Interest></Interest>
            </div>
        </div>
    );
}

export default Resume;