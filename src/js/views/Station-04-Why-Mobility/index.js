import React from "react";
require('./main.styl');

class Mobility extends React.Component {
    render() {
        return (
            <div id="why-mobility" className="content-container wide why-mobility">
                <div className="textbox">
                    <h1>WHY MOBILITY HACKS?</h1>
                    <p className="small-para">
                        Watching the change driving by while waiting for
                        the bus is not as good as changing mobility itself.
                        Hop on and create incredible prototypes that help
                        forming the vision of future mobility!
                    </p>
                    <h2>

                    </h2>
                </div>

                <div className="picture-box__container">
                    <div className="picture-box__item">
                        <a href="https://medium.com/@Hackerstolz/42-hours-at-a-hackathon-4f6444a3c3bd" target="_blank">
                            <div className="picture-box__image-container picture-box__image-container--img">
                                <img className="picture-small" src={require('./img/002.jpg')}/>
                            </div>
                            <h3>42 Hours <br/> at a Hackathon</h3>
                            <p className="picture-box__image-desc not-xs">Hey! I’m Sebastian, a newly member of Hackerstolz and a huge fan of Hackathons. This is a short story about my last Hackathon. It was not your most typical Hackathon, as it was kind of a corporate one about new ideas some business units, but you still will get the idea how a Hackathon works.</p>
                        </a>
                    </div>

                    <div className="picture-box__item">
                        <div className="picture-box__image-container">
                            <iframe src="//www.youtube.com/embed/R8myY9XjiN0" frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <h3>Food Hacks Aftermovie by Hackerstolz</h3>
                        <p className="picture-box__image-desc not-xs">Get some impression about our last hackathon with this aftermovie! It was a great location, we had fantastic food, outstanding prototypes and of course genuis participants.
                            Thank you all for making this event unforgettable! </p>
                    </div>

                    <div className="picture-box__item">
                        <a href="https://medium.com/@Hackerstolz/7-reasons-why-you-should-go-to-a-hackathon-5242c092e2c4" target="_blank">
                            <div className="picture-box__image-container picture-box__image-container--img">
                                <img className="picture-small" src={require('./img/001.jpg')}/>
                            </div>
                            <h3>7 Reasons why you should go to a Hackathon</h3>
                            <p className="picture-box__image-desc not-xs">A hackathon is any event of any duration where people come together to solve problems with digital means and present them to each other. That’s it, really simple. In most cases a hackathon is on two days and you get 24 hours time for the hacking. But why should you even bother to invest two of your precious days? Well, here are at least seven reasons!</p>
                        </a>
                    </div>
                </div>

                <p className="hidden">
                    You want to know how it feels to be at a Hackathon?
                    <br />
                </p>
                <p className="hidden">
                    And if you are still unsure if a Hackathon is something for you, we got
                    <br />
                </p>
            </div>
        );
    }
}

export default Mobility;
