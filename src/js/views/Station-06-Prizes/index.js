import React from "react";

require('./main.styl');

class Prizes extends React.Component {
    render() {
        return (
            <div id="prizes" className="prizes content-container">

                <h1>Awesome Prizes</h1>
                <img className="prize-image" src={require('./images/prize.jpg')}/>

                <img className="prize-image" src={require('./images/prizes.jpg')}/>

                <p className="textbox">

                    The good Stuff. Also a bunch of trophies!
                </p>


                <div className="circle-image__container">
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize1.svg')}/>
                        <p className="image-text">1st Prize</p>
                        <p className="image-text--line2">2.000 EUR</p>
                        <img className="full-image" src={require('./images/1st.jpg')}/>
                        <a href="https://devpost.com/software/herzi" target="_blank">Team Herzi</a>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize2.svg')}/>
                        <p className="image-text">2nd Prize</p>
                        <p className="image-text--line2">1.000 EUR</p>
                        <img className="full-image" src={require('./images/2nd.jpg')}/>
                        <a href="https://devpost.com/software/busted-k9ogbd" target="_blank">Team Busted</a>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize3.svg')}/>
                        <p className="image-text">3rd Prize</p>
                        <p className="image-text--line2">500 EUR</p>
                        <img className="full-image" src={require('./images/3rd.jpg')}/>
                        <a href="https://devpost.com/software/petze" target="_blank">Team Petze</a>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_audienceaward.svg')}/>
                        <p className="image-text">Audience Award</p>
                        <p className="image-text--line2">Best Goodies Ever</p>
                        <img className="full-image" src={require('./images/Audience.jpg')}/>
                        <a href="https://devpost.com/software/popup-concerts" target="_blank">Team PopupConcert</a>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_bvg.svg')}/>
                        <p className="image-text">BVG Challenge Prize</p>
                        <p className="image-text--line2">500€ Media-Saturn voucher</p>
                        <img className="challenge-sponsor-image" src={require('./prizes/BVG-white-border.png')}/>
                        <img className="full-image" src={require('./images/BVG.jpg')}/>
                        <a href="https://devpost.com/software/bvg-next" target="_blank">Team BVG NEXT</a>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_ergo.svg')}/>
                        <p className="image-text">ERGO Challenge Prize</p>
                        <p className="image-text--line2">500€</p>
                        <img className="challenge-sponsor-image" style={{width: '150px'}} src={require('./prizes/ergo.svg')}/>
                        <img className="full-image" src={require('./images/Ergo.jpg')}/>
                        <a href="https://devpost.com/software/my-crash-buddy" target="_blank">Team My Crash Buddy</a>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_europcar.svg')}/>
                        <p className="image-text">Europcar Challenge Prize</p>
                        <p className="image-text--line2">UBEEQO and car rental vouchers</p>
                        <img className="challenge-sponsor-image-wide" src={require('./prizes/europcar.svg')}/>
                        <img className="full-image" src={require('./images/Europcar.jpg')}/>
                        <a href="https://devpost.com/software/greenstreet" target="_blank">Team GreenStreet</a>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_ibm.svg')}/>
                        <p className="image-text">IBM Challenge Prize</p>
                        <p className="image-text--line2">Particle Maker Kits including<br/>a 6 months Bluemix Code</p>
                        <img className="challenge-sponsor-image-wide" src={require('./prizes/IBM-Bluemix-logo-text_horizontal_transparent.png')}/>
                        <img className="full-image" src={require('./images/IBM.jpg')}/>
                        <a href="https://devpost.com/software/ubahnvz" target="_blank">Team UBahnVZ</a>
                    </div>
                    <div className="circle-image__item">
                        <img className="circle-image" src={require('./prizes/logo_prize_audienceaward.svg')}/>
                        <p className="image-text">Lufthansa API Prize</p>
                        <p className="image-text--line2">2 JBL Boxes and Power Banks</p>
                        <img className="challenge-sponsor-image" src={require('./prizes/lufthansa.png')}/>
                        <img className="full-image" src={require('./images/lufthansa.jpg')}/>
                        <a href="https://devpost.com/software/zipyatrip" target="_blank">Team ZipYourTrip</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Prizes;
