import React from 'react';
import ResumeConfig from '../ResumeConfig'

const ProjectedCoursework = () => {
    return (
        <div>
            <div><h3>Projected Coursework</h3></div>
            <div className="col-md-6">
                <ul>
                    
                    {ResumeConfig.resume.projectedCourseWork.map( (course, key) => {
                            if(key % 2 === 0){ 
                                return <li key={key}>{course}</li>
                            }
                        }
                    )}
                </ul>
            </div>
            <div className="col-md-6">
                <ul>
                    
                    {ResumeConfig.resume.projectedCourseWork.map( (course, key) => {
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