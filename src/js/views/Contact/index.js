import React from 'react';
import SensUsAMailButton from '../../layout/Buttons'
require('./main.styl');

class Contact extends React.Component {
    render() {
        return (
            <div className="contact content-container">
                <div className="contact__impressum">
                    <a className="impressum__link" href="http://www.hackerstolz.de/de/impressum/">Impressum</a>
                </div>
                <div className="outer-container">

                    <div className="middle-container">
                        <div className="inner-container">
                            <p className="contact__text">IF YOU HAVE ANY QUESTIONS
                                OR SUGGESTIONS OR YOU NEED ANY FURTHER INFORMATION, FEEL FREE TO CONTACT US. SHOOT US AN QUICK EMAIL AND WE
                                WILL GET BACK TO YOU SHORTLY.
                            </p>

                            <SensUsAMailButton />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
