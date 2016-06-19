import React from 'react';
import { Link } from 'react-router'
import { Menu, MenuListItem } from './OffCanvasMenu'

require('./footer.styl');


class Footer extends React.Component {
    toggleMenu() {
        this.refs.offCanvasMenu.toggle();
    }

    render() {
        return (
            <div>
                <Menu ref="offCanvasMenu" alignment="left">
                    <Link to="home" activeClassName="link--active">Home</Link>
                    <Link to="get-your-ticket" activeClassName="link--active">Get your ticket</Link>
                    <Link to="previous-hackathons" activeClassName="link--active">Previous Hackathons</Link>
                    <Link to="become-a-sponsor" activeClassName="link--active">Become a Sponsor</Link>
                </Menu>

                <div className="app-footer" ref="appFooter">
                    <button className="burger-menu only-small-screen" onClick={ this.toggleMenu.bind(this) }>
                        <img src={ require('./images/burger.svg') }/>
                    </button>

                    <Link className="only-big-screen" to="home" activeClassName="link--active">Home</Link>
                    <Link className="only-big-screen" to="get-your-ticket" activeClassName="link--active">Get your ticket</Link>
                    <Link className="only-big-screen" to="previous-hackathons" activeClassName="link--active">Previous Hackathons</Link>
                    <Link className="only-big-screen" to="become-a-sponsor" activeClassName="link--active">Become a Sponsor</Link>

                    <div className="app-footer--right only-big-screen">
                        <Link to="contact" activeClassName="link--active" className="last-link">Contact</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
