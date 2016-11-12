import React from "react";
import ReactDom from "react-dom";
import {browserHistory, Router, Route, IndexRoute, Redirect, DefaultRoute} from "react-router";
import Layout from "./layout/Layout";
import Home from "./views/Home/";
import Rules from "./views/Exta-Page-Rules/";
import Devpost from "./views/Extra-Page-Create-A-Devpost-Page";

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

ReactDom.render(
    <Router history={ browserHistory }>
        <Route name="root" path="/" component={ Layout }>
            <IndexRoute name="home" component={ Home }/>
            <Route name="home" path="home(#**)" component={ Home }/>
            <Route name="rules" path="rules" component={ Rules }/>
            <Route name="devpost" path="how-to-create-a-devpost-project" component={ Devpost }/>
            <Redirect from="get-your-ticket" to="home#get-your-ticket"/>
            <Redirect from="contact" to="home#organizers"/>
            <Redirect from="station-01-why-mobility" to="home#why-mobility"/>
            <Redirect from="station-02-prizes-and-criteria" to="home#prizes"/>
            <Redirect from="station-03-jury" to="home#jury"/>
            <Redirect from="station-04-organizers" to="home#organizers"/>
            <Redirect from="station-05-sponsors" to="home#sponsors"/>
            <Redirect from="station-06-schedule" to="home#schedule"/>
            <Redirect from="station-07-faq" to="home#faq"/>
            <Redirect from="*" to="/"/>
        </Route>
    </Router>,
    document.getElementById('app')
);
