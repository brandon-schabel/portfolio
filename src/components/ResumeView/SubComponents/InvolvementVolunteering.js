import React from 'react';
import ResumeConfig from '../ResumeConfig'

const InvolvementVolunteering = () => {
    return (
        <div>
            <h3>Student Involvement</h3>
            <ul>
                {ResumeConfig.resume.involvementVolunteering.map((item, key) => <li key={key}>{item}</li>)}
            </ul>
        </div>
    );
};

export default InvolvementVolunteering;