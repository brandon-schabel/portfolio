import React from 'react';
import config from '../../config';

const Interest = () => {
    return (
        <div>
            <h3>Interest</h3>
            <ul className="list-group">
                {config.resume.interest.map( (item, key) => <li key={key}>{item}</li>)}
            </ul>
        </div>
    );
};

export default Interest;