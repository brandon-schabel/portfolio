import React from 'react';
import ResumeConfig from '../ResumeConfig'

const ApplicableProjects = () => {
    return (
        <div>
            <h3>Applicable Projects</h3>
            <ul >
                {ResumeConfig.resume.applicableProjects.map((project, key) => <li key={key}>{project}</li>)}
            </ul>
        </div>
    );
};

export default ApplicableProjects;