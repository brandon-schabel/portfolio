import React from 'react';
import config from '../../config';

const Skills = () => {
    return (
        <div>
            <h3>Skills</h3>
            <ul>
                {config.resume.skills.map((skill, key) => <li key={key} >{skill}</li>)}
            </ul>
        </div>
    );
};

export default Skills;