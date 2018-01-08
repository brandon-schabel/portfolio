import React, { Component } from 'react';
import AboutMeData from './AboutMeData';

class AboutMe extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6"><img className="image" src={require(`../assets/profilePic.png`)} alt='Profile'></img></div>
                    <div className="col-md-6">{AboutMeData.body}</div>
                </div>
            </div>
        );
    }
}

AboutMe.propTypes = {

};

export default AboutMe;