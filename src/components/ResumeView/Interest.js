import React from 'react';
import ResumeConfig from './ResumeConfig'

const Interest = () => {
    return (
        <div>
            <h3>Interest</h3>
            <ul>
                {ResumeConfig.resume.interest.map( (item, key) => <li key={key}>{item}</li>)}
            </ul>
        </div>
    );
};

export default Interest;