import React, { Fragment, Component } from 'react';

import "./About.scss"

class About extends Component {
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
                        I am a Front-End Developer/Designer located in Belgrade, Serbia. I am a senior programmer/designer with great knowledge about designs, UI/UX patterns.
                        </p>
                        <p className="wsa-p1">
                        I love working on projects within a team, I found that a great place to learn. I enjoy every day in my work, and I convert my love and passion for design into beautiful Web presentations.</p>
                        <p className="wsa-p1">
                        If I can help you and or refer you to people who can meet your needs, do fell free to contact me. I would be more than happy to help out.
                        </p>
                        <p className="wsa-p1">
                        Below is some of my work...
                    </p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default About
