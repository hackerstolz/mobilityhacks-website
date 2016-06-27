import React from 'react';
import Tile from './Tile';

require('./main.styl');

class PreviousHackathons extends React.Component {
    render() {
        return (
            <div className="previous-hackathons content-container">
                <Tile className="tile--two-times">
                    <p>
                        {'Hey ho. this was our previous ' +
                        'hackathon food{hacks}. Great ' +
                        'participants, fantastic products, ' +
                        'amazing atmosphere & lecker ' +
                        'food. it was a f.ing success.'}
                    </p>
                </Tile>
                <Tile imageSrc="./images/Bitmap01.jpg"/>
                <Tile imageSrc="./images/Bitmap02.jpg"/>
                <Tile imageSrc="./images/Bitmap03.jpg"/>
                <Tile imageSrc="./images/Bitmap04.jpg"/>
                <Tile imageSrc="./images/Bitmap05.jpg"/>
                <Tile imageSrc="./images/Bitmap06.jpg"/>
                <Tile imageSrc="./images/Bitmap07.jpg"/>
                <Tile imageSrc="./images/Bitmap08.jpg"/>
                <Tile >
                    <p>
                        { 'A lot of happy ' +
                        'winners and ' +
                        'beautifull and ' +
                        'handmade ' +
                        'banana-trophies' }
                    </p>
                </Tile>
                <Tile imageSrc="./images/Bitmap09.jpg"/>
                <Tile imageSrc="./images/Bitmap10.jpg"/>
                <Tile imageSrc="./images/Bitmap11.jpg"/>
                <Tile imageSrc="./images/Bitmap12.jpg"/>
                <Tile>
                    <p>
                        { 'OH MY LORD. ' +
                        'Look at this ' +
                        'super super ' +
                        'lecker and ' +
                        'delicious food. ' }
                    </p>
                </Tile>
                <Tile imageSrc="./images/Bitmap13.jpg"/>
                <Tile imageSrc="./images/Bitmap14.jpg"/>
                <Tile imageSrc="./images/Bitmap15.jpg"/>
                <Tile imageSrc="./images/Bitmap16.jpg"/>
                <Tile imageSrc="./images/Bitmap17.jpg"/>
                <Tile imageSrc="./images/Bitmap18.jpg"/>
                <Tile imageSrc="./images/Bitmap19.jpg"/>
                <Tile imageSrc="./images/Bitmap20.jpg"/>
                <Tile imageSrc="./images/Bitmap21.jpg"/>
                <Tile>
                    <p>
                        { 'When your laptop keeps making jokes...' }
                    </p>
                    <a href="www.food-hacks.de">www.food-hacks.de</a>
                </Tile>
                <Tile imageSrc="./images/Bitmap22.jpg"/>
                <Tile imageSrc="./images/Bitmap23.jpg"/>
                <Tile imageSrc="./images/Bitmap24.jpg"/>
                <Tile imageSrc="./images/Bitmap25.jpg"/>
            </div>
        );
    }
}

export default PreviousHackathons;
