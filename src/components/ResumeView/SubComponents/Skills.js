import React from 'react';
import ResumeConfig from '../ResumeConfig'

const Skills = () => {
    return (
        <div>
            <h3>Skills</h3>
            <ul>
                {ResumeConfig.resume.skills.map((skill, key) => <li key={key} >{skill}</li>)}
            </ul>
        </div>
    );
};

export default Skills;