import React from "react";
import Station01 from "./../Station-01-Hero";
import Station02 from "./../Station-02-Stay-Away";
import Station03 from "./../Station-03-Get-Your-Ticket";
import ExtraInfos from "./../Station-03-Extra-Infos";
import Station04 from "./../Station-04-Why-Mobility";
import Station05 from "./../Station-05-Sponsors";
import Station06 from "./../Station-06-Prizes";
import Station07 from "./../Station-07-Jury";
import Station08 from "./../Station-08-Schedule";
import Station09 from "./../Station-09-FAQ";
import Station10 from "./../Station-10-Organizers";
import Station11 from "./../Station-11-Code-of-Conduct";
import Station12 from "./../Station-12-Footer";
require('./main.styl');


class Home extends React.Component {
    render() {
        return (
            <div className="content-wrapper">
                <Station01 />
                <Station02 />
                <ExtraInfos />
                <Station03 />
                <Station04 />
                <Station05 />
                <Station06 />
                <Station07 />
                <Station08 />
                <Station09 />
                <Station10 />
                <Station11 />
                <Station12 />
            </div>
        );
    }
}

export default Home;
