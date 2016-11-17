import React from "react";
import {Link} from "react-scroll";
require('./main.styl');

class Coc extends React.Component {
    render() {
        return (
            <div id="coc" className="coc content-container">
                <a href="http://berlincodeofconduct.org/" target="_blank">
                    <img src={require('./images/coc.svg')}/>
                    <h1>Berlin Code of Conduct</h1>
                </a>
            </div>
        );
    }
}

export default Coc;
