import React from 'react';
import config from '../../config';

const Education = () => {
    return (
        <div>
            <h3>Education</h3>
                <div>{config.resume.school}</div>
                <div>{config.resume.degree}</div>
        </div>
    );
};

export default Education;