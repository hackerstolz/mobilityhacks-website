import React from 'react';

class Tile extends React.Component {
    render() {

        if (this.props.imageSrc) {
            var imgStyle = {
                backgroundImage: 'url(' + require(this.props.imageSrc) + ')'
            };
            var className = 'tile tile__image ' + (this.props.className ? this.props.className : "");

            return (
                <div className={ className } style={ imgStyle }>
                    {this.props.children}
                </div>
            );
        }
        else {
            var className = 'tile tile__text ' + (this.props.className ? this.props.className : "");

            return (
                <div className={ className }>
                    {this.props.children}
                </div>
            );
        }
    }
}

export default Tile;