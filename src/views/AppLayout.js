import React from 'react';

class AppLayout extends React.Component {
    render() {
        return (
            <div className="app-wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default AppLayout;
