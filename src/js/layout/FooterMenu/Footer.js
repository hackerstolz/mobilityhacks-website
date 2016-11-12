import React from 'react';
import {BurgerMenuButton, Menu} from './BurgerMenu/';
import TicketButton from './TicketButton/';
import {Link} from 'react-scroll';

require('./footer.styl');

const WINDOW_HEIGHT = window.innerHeight;

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            isButtonVisible: false
        };
        this.onScroll = this.onScroll.bind(this);
        this.initalView = true;
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onScroll);
    }

    onScroll() {
        const {isButtonVisible} = this.state;
        if (window.scrollY > WINDOW_HEIGHT) {
            !isButtonVisible && this.setState({isButtonVisible: true})
        } else {
            isButtonVisible && this.setState({isButtonVisible: false})
        }
        this.hideMenu();
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
        let buttonWrapperClass = "app-footer--right";
        if (this.state.isButtonVisible) {
            this.initialView = false
            buttonWrapperClass += ' show'
        } else if (this.initialView) {
            buttonWrapperClass += ' hide'
        }
        return (
            <div className="footer-container">
                <Menu ref="offCanvasMenu" visible={ this.state.visible } clickHandler={ this.toggleMenu.bind(this) }>
                    <div className="offCanvasMenu__container-top"></div>
                    <div className="offCanvasMenu__container-content">
                        <Link spy={true} smooth={true} to="home">#</Link>
                        <Link spy={true} smooth={true} to="get-your-ticket" activeClass="link--active">Tickets</Link>
                        <Link spy={true} smooth={true} to="why-mobility" activeClass="link--active">Why Mobility</Link>
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
                        <Link spy={true} smooth={true} to="home">#</Link>
                        <Link spy={true} smooth={true} to="get-your-ticket" activeClass="link--active">Tickets</Link>
                        <Link spy={true} smooth={true} to="why-mobility" activeClass="link--active">Why Mobility</Link>
                        <Link spy={true} smooth={true} to="sponsors" activeClass="link--active">Sponsors</Link>
                        <Link spy={true} smooth={true} to="prizes" activeClass="link--active">Prizes & Jury</Link>
                        <Link spy={true} smooth={true} to="schedule" activeClass="link--active">Schedule</Link>
                        <Link spy={true} smooth={true} to="faq" activeClass="link--active">FAQ</Link>
                    </div>
                    <div className={buttonWrapperClass}>
                        <TicketButton />
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
