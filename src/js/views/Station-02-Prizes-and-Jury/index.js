import React from 'react';
import Modal from '../../layout/Modal/Modal';

require('./main.styl');

const titletext = 'The reason you\'re coming for - the money.<br />' +
    'Who are we to judge. Oh sh*t we have to judge.';

class ModalView extends React.Component {
    render() {
        return (
            <div id="prizes" className="prizes content-container">
                <Modal
                    header='Station 4'
                    title='Prizes & Jury'
                    titletext={titletext}
                >
                    <fieldset className="fieldset">
                        <legend>MAIN PRIZES</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./prizes/prizes.png')}/>
                                    <p className="image-text">1. Prize</p>
                                    <p className="image-text">2000 €</p>
                                </div>
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./prizes/prizes.png')}/>
                                    <p className="image-text">2. Prize</p>
                                    <p className="image-text">1000€</p>
                                </div>
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./prizes/prizes.png')}/>
                                    <p className="image-text">3. Prize</p>
                                    <p className="image-text">500€</p>
                                </div>
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./prizes/prizes.png')}/>
                                    <p className="image-text">Audience Award</p>
                                    <p className="image-text">Best Goddies Ever</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Challenge prizes</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./prizes/IBM.svg')}/>
                                    <p className="image-text">IBM Challenge</p>
                                    <p className="image-text">TBA.</p>
                                </div>
                                <div className="full-image__container">
                                    <img className="full-image" src={require('./prizes/BVG-white-border.png')}/>
                                    <p className="image-text">BVG Challenge</p>
                                    <p className="image-text">TBA.</p>
                                </div>
                                <div className="full-image__container">
                                    <img className="full-image" width="160px" src={require('./prizes/ergo.svg')}/>
                                    <p className="image-text">Ergo Challenge</p>
                                    <p className="image-text">TBA.</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset jury">
                        <legend>Jury members</legend>
                        <div className="fieldset__container">
                            <div className="fieldset__container-wrapper">
                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./jury/andreas_frank.jpg')}/>
                                    <p className="image-text-title">Andreas Frank</p>
                                    <p className="image-text">Partner, Davidson Capital GmbH</p>
                                    <p className="image-text-2">Our investor. No, he will not invest in your hackathon idea. He will only judge it.</p>
                                </div>

                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./jury/eberhart_wolff.jpg')}/>
                                    <p className="image-text-title">Eberhart Wolff</p>
                                    <p className="image-text">Fellow at innoQ</p>
                                    <p className="image-text-2">A Java Champion. This is the person you consult about software architecture and technology. He writes books and authors a blog at heise developer.</p>
                                </div>

                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./jury/hauke_feldvoss.jpg')}/>
                                    <p className="image-text-title">Hauke Feldvoss</p>
                                    <p className="image-text">CTO and co-founder, E-Mio</p>
                                    <p className="image-text-2">Berlin Schöneberg instead of Palo Alto. As co-founder of eMio he is a visionary in everything about mobility.</p>
                                </div>

                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./jury/michael_kollig.jpg')}/>
                                    <p className="image-text-title">Michael Kollig</p>
                                    <p className="image-text">CIO, Theo Müller Group</p>
                                    <p className="image-text-2">His title may sound scary, but he is an expert in building modern organizations and teams with non hierarchical leadership.</p>
                                </div>

                                <div className="circle-image__container">
                                    <img className="circle-image" src={require('./jury/uwe_vock.jpg')}/>
                                    <p className="image-text-title">Uwe Vock</p>
                                    <p className="image-text">Professor for Design, UdK</p>
                                    <p className="image-text-2">He’s not only a renowned professor for design, but also a former Creative Director and holder of quite some international design awards. You want to know anything about design? He’s your man.</p>
                                </div>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend>Criteria</legend>
                        <div className="fieldset__container fieldset__container--criteria">
                            <div className="fieldset__container-wrapper">
                                <p><span className="percent-text">10%</span> Luck</p>
                                <p><span className="percent-text">20%</span> Skill</p>
                                <p><span className="percent-text">15%</span> Concentrated Power of Will</p>
                                <p><span className="percent-text">5%</span> Pleasure</p>
                                <p><span className="percent-text">50%</span> Pain</p>
                                <p><span className="percent-text">100%</span> Reason to join Hackerstolz</p>
                            </div>
                        </div>
                    </fieldset>
                </Modal>
            </div>
        );
    }
}

export default ModalView;
