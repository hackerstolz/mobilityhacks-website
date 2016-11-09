import React from 'react';
import {Link} from 'react-router';
require('./main.styl');

import Home from './../Home/';
import GetYourTicket from './../GetYourTicket/';
import Station01 from './../Station-01-Mobility/';
import Station02 from './../Station-02-Prizes-and-Jury';
import Station04 from './../Station-04-Organizers';
import Station05 from './../Station-05-Sponsors';
import Station06 from './../Station-06-Schedule';
import Station07 from './../Station-07-FAQ';
import StayAway from './../StayAway';

class Home2 extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <Home />
                <StayAway />
                <GetYourTicket />
                <Station01 />
                <Station05 />
                <Station02 />
                <Station06 />
                <Station07 />
                <Station04 />
            </div>
        );
    }
}

export default Home2;
