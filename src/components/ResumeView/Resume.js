import React, {Component} from 'react';
import config from '../../config';
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
        <div >
            <Education></Education>
            <ProjectedCoursework></ProjectedCoursework>
            <ApplicableProjects></ApplicableProjects>
            <Skills></Skills>
            <WorkExperience></WorkExperience>
            <InvolvementVolunteering></InvolvementVolunteering>
            <Interest></Interest>
        </div>
    );
}

export default Resume;