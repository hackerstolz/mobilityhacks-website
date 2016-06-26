import React from 'react';

// id=611d9dd825b3f04ff5d61928ed952399&uuid=611d9dd825b3f04ff5d61928ed952399&email=barriwaschi+1@gmail.com&affiliate=6d855ed168eb&name=&referred_count=0&position=1&activated_at=&created_at=2016-06-25T20:37:20.420Z&referred_by=


class GetYourTicket extends React.Component {
    isSuccessFromRegistration() {
        console.info(this.props.location.query);
        return this.props.location.query.id;
    }

    render() {
        if (this.isSuccessFromRegistration()) {
            return (
                <div className="get-your-ticket content-container">
                    <h1>Thank you for your registration!</h1>
                </div>
            );
        } else {
            return (
                <div className="get-your-ticket content-container">
                    Blablabla ticket

                    <form action="https://mobilityhacks.app.waitlisted.co/external/reservations" method="POST">
                        <label>Email</label>
                        <input name="reservation[email]"/>
                        <input type="submit" value="Sign Up"/>
                    </form>
                </div>
            );
        }
    }
}

export default GetYourTicket;
