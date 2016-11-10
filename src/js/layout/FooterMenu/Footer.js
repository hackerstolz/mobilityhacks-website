import React from 'react';
import {Link} from 'react-router';
import {BurgerMenuButton, Menu} from './BurgerMenu/';
import TicketButton from './TicketButton/';

require('./footer.styl');

const WINDOW_HEIGHT = window.innerHeight;

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          visible: false,
          isButtonVisible: false
        };
        this.onScroll = this.onScroll.bind(this)
    }

    componentDidMount(){
      window.addEventListener('scroll',this.onScroll);
    }

    componentWillUnmount(){
      window.removeEventListener('scroll',this.onScroll);
    }

    onScroll() {
      console.log("onScroll")
      const { isButtonVisible } = this.state;
      if (window.scrollY > WINDOW_HEIGHT) {
        !isButtonVisible && this.setState({isButtonVisible: true})
      } else {
        isButtonVisible && this.setState({isButtonVisible: false})
      }
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
                        <Link to="get-your-ticket" activeClassName="link--active">Tickets</Link>
                        <Link to="station-05-sponsors" activeClassName="link--active">Sponsors</Link>
                        <Link to="station-02-prizes-and-criteria" activeClassName="link--active">Prizes & Jury</Link>
                        <Link to="station-06-schedule" activeClassName="link--active">Schedule</Link>
                        <Link to="station-07-faq" activeClassName="link--active">FAQ</Link>
                    </div>
                    <div className="offCanvasMenu__container-bottom"></div>
                </Menu>

                <BurgerMenuButton ref="burgerIcon" visible={ this.state.visible } clickHandler={ this.toggleMenu.bind(this) }/>


                <div className="app-footer only-big-screen" ref="appFooter">
                    <div className="app-footer--left">
                        <Link to="home" activeClassName="link--active">
                        <div className="hackerstolz-logo">
                            <img className="hackerstolz-logo__img" src={require('./hackerstolz_icon.svg')}/>
                        </div>
                        </Link>


                        <Link to="get-your-ticket" activeClassName="link--active">Tickets</Link>
                        <Link to="station-01-why-mobility" activeClassName="link--active">Why Mobility</Link>
                        <Link to="station-05-sponsors" activeClassName="link--active">Sponsors</Link>
                        <Link to="station-02-prizes-and-criteria" activeClassName="link--active">Prizes / Jury</Link>
                        <Link to="station-06-schedule" activeClassName="link--active">Schedule</Link>
                        <Link to="station-07-faq" activeClassName="link--active">FAQ</Link>
                        <Link to="station-04-organizers" activeClassName="link--active">Organizers</Link>
                    </div>
                    <div className="app-footer--right">
                        { this.state.isButtonVisible ? <TicketButton /> : null }
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
