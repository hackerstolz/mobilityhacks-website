import React from 'react';

const ContactUsButton = React.createClass({
    render: function () {
        return <div className="sponsor-email__container">
            <a href="mailto:hackerstolz@hackerstolz.de">SEND US AN EMAIL</a>
        </div>;
    }
});

class Contact extends React.Component {
    render() {
        return (
            <div className="contact content-container">
                <div>
                    <p>
                        IF YOU HAVE ANY QUESTIONS OR SUGGESTIONS OR YOU NEED ANY FURTHER INFORMATION, FEEL FREE TO CONTACT US. SHOOT US AN QUICK EMAIL AND WE WILL GET BACK TO YOU SHORTLY.
                    </p>
                </div>
                <ContactUsButton />
            </div>
        );
    }
}

export default Contact;
