import React, { Component } from 'react';
import AboutMeData from './AboutMeData';

class AboutMe extends Component {
    render() {
        return (
            <div className="container">
                {AboutMeData.body}
            </div>
        );
    }
}

AboutMe.propTypes = {

};

export default AboutMe;