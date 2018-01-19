import React from 'react';
import config from '../../config';

const ProjectedCoursework = () => {
    return (
        <div>
            <div><h3>Projected Coursework</h3></div>
            <div className="col-md-6">
                <ul>
                    
                    {config.resume.projectedCourseWork.map( (course, key) => {
                            if(key % 2 === 0){ 
                                return <li key={key}>{course}</li>
                            }
                        }
                    )}
                </ul>
            </div>
            <div className="col-md-6">
                <ul>
                    
                    {config.resume.projectedCourseWork.map( (course, key) => {
                            if(key % 2 !== 0){ 
                                return <li key={key}>{course}</li>
                            }
                        }
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ProjectedCoursework;