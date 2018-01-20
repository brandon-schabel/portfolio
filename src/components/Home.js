import React, {Component} from 'react';
import './Home.css';
import SiteStyleConfig from '../SiteStyleConfig';

class Home extends Component {
    styles = {
        backgroundColor: SiteStyleConfig.home.backgroundColor 
    }
    render() {
        return (
            <div style={this.styles} className="home">
                <div className="container">
                    <div className="siteBanner">
                        <div className="siteTitle row">
                            <div class="container">
                                <h1 >{SiteStyleConfig.home.siteTitle}</h1>
                            </div>
                        </div>

                        <div className="row siteSubHeading">
                            <div class="container">
                                <h3>{SiteStyleConfig.home.siteSubHeading}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;