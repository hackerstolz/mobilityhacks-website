import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';

// Assets
require('./../index.html');
require('./../sitemap.xml');
require('./../website_teaser.jpg');

require('!file?name=[path][name].[ext]?[hash]&context=./src/!./../.htaccess');
require('!file?name=[path][name].[ext]?[hash]&context=./src/!./../favicon.ico');
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
import Station01 from './views/Station-01-Mobility/';
import Station02 from './views/Station-02-Prizes';
import Station03 from './views/Station-03-Jury';
import Station04 from './views/Station-04-Organizers';
import Station05 from './views/Station-05-Sponsors';
import Station06 from './views/Station-06-Schedule';
import Station07 from './views/Station-07-FAQ';

ReactDom.render(
    <Router history={ browserHistory }>
        <Route name="root" path="/" component={ Layout }>
            <IndexRoute name="home" component={ Home }/>
            <Route name="home" path="home" location="history" component={ Home }/>
            <Route name="get-your-ticket" path="get-your-ticket" location="history" component={ GetYourTicket }/>
            <Route name="previous-hackathons" path="previous-hackathons" location="history" component={ PreviousHackathons }/>
            <Route name="become-a-sponsor" path="become-a-sponsor" location="history" component={ BecomeASponsor }/>
            <Route name="contact" path="contact" location="history" component={ Contact }/>
            <Route name="station-01" path="station-01-why-mobility" location="station-01" component={ Station01 }/>
            <Route name="station-02" path="station-02-prizes-and-criteria" location="station-02" component={ Station02 }/>
            <Route name="station-03" path="station-03-jury" location="station-03" component={ Station03 }/>
            <Route name="station-04" path="station-04-organizers" location="station-04" component={ Station04 }/>
            <Route name="station-05" path="station-05-sponsors" location="station-05" component={ Station05 }/>
            <Route name="station-06" path="station-06-schedule" location="station-06" component={ Station06 }/>
            <Route name="station-07" path="station-07-faq" location="station-07" component={ Station07 }/>
        </Route>
    </Router>,
    document.getElementById('app')
);
