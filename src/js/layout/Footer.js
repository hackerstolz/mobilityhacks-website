import React from 'react';
import { Link } from 'react-router'

class Footer extends React.Component {

    render() {
        return (
            <div className="app-footer" ref="appFooter">
                <Link to="home" activeClassName="link--active">Home</Link>
            </div>
        );
    }
}

export default Footer;
