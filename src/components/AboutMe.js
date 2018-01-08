import React, { Component } from 'react';
import AboutMeData from './AboutMeData';

class AboutMe extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6"><img className="image" src={`../assets/profilePic.png`} alt='Profile' height="250" width="310"></img></div>
                    <div className="col-md-6">{AboutMeData.body}</div>
                </div>
            </div>
        );
    }
}

AboutMe.propTypes = {

};

export default AboutMe;