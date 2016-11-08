import React from 'react';

require('./main.styl');


class ModalView extends React.Component {
    render() {
        return (
            <div className="sponsors content-container">
                <h1>Check out our fantastic sponsors!</h1>
                <p className="small-para">
                    In younger days they were the big brothers buying
                    us alcohol because we were too young. Now we call
                    them Sponsors because we’re too broke.
                </p>
                <div className="sponsor-logos">
                    <div className="full-image__container">
                        <p>first class</p>
                        <img className="full-image"
                             style={{"marginLeft": "20px", "height": "130px"}}
                             src={require('./img/BVG-white-border.png')}/>
                    </div>
                    <div className="full-image__container" style={{"maxHeight": "80px", display: "none"}}                    >
                        <p>first class</p>
                        <img className="full-image"
                             style={{"maxHeight": "80px", display: "none"}}
                             src={require('./img/europcar.svg')}/>
                    </div>

                    <div className="full-image__container">
                        <p>first class</p>
                        <img className="full-image"
                             style={{height: "140px"}}
                             src={require('./img/IBM.png')}/>
                    </div>

                    <div className="full-image__container" style={{"maxHeight": "80px", display: "none"}}>
                        <p>first class</p>
                        <img className="full-image"
                             style={{"maxHeight": "70px", display: "none"}}
                             src={require('./img/ergo.svg')}/>
                    </div>
                    <div className="full-image__container" style={{"maxHeight": "80px", display: "none"}}>
                        tbd.
                        <img className="full-image"
                             style={{"height": "120px", display: "none"}}
                             src={require('./img/porsche.svg')}/>
                    </div>
                    <div className="full-image__container">
                        <p>economy class</p>
                        <img className="full-image"
                             style={{"height": "160px"}}
                             src={require('./img/vector.svg')}/>
                    </div>
                    <div className="full-image__container">
                        <p>travel buddy</p>
                        <img className="full-image"
                             style={{"height": "120px"}}
                             src={require('./img/roland-berger-logo-neg.png')}/>
                    </div>
                    <div className="full-image__container">
                        <p>location sponsor</p>
                        <img className="full-image"
                             src={require('./img/Spielfeld.png')}/>
                    </div>
                    <div className="full-image__container">
                        <p>flight partner</p>
                        <img className="full-image"
                             style={{"height": "80px"}}
                             src={require('./img/bitkom.png')}/>
                    </div>
                    <div className="full-image__container">
                        <p>flight partner</p>
                        <img className="full-image"
                             style={{"height": "50px"}}
                             src={require('./img/graph-cool.svg')}/>
                    </div>
                    <div className="full-image__container">
                        <p>flight partner</p>
                        <img className="full-image"
                             style={{marginLeft: "20px", height: "100px"}}
                             src={require('./img/emio.png')}/>
                    </div>
                    <div className="full-image__container">
                        <p>flight partner</p>
                        <img className="full-image"
                             style={{marginLeft: "20px", height: "50px"}}
                             src={require('./img/minodes_logo.png')}/>
                    </div>
                    <div className="full-image__container">
                        <p>flight partner</p>
                        <img className="full-image"
                             style={{marginLeft: "20px", height: "140px"}}
                             src={require('./img/veltins.svg')}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalView;
