import React from 'react';
import config from '../../config';

const Interest = () => {
    return (
        <div>
            <ul>
                {config.resume.interest.map( (item, key) => <li key={key}>{item}</li>)}
            </ul>
        </div>
    );
};

export default Interest;