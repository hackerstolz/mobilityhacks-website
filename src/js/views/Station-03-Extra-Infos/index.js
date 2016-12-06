import React from "react";

require('./main.styl');

var asdf = 'mobility{hacks}';
class ExtraInfos extends React.Component {
    render() {
        return (
            <div id="get-your-ticket" className="content-container get-your-ticket">
                <div className="textbox">
                    <div className="container">
                        <div className="logo-container">
                            <h1>Hack till you drop!</h1>
                            <img src={ require('./images/mobility-hacks-ci-logo.svg') }/>
                        </div>

                        <br />

                        <p className="small-para">
                            Wow, what a grand finale for such a great year. We hope you enjoyed the second Berlin Hackathon this year just as well as we did. The greatest thanks go to all participants, their impressive projects and their entertaining presentations. Over the Christmas season the memory of the atmosphere will give us much pleasure. The following days we will report the winning projects. The whole Hackerstolz team wishes all participants and fans a wonderful Christmas time. 😃
                        </p>

                        <br />

                        <p className="small-para">
                            We would also like to thank the Berlin fire brigade and police, which was so exemplary as the fire alarm at the opening ceremonies was triggered.<i> 🚒</i>
                        </p>

                        <br />

                        <p className="small-para">
                            You can find all submissions on
                        </p>

                        <a href="https://mobility-hacks.devpost.com/">Devpost</a>
                    </div>

                    <iframe className="pic-frame"
                            src="http://albumizr.com/a/vZI0"
                            scrolling="no"
                            frameBorder="no"
                            allowFullScreen></iframe>
                </div>

            </div>

        )
    }
}

export default ExtraInfos;
