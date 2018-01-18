import React, {Component} from 'react';
import './Home.css';
import config from '../config';

class Home extends Component {
    styles = {
        //backgroundImage: `url(${config.homeBackgroundImg})`,
        backgroundColor: '#ff4d4d' //make adjustable
    }
    render() {
        return (
            <div style={this.styles} className="home">
                <div className="container">
                    <div className="siteTitle row">
                        <h1 >{config.siteTitle}</h1>
                    </div>

                    <div className="row siteSubHeading"><h3>{config.siteSubHeading}</h3></div>
                </div>

            </div>
        );
    }
}

export default Home;