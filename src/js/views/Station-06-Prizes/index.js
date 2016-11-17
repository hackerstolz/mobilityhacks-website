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
                        <img className="circle-image" src={require('./prizes/logo_prizeaudience.svg')}/>
                        <p className="image-text">Audience Award</p>
                        <p className="image-text--line2">Best Goddies Ever</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prizechallenge.svg')}/>
                        <p className="image-text">Challenge Prize</p>
                        <p className="image-text--line2">TBA</p>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prizechallenge.svg')}/>
                        <p className="image-text">Challenge Prize</p>
                        <p className="image-text--line2">TBA</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prizes;
