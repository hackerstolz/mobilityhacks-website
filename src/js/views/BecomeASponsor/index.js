import React from 'react';
require('./main.styl');


class BecomeASponsor extends React.Component {
    render() {
        return (
            <div className="become-a-sponsor content-container">
                <div className="sponsor-paragraph__container">
                    <p className="sponsor-paragraph__title">3 REASONS WHY YOU SHOULD BECOME A SPONSOR FOR THE MOBILITY HACKS.</p>

                    <p className="sponsor-paragraph__text">LISTEN UP.</p>
                </div>

                <div className="sponsor-paragraph__container">
                    <p className="sponsor-paragraph__title">WE KNOW HOW TO HANDLE THIS.</p>

                    <p className="sponsor-paragraph__text">WE ARE HACKERS OURSELVES AND HAVE GREAT EXPERIENCE IN ORGANIZING HACKATHONS. OUR SPONSORS ARE
                        SELECTED PARTNERS AND WILL BE DIRECTLY CONNECTED TO THE TOP UPCOMING TECH SCENE.</p>
                </div>

                <div className="sponsor-paragraph__container">
                    <p className="sponsor-paragraph__title">WE ARE PURELY PASSION DRIVEN.</p>

                    <p className="sponsor-paragraph__text">WE DO THIS BECAUSE WE LOVE OUR COMMUNITY AND WANT TO PROVIDE GREAT EXPERIENCES. WE WANT TO EMPOWER
                        PEOPLE COMING TOGETHER: WE WANT TO GET SH.T DONE.</p>
                </div>

                <div className="sponsor-paragraph__container">
                    <p className="sponsor-paragraph__title">YOU GET BRAND VALUE, IT PROFESSIONALS AND EARLY ADAPTORS</p>

                    <p className="sponsor-paragraph__text">NO TECH EVENT WILL ADD MORE VALUE TO YOUR BRAND. YOU WILL FIND NO BETTER RECRUITMENT OPTIONS FOR YOUR
                        COMPANY. YOU WILL FIND NO BETTER TESTERS AND FEEDBACK FOR YOUR API OR OPEN SOFTWARE INTERFACE. AND ALL WE WANT IS TO BUY FOOD TO FEED
                        OUR PARTICIPANTS AND PAY THE LOCATION RENT.</p>
                </div>

                <div className="sponsor-paragraph__container">
                    <p className="sponsor-paragraph__title">PREVIOUS HACKERSTOLZ SPONSORS</p>
                </div>

                <div className="sponsor--centered">
                    <div className="sponsor-image-cloud__container">
                        <img className="sponsor-image-cloud__image" src={ require('./sponsors_cloud.png') }/>
                    </div>

                    <br />
                    <br />

                    <a href="mailto:hello@mobility-hacks.de">SEND US AN EMAIL</a>
                </div>
            </div>
        );
    }
}

export default BecomeASponsor;
