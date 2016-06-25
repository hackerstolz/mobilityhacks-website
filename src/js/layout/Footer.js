import React from 'react';
import { Link } from 'react-router'
import { BurgerMenuButton, Menu, MenuListItem } from './BurgerMenu/'

require('./footer.styl');


class Footer extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.toggleMenu = Menu.toggle;
    //}

    //
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

                <BurgerMenuButton clickHandler={ this.toggleMenu.bind(this) }/>

                <div className="app-footer only-big-screen" ref="appFooter">
                    <Link to="home" activeClassName="link--active">Home</Link>
                    <Link to="get-your-ticket" activeClassName="link--active">Get your ticket</Link>
                    <Link to="previous-hackathons" activeClassName="link--active">Previous Hackathons</Link>
                    <Link to="become-a-sponsor" activeClassName="link--active">Become a Sponsor</Link>

                    <div className="app-footer--right only-big-screen">
                        <Link to="contact" activeClassName="link--active" className="last-link">Contact</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
