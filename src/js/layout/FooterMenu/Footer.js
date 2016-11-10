import React from 'react';
import {BurgerMenuButton, Menu} from './BurgerMenu/';
import TicketButton from './TicketButton/';
import { Link } from 'react-scroll';

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
                        <Link spy={true} smooth={true} to="home" >#</Link>
                        <Link spy={true} smooth={true} to="why-mobility" activeClass="link--active">Why Mobility</Link>
                        <Link spy={true} smooth={true} to="get-your-ticket" activeClass="link--active">Tickets</Link>
                        <Link spy={true} smooth={true} to="sponsors" activeClass="link--active">Sponsors</Link>
                        <Link spy={true} smooth={true} to="prizes" activeClass="link--active">Prizes & Jury</Link>
                        <Link spy={true} smooth={true} to="schedule" activeClass="link--active">Schedule</Link>
                        <Link spy={true} smooth={true} to="faq" activeClass="link--active">FAQ</Link>
                    </div>
                    <div className="offCanvasMenu__container-bottom"></div>
                </Menu>

                <BurgerMenuButton ref="burgerIcon" visible={ this.state.visible } clickHandler={ this.toggleMenu.bind(this) }/>


                <div className="app-footer only-big-screen" ref="appFooter">
                    <div className="app-footer--left">
                        <Link spy={true} smooth={true} to="home" activeClass="link--active">
                        <div className="hackerstolz-logo">
                            <img className="hackerstolz-logo__img" src={require('./hackerstolz_icon.svg')}/>
                        </div>
                        </Link>
                        <Link spy={true} smooth={true} to="home" >#</Link>
                        <Link spy={true} smooth={true} to="get-your-ticket" activeClass="link--active">Tickets</Link>
                        <Link spy={true} smooth={true} to="why-mobility" activeClass="link--active">Why Mobility</Link>
                        <Link spy={true} smooth={true} to="sponsors" activeClass="link--active">Sponsors</Link>
                        <Link spy={true} smooth={true} to="prizes" activeClass="link--active">Prizes & Jury</Link>
                        <Link spy={true} smooth={true} to="schedule" activeClass="link--active">Schedule</Link>
                        <Link spy={true} smooth={true} to="faq" activeClass="link--active">FAQ</Link>
                    </div>
                    <div className="app-footer--right">
                        <TicketButton />
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
