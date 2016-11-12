import React from "react";

require('./main.styl');

class Jury extends React.Component {
    render() {
        return (
            <div id="jury" className="jury content-container">
                <h1>Jury Members</h1>
                <p>
                    A little less fatal than in circus maximus.<br />
                    But berely a pinch. That's what you need:
                </p>
                <div className="what-you-need">
                    <div><span className="percent-text">20%</span> Skill</div>
                    <div><span className="percent-text">15%</span> Concentrated Power of Will</div>
                    <div><span className="percent-text">5%</span> Pleasure</div>
                    <div><span className="percent-text">50%</span> Pain</div>
                    <div><span className="percent-text">100%</span> Reason to join Hackerstolz</div>
                </div>


                <div className="circle-image__container">

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/andreas_frank.jpg')}/>
                        <p className="image-text-name">Andreas Frank</p>
                        <p className="image-text-job">Partner, Davidson Capital GmbH</p>
                        <p className="image-text-desc not-xs">Our investor. No, he will not invest in your hackathon idea. He will only judge it.</p>
                    </div>

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/eberhart_wolff.jpg')}/>
                        <p className="image-text-name">Eberhart Wolff</p>
                        <p className="image-text-job">Fellow at innoQ</p>
                        <p className="image-text-desc not-xs">A Java Champion. This is the person you consult about software architecture and technology. He writes books and authors a blog at heise developer.</p>
                    </div>

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/hauke_feldvoss.jpg')}/>
                        <p className="image-text-name">Hauke Feldvoss</p>
                        <p className="image-text-job">CTO and co-founder, E-Mio</p>
                        <p className="image-text-desc not-xs">Berlin Schöneberg instead of Palo Alto. As co-founder of eMio he is a visionary in everything about mobility.</p>
                    </div>

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/michael_kollig.jpg')}/>
                        <p className="image-text-name">Michael Kollig</p>
                        <p className="image-text-job">CIO, Theo Müller Group</p>
                        <p className="image-text-desc not-xs">His title may sound scary, but he is an expert in building modern organizations and teams with non hierarchical leadership.</p>
                    </div>

                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./jury/uwe_vock.jpg')}/>
                        <p className="image-text-name">Uwe Vock</p>
                        <p className="image-text-job">Professor for Design, UdK</p>
                        <p className="image-text-desc not-xs">He’s not only a renowned professor for design, but also a former Creative Director and holder of quite some international design awards. You want to know anything about design? He’s your man.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jury;
