import React, { Component } from 'react';
import config from '../config';
import './AboutMe.css';

class AboutMe extends Component {
    styles = {
        //maxHeight: '100%',
        //maxWidth: '100%'
    }
    render() {
        return (
            <div className="about-me">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6"><img className="picture" src={require(`../assets/profilePic.png`)} alt='Profile' ></img></div>
                        <div className="col-md-6 aboutMeText align-middle">{config.AboutMe}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;