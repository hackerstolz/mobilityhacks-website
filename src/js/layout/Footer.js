import React from 'react';
import { Link } from 'react-router'
require('./footer.styl');


class Footer extends React.Component {

    render() {
        return (
            <div className="app-footer" ref="appFooter">
                <Link to="home" activeClassName="link--active">Home</Link>
                <Link to="get-your-ticket" activeClassName="link--active">Get your ticket</Link>
                <Link to="previous-hackathons" activeClassName="link--active">Previous Hackathons</Link>
                <Link to="become-a-sponsor" activeClassName="link--active">Become a Sponsor</Link>
                <div className="app-footer--right">
                    <Link to="contact" activeClassName="link--active" className="last-link">Contact</Link>
                </div>
            </div>
        );
    }
}

export default Footer;
