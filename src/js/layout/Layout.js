import React from 'react';
import Footer from './Footer';

require('../../css/base.styl');
require('./layout.styl');
require('./background.styl');
require('./background.svg');

class AppLayout extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

export default AppLayout;
