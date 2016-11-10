import React from 'react';
import ReactDom from 'react-dom';
import {browserHistory, Router, Route, IndexRoute, Redirect} from 'react-router';

// Assets
require('./../index.html');
require('./../sitemap.xml');
require('./../robots.txt');
require('./../website_teaser.jpg');

require('!file?name=[path][name].[ext]?[hash]&context=./src/!./../.htaccess');
require('!file?name=[path][name].[ext]?[hash]&context=./src/!./../favicon.ico');
require('./../css/normalize.css');
require('./../css/skeleton.css');
require('./../fonts/fonts.styl');

// Views (if you have an index.js you can import folders)
import Layout from './layout/Layout';
import Home from './views/Home/';

ReactDom.render(
    <Router history={ browserHistory }>
        <Route name="root" path="/" component={ Layout }>
            <IndexRoute name="home" component={ Home }/>
            <Route name="home" path="home(#**)" component={ Home }/>
            <Redirect from="get-your-ticket" to="home#get-your-ticket"/>
            <Redirect from="contact" to="home#organizers"/>
            <Redirect from="station-01-why-mobility" to="home#why-mobility"/>
            <Redirect from="station-02-prizes-and-criteria" to="home#prizes"/>
            <Redirect from="station-03-jury" to="home#jury"/>
            <Redirect from="station-04-organizers" to="home#organizers"/>
            <Redirect from="station-05-sponsors" to="home#sponsors"/>
            <Redirect from="station-06-schedule" to="home#schedule"/>
            <Redirect from="station-07-faq" to="home#faq"/>
        </Route>
    </Router>,
    document.getElementById('app')
);
