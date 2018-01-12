import React from 'react';
import {Route} from 'react-router-dom';

//Components
import Portfolio from './PortfolioView/Portfolio';
import AboutMe from './AboutMe';
import Home from './Home';

const Routes = () => {
    return (
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutMe}/>
          <Route path="/portfolio" component={Portfolio}/>
        </div>
    );
}

export default Routes;