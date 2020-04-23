import React, { Fragment, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import {
    faSkype,
    faInstagram,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import "./Contact.scss"

export default class Contact extends Component {
    render() {
        return (
            <Fragment>
                <p className="wsa-p1">
                    If I can help you and or refer you to people who can meet your needs, do fell free to contact me. I would be more than happy to help out.
                </p>
                <hr className="line" />
                <div className="contacts-plh">
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faSkype} />
                        <a href="skype:nebojsa.brnjasevic?chat" target="_blank">nebojsa.brnjasevic</a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faInstagram} />
                        <a href="https://www.instagram.com/nebojsa_brnjasevic" target="_blank">https://www.instagram.com/nebojsa_brnjasevic</a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <a href="https://www.linkedin.com/in/nebojsabrnjasevic/" target="_blank">https://www.linkedin.com/in/nebojsabrnjasevic</a>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faAt} />
                        <a href="mailto:nebojsa.brnjasevic@gmail.com">nebojsa.brnjasevic@gmail.com</a>
                    </div>
                </div>
                <hr className="line" />
                <small>Copyright © by Nebojsa Brnjasevic - {new Date().getFullYear()}</small>
            </Fragment>
        )
    }
}
