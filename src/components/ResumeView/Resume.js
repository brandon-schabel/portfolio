import React from 'react';
import './Resume.css';

//components
import ApplicableProjects from './ApplicableProjects';
import Education from './Education';
import Interest from './Interest';
import ProjectedCoursework from './ProjectedCoursework';
import Skills from './Skills'
import WorkExperience from './WorkExperience'
import InvolvementVolunteering from './InvolvementVolunteering';

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