import React from 'react';
import SensUsAMailButton from '../../layout/Buttons'
require('./main.styl');

class Contact extends React.Component {
    render() {
        return (
            <div className="contact content-container">
                <div className="contact__container">
                    <p className="contact__text">IF YOU HAVE ANY QUESTIONS
                        OR SUGGESTIONS OR YOU NEED ANY FURTHER INFORMATION, FEEL FREE TO CONTACT US. SHOOT US AN QUICK EMAIL AND WE
                        WILL GET BACK TO YOU SHORTLY.
                    </p>

                    <SensUsAMailButton />
                </div>
            </div>
        );
    }
}

export default Contact;
