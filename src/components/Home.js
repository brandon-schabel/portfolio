import React, { Component } from 'react';
import './Home.css'
import homeBackgroundImage from '../assets/images/1.jpg';

class Home extends Component {
    constructor(props) {
        super(props);
        let styles = {
            backgroundImage: homeBackgroundImage,
            backgroundSize: 'cover',
            overflow: 'hidden'
        }
    }
    
    render() {
        return (
            <div style={this.styles} className="home-style">
            
                <h1 style={this.styles}>Brandon Schabel</h1>
            </div>
        );
    }
}

export default Home;