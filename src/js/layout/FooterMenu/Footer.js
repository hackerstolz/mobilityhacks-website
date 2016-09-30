import React from 'react';
import {Link} from 'react-router';
import {BurgerMenuButton, Menu} from '../BurgerMenu/';

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
                        <Link to="home" activeClassName="link--active">#</Link>
                        <Link to="station-01-why-mobility" activeClassName="link--active">Why Mobility</Link>
                        <Link to="station-02-prizes-and-criteria" activeClassName="link--active">Prizes</Link>
                        <Link to="station-03-jury" activeClassName="link--active">Jury</Link>
                        <Link to="station-04-organizers" activeClassName="link--active">Organizers</Link>
                        <Link to="station-05-sponsors" activeClassName="link--active">Sponsors</Link>
                        <Link to="station-06-schedule" activeClassName="link--active">Schedule</Link>
                        <Link to="station-07-faq" activeClassName="link--active">FAQ</Link>
                    </div>
                    <div className="offCanvasMenu__container-bottom"></div>
                </Menu>

                <BurgerMenuButton ref="burgerIcon" visible={ this.state.visible } clickHandler={ this.toggleMenu.bind(this) }/>

                <div className="app-footer only-big-screen" ref="appFooter">
                    <div className="app-footer--left">
                        <Link to="home" activeClassName="link--active">#</Link>
                        <Link to="station-01-why-mobility" activeClassName="link--active">Why Mobility</Link>
                        <Link to="station-02-prizes-and-criteria" activeClassName="link--active">Prizes</Link>
                        <Link to="station-03-jury" activeClassName="link--active">Jury</Link>
                        <Link to="station-04-organizers" activeClassName="link--active">Organizers</Link>
                        <Link to="station-05-sponsors" activeClassName="link--active">Sponsors</Link>
                        <Link to="station-06-schedule" activeClassName="link--active">Schedule</Link>
                        <Link to="station-07-faq" activeClassName="link--active">FAQ</Link>
                    </div>
                    <div className="app-footer--right">
                        <Link to="contact" activeClassName="link--active" className="last-link">Contact</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
