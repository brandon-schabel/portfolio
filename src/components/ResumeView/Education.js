import React from 'react';
import ResumeConfig from './ResumeConfig'

const Education = () => {
    return (
        <div>
            <h3>Education</h3>
                <div>{ResumeConfig.resume.school}</div>
                <div>{ResumeConfig.resume.degree}</div>
        </div>
    );
};

export default Education;