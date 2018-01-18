import React from 'react';
import config from '../../config';
import './ApplicableProjects.css';

const ApplicableProjects = () => {
    return (
        <div>
            <h3>Applicable Projects</h3>
            <ul >
                {config.resume.applicableProjects.map((project, key) => <li key={key}>{project}</li>)}
            </ul>
        </div>
    );
};

export default ApplicableProjects;