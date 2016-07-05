import React from 'react';

require('./main.styl');
// id=611d9dd825b3f04ff5d61928ed952399&uuid=611d9dd825b3f04ff5d61928ed952399&email=barriwaschi+1@gmail.com&affiliate=6d855ed168eb&name=&referred_count=0&position=1&activated_at=&created_at=2016-06-25T20:37:20.420Z&referred_by=

class RegistrationSuccess extends React.Component {
    render() {

    }
}

class GetYourTicket extends React.Component {
    isSuccessFromRegistration() {
        console.info("isSuccessFromRegistration: " + this.getParameterByName("email"));
        return this.getParameterByName("email");
    }

    getParameterByName(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) {
            return null;
        }
        if (!results[2]) {
            return '';
        }
        return decodeURIComponent(results[2]);
    }

    render() {
        if (this.isSuccessFromRegistration()) {
            return (
                <div className="get-your-ticket get-your-ticket--success content-container">
                    <h1>Thank you for your registration!</h1>

                    <p className="success__text">We will send you a mail when the registration is open to <br /><span
                        className="other-font">{ this.getParameterByName("email") }</span></p>
                </div>
            );
        } else {
            return (
                <div className="get-your-ticket content-container">
                    <div className="middle-container">
                        <div className="inner-container">
                            <h1>You want to participate<span className="other-font">?</span></h1>

                            <h2>Stay tuned and sign up!</h2>

                            <br />

                            <form action="https://mobilityhacks.app.waitlisted.co/external/reservations" method="POST">
                                <input className="email-input" name="reservation[email]" placeholder="Your E-Mail"/>
                                <br />
                                <input type="submit" value="Sign Up"/>
                            </form>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default GetYourTicket;
