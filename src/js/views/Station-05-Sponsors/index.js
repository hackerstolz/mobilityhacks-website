import React from "react";

require('./main.styl');


class Sponsors extends React.Component {
    render() {
        return (
            <div id="sponsors" className="sponsors content-container">
                <div className="textbox">
                    <h1>Check out our fantastic sponsors!</h1>
                </div>
                <div className="sponsor-logos">
                    <div className="full-image__container">
                        <p className="sponsor-class">first class</p>
                        <a href="http://www.bvg.de" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/BVG-white-border.png')}/>
                            </div>
                        </a>
                    </div>

                    <div className="full-image__container">
                        <p className="sponsor-class">first class</p>
                        <a href="https://www.ergo.de" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/ergo.svg')}/>
                            </div>
                        </a>
                    </div>

                    <div className="full-image__container" style={{"maxHeight": "80px"}}>
                        <p className="sponsor-class">first class</p>
                        <a href="https://www.europcar.com" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     style={{"maxHeight": "80px"}}
                                     src={require('./img/europcar.svg')}/>
                            </div>
                        </a>
                    </div>

                    <div className="full-image__container">
                        <p className="sponsor-class">first class</p>
                        <a href="http://www.ibm.com" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/IBM.svg')}/>
                            </div>
                        </a>
                    </div>

                    <div className="full-image__container" style={{display: "none"}}>
                        tbd.
                        <a href="http://www.porsche.com/" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/porsche.svg')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">economy class</p>
                        <a href="https://vector.com" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/vector.svg')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">travel buddy</p>
                        <a href="https://www.rolandberger.com" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/roland-berger-logo-neg.png')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">location sponsor</p>
                        <a href="http://www.spielfeld.com" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/Spielfeld.png')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">flight partner</p>
                        <a href="http://data.deutschebahn.com/" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     style={{"height": "130px"}}
                                     src={require('./img/DB.svg')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">flight partner</p>
                        <a href="http://hub.lh.com" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     style={{"height": "150px"}}
                                     src={require('./img/lufthansa.png')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">flight partner</p>
                        <a href="https://graph.cool" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/graph-cool.svg')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">flight partner</p>
                        <a href="https://www.emio-sharing.de" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/emio.png')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">flight partner</p>
                        <a href="https://minodes.com" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/minodes_logo.png')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">flight partner</p>
                        <a href="https://www.bitkom.org" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     style={{"height": "80px"}}
                                     src={require('./img/bitkom.png')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">flight partner</p>
                        <a href="http://www.otp.systems/" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/otp-logo.png')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">flight partner</p>
                        <a href="http://www.veltins.de" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/veltins.svg')}/>
                            </div>
                        </a>
                    </div>
                    <div className="full-image__container">
                        <p className="sponsor-class">flight partner</p>
                        <a href="https://minodes.com" target="_blank">
                            <div className="full-image-wrap">
                                <img className="full-image"
                                     src={require('./img/4scotty-logo.png')}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sponsors;
