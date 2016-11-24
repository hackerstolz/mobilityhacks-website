import React from "react";

require('./main.styl');

class Prizes extends React.Component {
    render() {
        return (
            <div id="prizes" className="prizes content-container">
                <h1>Awesome Prizes</h1>
                <p>
                    The reason you're coming for - the money.<br />
                    Who are we to judge. Oh sh*t we have to judge.
                </p>


                <div className="circle-image__container">
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize1.svg')}/>
                        <p className="image-text">1st Prize</p>
                        <p className="image-text--line2">2000 €</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize2.svg')}/>
                        <p className="image-text">2nd Prize</p>
                        <p className="image-text--line2">1000€</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize3.svg')}/>
                        <p className="image-text">3rd Prize</p>
                        <p className="image-text--line2">500€</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_audienceaward.svg')}/>
                        <p className="image-text">Audience Award</p>
                        <p className="image-text--line2">Best Goddies Ever</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_bvg.svg')}/>
                        <p className="image-text">BVG Challenge Prize</p>
                        <p className="image-text--line2">TBA</p>
                        <img className="challenge-sponsor-image" src={require('./prizes/BVG-white-border.png')}/>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_ergo.svg')}/>
                        <p className="image-text">ERGO Challenge Prize</p>
                        <p className="image-text--line2">TBA</p>
                        <img className="challenge-sponsor-image" style={{width: '150px'}} src={require('./prizes/ergo.svg')}/>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_europcar.svg')}/>
                        <p className="image-text">Europcar Challenge Prize</p>
                        <p className="image-text--line2">TBA</p>
                        <img className="challenge-sponsor-image" src={require('./prizes/europcar.svg')}/>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_ibm.svg')}/>
                        <p className="image-text">IBM Challenge Prize</p>
                        <p className="image-text--line2">TBA</p>
                        <img className="challenge-sponsor-image" src={require('./prizes/IBM-Bluemix-logo-text_horizontal_transparent.png')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prizes;
