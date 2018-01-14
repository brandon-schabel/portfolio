import React from 'react';
import config from '../../config';

const ProjectedCoursework = () => {
    return (
        <div>
            <h3>Projected Coursework</h3>
            <ul>
                {config.resume.projectedCourseWork.map( (course, key) => <li key={key}>{course}</li>)}
            </ul>
        </div>
    );
};

export default ProjectedCoursework;