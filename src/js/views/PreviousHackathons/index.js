import React from 'react';

var Masonry = require('react-masonry-component');


const Tile = React.createClass({
    render: function () {
        return (
            <div>
                <div className="tile image-element-class">
                    <div className="tileTitlePicture">{this.props.title}</div>
                    <img className="image" src={ require(this.props.imageSrc) }/>
                </div>
            </div>
        );
    }
});

const masonryOptions = {
    transitionDuration: 0
};


class PreviousHackathons extends React.Component {
    render() {
        return (
            <div className="previous-hackathons content-container">
                <Masonry
                    className={'my-gallery-class'} // default ''
                    elementType={'ul'} // default 'div'
                    options={ this.masonryOptions } // default {}
                    disableImagesLoaded={false} // default false
                    >
                    <Tile imageSrc="./images/Bitmap01.jpg"/>
                    <Tile imageSrc="./images/Bitmap02.jpg"/>
                    <Tile imageSrc="./images/Bitmap03.jpg"/>
                    <Tile imageSrc="./images/Bitmap04.jpg"/>
                    <Tile imageSrc="./images/Bitmap05.jpg"/>
                    <Tile imageSrc="./images/Bitmap06.jpg"/>
                    <Tile imageSrc="./images/Bitmap07.jpg"/>
                    <Tile imageSrc="./images/Bitmap08.jpg"/>
                    <Tile imageSrc="./images/Bitmap09.jpg"/>
                    <Tile imageSrc="./images/Bitmap10.jpg"/>
                    <Tile imageSrc="./images/Bitmap11.jpg"/>
                    <Tile imageSrc="./images/Bitmap12.jpg"/>
                    <Tile imageSrc="./images/Bitmap13.jpg"/>
                    <Tile imageSrc="./images/Bitmap14.jpg"/>
                    <Tile imageSrc="./images/Bitmap15.jpg"/>
                    <Tile imageSrc="./images/Bitmap16.jpg"/>
                    <Tile imageSrc="./images/Bitmap17.jpg"/>
                    <Tile imageSrc="./images/Bitmap18.jpg"/>
                    <Tile imageSrc="./images/Bitmap19.jpg"/>
                    <Tile imageSrc="./images/Bitmap20.jpg"/>
                    <Tile imageSrc="./images/Bitmap21.jpg"/>
                    <Tile imageSrc="./images/Bitmap22.jpg"/>
                    <Tile imageSrc="./images/Bitmap23.jpg"/>
                    <Tile imageSrc="./images/Bitmap24.jpg"/>
                    <Tile imageSrc="./images/Bitmap25.jpg"/>
                </Masonry>

            </div>
        );
    }
}

export default PreviousHackathons;
