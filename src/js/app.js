import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

// Assets
require('./../index.html');
require('!file?name=[path][name].[ext]?[hash]&context=./src/!./../.htaccess');
require('./../css/normalize.css');
require('./../css/skeleton.css');
require('./../fonts/fonts.styl');

// Views (if you have an index.js you can import folders)
import Layout from './layout/Layout';
import Home from './views/Home/';
import BecomeASponsor from './views/BecomeASponsor/';
import Contact from './views/Contact/';
import GetYourTicket from './views/GetYourTicket/';
import PreviousHackathons from './views/PreviousHackathons/';

ReactDom.render(
    <Router history={ browserHistory }>
        <Route name="root" path="/" component={ Layout }>
            <IndexRoute name="home" component={ Home }/>
            <Route name="home" path="home" location="history" component={ Home }/>
            <Route name="get-your-ticket" path="get-your-ticket" location="history" component={ GetYourTicket }/>
            <Route name="previous-hackathons" path="previous-hackathons" location="history" component={ PreviousHackathons }/>
            <Route name="become-a-sponsor" path="become-a-sponsor" location="history" component={ BecomeASponsor }/>
            <Route name="contact" path="contact" location="history" component={ Contact }/>
        </Route>
    </Router>,
    document.getElementById('app')
);
