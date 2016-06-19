import React from 'react';
import { Link } from 'react-router'
import { Menu, MenuListItem } from './OffCanvasMenu'

require('./footer.styl');


class Footer extends React.Component {
    toggleMenu() {
        this.refs.left.toggle();
    }

    render() {
        return (
            <div>
                <button onClick={this.toggleMenu.bind(this)}>Show Left Menu!</button>
                <Menu ref="left" alignment="left">
                    <MenuListItem hash="first-page">First Page</MenuListItem>
                    <MenuListItem hash="second-page">Second Page</MenuListItem>
                    <MenuListItem hash="third-page">Third Page</MenuListItem>
                </Menu>

                <div className="app-footer" ref="appFooter">
                    <Link to="home" activeClassName="link--active">Home</Link>
                    <Link to="get-your-ticket" activeClassName="link--active">Get your ticket</Link>
                    <Link to="previous-hackathons" activeClassName="link--active">Previous Hackathons</Link>
                    <Link to="become-a-sponsor" activeClassName="link--active">Become a Sponsor</Link>

                    <div className="app-footer--right">
                        <Link to="contact" activeClassName="link--active" className="last-link">Contact</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
