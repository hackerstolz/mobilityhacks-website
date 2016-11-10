import React from 'react';
require('./main.styl');

const titletext = 'Watching the change driving by while waiting for<br />' +
    'the bus is not as good as changing mobility itself.<br />' +
    'Hop on and create incredible prototypes that help<br />' +
    'forming the vision of furture mobility!';

class ModalView extends React.Component {
    render() {
        return (
            <div id="why-mobility" className="content-container wide why-mobility">
              <div className="textbox">
                <h1>
                  Watching the change driving by while waiting for
                  the bus is not as good as changing mobility itself.
                  Hop on and create incredible prototypes that help
                  forming the vision of furture mobility!
                </h1>
              </div>
                <br />
                <div className="aftermovie">
                    <iframe src="https://www.youtube.com/embed/R8myY9XjiN0" frameBorder="0" allowFullScreen></iframe>
                </div>
                <p className="hidden">
                    You want to know how it feels to be at a Hackathon?
                    <br />
                    <a href="https://medium.com/@Hackerstolz/42-hours-at-a-hackathon-4f6444a3c3bd" target="_blank">We wrote something about it.</a>
                </p>
                <p className="hidden">
                    And if you are still unsure if a Hackathon is something for you, we got
                    <br />
                    <a href="https://medium.com/@Hackerstolz/7-reasons-why-you-should-go-to-a-hackathon-5242c092e2c4" target="_blank">7 reasons for you to go.</a>
                </p>
            </div>
        );
    }
}

export default ModalView;
