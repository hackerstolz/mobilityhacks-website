import React from "react";

require('./main.styl');

var asdf = 'mobility{hacks}';
class ExtraInfos extends React.Component {
    render() {
        return (
            <div id="extra-infos" className="content-container extra-infos">
                <div className="textbox">
                    <div className="container">
                        <div className="logo-container">
                            <h1>Hack till you drop!</h1>
                            <img src={ require('./images/mobility-hacks-ci-logo.svg') }/>
                        </div>

                        <br/>

                        <h3><a href="https://github.com/hackerstolz/mobilityhacks-api" target="_blank">API-Docu on Github</a></h3>
                        <h3><a href="https://mobility-hacks.devpost.com/" target="_blank">Register your project on Devpost</a></h3>
                        <ul>
                            <li>Go to devpost</li>
                            <li>Create an account</li>
                            <li>Register for { asdf }<a href="https://mobility-hacks.devpost.com/">here</a></li>
                            <li>Create your project as a submission for { asdf }</li>
                        </ul>
                    </div>
                </div>

            </div>

        )
    }
}

export default ExtraInfos;
