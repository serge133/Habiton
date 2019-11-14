import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// * Pages
import Home from './Pages/Home/Home';
import Tasks from './Pages/Tasks/Tasks';
import Bubbles from './Pages/Bubbles/Bubbles';

const routing = (
    <Router>
        <Route exact path = "/" component={Home}/>
        <Route exact path="/tasks" component={Tasks}/>
        <Route exact path="/bubbles" component={Bubbles}/>
    </Router>
);

export default routing;