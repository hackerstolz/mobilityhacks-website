import React from "react";
require('./main.styl');

class Organizers extends React.Component {
    render() {
        return (
            <div id="organizers" className="organizers content-container">
                <h1>Organizers</h1>
                <p className="small-para">
                    Why us, I don't know! We are all huge fans of Hackathons and want to share
                    the joy we had at other events. So we decided to host our own. This is our 2nd Hackathon in Berlin,
                    we are Hackerstolz and we hope you like our super cool events.
                    <br />
                    <br />
                    <a href="mailto:hello@mobility-hacks.de">SEND US AN EMAIL</a>
                </p>

                <div className="circle-image__container">
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./pictures/iris_broese_bw.png')}/>
                        <p className="image-text-name">Iris Bröse</p>
                        <p className="image-text-desc not-xs">Sponsors, Planning, Interior, Catering</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./pictures/oezden_gelgec_bw.png')}/>
                        <p className="image-text-name">Özden Gelgeç</p>
                        <p className="image-text-desc not-xs">Identity, Interior Design</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./pictures/alex_bw.png')}/>
                        <p className="image-text-name">Alexander Müller</p>
                        <p className="image-text-desc not-xs">Finance, Moderation, Planning</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./pictures/daniel_seiler_bw.png')}/>
                        <p className="image-text-name">Daniel Seiler</p>
                        <p className="image-text-desc not-xs">Identity</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./pictures/frederik_chettouh_bw.png')}/>
                        <p className="image-text-name">Frederik Chettouh</p>
                        <p className="image-text-desc not-xs">Sponsors, Service, Moderation</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./pictures/nico_ring_bw.png')}/>
                        <p className="image-text-name">Nico Ring</p>
                        <p className="image-text-desc not-xs">Sponsors, Tech Partnerships, Infrastructure</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./pictures/sebastian_waschnick_bw.png')}/>
                        <p className="image-text-name">Sebastian Waschnick</p>
                        <p className="image-text-desc not-xs">Tech Partnerships, Website</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Organizers;
