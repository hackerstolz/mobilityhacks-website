import React from 'react';
import {Link} from 'react-router';

import MenuBar from './FooterMenu/Footer';

require('./layout.styl');

class AppLayout extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                <MenuBar />

                {this.props.children}

            </div>
        );
    }
}

export default AppLayout;
