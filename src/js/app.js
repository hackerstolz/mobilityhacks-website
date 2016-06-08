import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

// Assets
require('./../index.html');
require('./../css/normalize.css');
require('./../css/skeleton.css');
require('./../css/main.styl');

// Views
import AppLayout from './layout/AppLayout';
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
