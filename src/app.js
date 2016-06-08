import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

// Assets
require('./index.html');
require('./css/normalize.css');
require('./css/skeleton.css');

// Views
import AppLayout from './views/AppLayout';
import Home from './views/Home';


ReactDom.render(
    <Router>
        <Route name="root" path="/" component={ AppLayout }>
            <IndexRoute name="home" component={ Home }/>
            <Route name="home" path="home" component={ Home }/>
        </Route>
    </Router>,
    document.getElementById('app')
);
