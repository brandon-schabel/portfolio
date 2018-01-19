import React, {Component} from 'react';
import './Home.css';
import config from '../config';

class Home extends Component {
    styles = {
        backgroundColor: '#f8bbd0' //make adjustable
    }
    render() {
        return (
            <div style={this.styles} className="home">
                <div className="container">
                    <div className="siteBanner">
                        <div className="siteTitle row">
                            <div class="container">
                                <h1 >{config.siteTitle}</h1>
                            </div>
                        </div>

                        <div className="row siteSubHeading">
                            <div class="container">
                                <h3>{config.siteSubHeading}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;