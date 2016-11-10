import React from "react";
import GetYourTicket from "./../GetYourTicket/";
import Station00 from "./../Station-00-Start/";
import Station01 from "./../Station-01-Mobility/";
import Station02 from "./../Station-02-Prizes";
import Station03 from "./../Station-03-Jury";
import Station04 from "./../Station-04-Organizers";
import Station05 from "./../Station-05-Sponsors";
import Station06 from "./../Station-06-Schedule";
import Station07 from "./../Station-07-FAQ";
import StayAway from "./../StayAway";
require('./main.styl');


class Home extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <Station00 />
                <StayAway />
                <GetYourTicket />
                <Station01 />
                <Station05 />
                <Station02 />
                <Station03 />
                <Station06 />
                <Station07 />
                <Station04 />
            </div>
        );
    }
}

export default Home;
