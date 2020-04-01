import React, { Fragment, Component } from 'react';

import "./About.scss"

export class About extends Component {
    render() {
        return (
            <Fragment>
                <div className="wsa-section">
                    <div className="wsa-section-headings">
                        <h2 className="wsa-h2">I'm Nebojsa Brnjasevic</h2>
                        <h3 className="wsa-h3">Creative Front-End Developer / Designer</h3>
                    </div>
                    <div className="wsa-section-text">
                        <p className="wsa-p1">
                            I was born in Belgrade, Serbia. For as far as i can remember, I always wanted to learn something more, something that was not offered to me in school books. So I dropped out of school at age of 16. That was a huge milestone in my life.</p>
                        <p className="wsa-p1">
                            This milestone led me to an interesting journey and to my newborn love for computers. At first it was PC engineering, then System Administration, and finally Web and Graphic Design. Now I enjoy every day in my work, and I convert my love and passion for design into beautiful Web presentations.</p>
                        <p className="wsa-p1">
                            If I can help you and or refer you to people who can meet your needs, do fell free to contact me. I would be more than happy to help out.</p>
                        <p className="wsa-p1">
                            Specialties: Web and graphic design/development, UI / UX, product design, creative directions.
                    </p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default About
