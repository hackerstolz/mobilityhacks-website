import React from 'react';
import { Link } from 'react-router'
import { BurgerMenuButton, Menu } from './BurgerMenu/'

require('./footer.styl');


class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {visible: false};
    }

    toggleMenu() {
        if (this.state.visible == true) {
            this.hideMenu();
        } else {
            this.showMenu();
        }
    }

    showMenu() {
        this.setState({visible: true});
    }

    hideMenu() {
        this.setState({visible: false});
    }

    render() {
        return (
            <div className="footer-container">
                <Menu ref="offCanvasMenu" visible={ this.state.visible } clickHandler={ this.toggleMenu.bind(this) }>
                    <div className="offCanvasMenu__container-top"></div>
                    <div className="offCanvasMenu__container-content">
                        <Link to="home" activeClassName="link--active">Home</Link>
                        <Link to="get-your-ticket" activeClassName="link--active">Get your ticket</Link>
                        <Link to="previous-hackathons" activeClassName="link--active">Previous Hackathons</Link>
                        <Link to="become-a-sponsor" activeClassName="link--active">Become a Sponsor</Link>
                        <Link to="contact" activeClassName="link--active">Contact</Link>
                    </div>
                    <div className="offCanvasMenu__container-bottom"></div>
                </Menu>

                <BurgerMenuButton ref="burgerIcon" visible={ this.state.visible } clickHandler={ this.toggleMenu.bind(this) }/>

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
