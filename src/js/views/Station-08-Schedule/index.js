import React from 'react';

require('./main.styl');

const fridayItems = [
    ['19:30', 'Get Together'],
    ['20:00', 'Teambuilding and Ideation'],
    ['', 'Moderation Michael Metzger <a href="http://www.michaelmetzger.de" target="_blank">www.michaelmetzger.de</a>']

];

const saturdayItems = [
    ['08:30', 'Registration and Snacks'],
    ['10:00', 'Kick Off and Challenge Presentations'],
    ['11:00', 'Various Workshops'],
    ['11:30', 'Start Hacking!'],
    ['13:00', 'Yummy Lunch'],
    ['19:00', 'Dinner'],
    ['22:00', 'Mario Kart Championship'],
    ['24:00', 'Late Night Snack']
];

const sundayItems = [
    ['08:30', 'Breakfast'],
    ['09:00', 'Coding Finale'],
    ['12:00', 'DEADLINE and Lunch'],
    ['13:00', 'Pitches'],
    ['15:00', 'Craft Beer Testing'],
    ['16:00', 'Prize Ceremony']
];


class Schedule extends React.Component {

    scheduleItem(time, text, key) {
        return (
            <div key={key} className="schedule-item">
                <span className="schedule-item__time">{time}</span><br/>
                <span className="schedule-item__text" dangerouslySetInnerHTML={{__html: text}}></span>
            </div>
        )
    }

    scheduleItems(items) {
        return items.map((data, i) => this.scheduleItem(data[0], data[1], i))
    }

    render() {
        return (
            <div id="schedule" className="content-container schedule">
                <div className="textbox">
                    <h1>Schedule</h1>
                </div>
                <div className="schedule-container">
                    <div className="schedule-column">
                        <h4>FRIDAY<br/>02.12.2016</h4>
                        {this.scheduleItems(fridayItems)}
                    </div>
                    <div className="schedule-column">
                        <h4>SATURDAY<br/>03.12.2016</h4>
                        {this.scheduleItems(saturdayItems)}
                    </div>
                    <div className="schedule-column">
                        <h4>SUNDAY<br/>04.12.2016</h4>
                        {this.scheduleItems(sundayItems)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Schedule;
