import React from 'react';
import {Route} from 'react-router-dom';

//Components
import Portfolio from './PortfolioView/Portfolio';
import AboutMe from './AboutMe';
import Home from './Home';
import Resume from './ResumeView/Resume'
const Routes = () => {
    return (
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={AboutMe}/>
          {/*<Route path="/portfolio" component={Portfolio}/> */}
          <Route path="/resume" component={Resume}></Route>
        </div>
    );
}

export default Routes;