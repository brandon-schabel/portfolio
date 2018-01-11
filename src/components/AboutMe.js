import React, { Component } from 'react';
import config from '../config';
import './AboutMe.css';

class AboutMe extends Component {
    render() {
        return (
            <div className="about-me">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6"><img className="about-me-image" src={require(`../assets/profilePic.png`)} alt='Profile' ></img></div>
                        <div className="col-md-6">{config.AboutMe}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;