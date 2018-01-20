import React, { Component } from 'react';
import AboutMeConfig from './AboutMeConfig';
import './AboutMe.css';
import SiteStyleConfig from '../SiteStyleConfig';

class AboutMe extends Component {
    render() {
        return (
            <div className="" style={SiteStyleConfig.AboutMe}>
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6"><img className="picture" src={require(`../assets/profilePic.png`)} alt='Profile' ></img></div>
                        <div className="col-md-6 aboutMeText align-middle">{AboutMeConfig.AboutMe}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;