import React from 'react';
import ResumeConfig from '../ResumeConfig'

const WorkExperience = () => {

    return (
        <div>
            {ResumeConfig.resume.workExperience.map( (item, key) => {
                return <div key={key}>
                            <h3>Work Experience</h3>
                            <h4>{item.titleAndBasicInfo}</h4>
                                <ul>
                                    {item.duties.map( (duty, dutyKey) => {
                                        return <li key={dutyKey}>{duty}</li> // double map if to display duties under each job
                                    })}
                                </ul>
                            </div>
            })}
        </div>
    );
};

export default WorkExperience;