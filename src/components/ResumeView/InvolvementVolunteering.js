import React from 'react';
import config from '../../config';

const InvolvementVolunteering = () => {
    return (
        <div>
            <h3>Student Involvement</h3>
            <ul>
                {config.resume.involvementVolunteering.map((item, key) => <li key={key}>{item}</li>)}
            </ul>
        </div>
    );
};

export default InvolvementVolunteering;