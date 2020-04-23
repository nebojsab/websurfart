import React, { Fragment, Component } from 'react';
import data from "./skills.json";
import map from "lodash/map";
import size from 'lodash/size';

import "./Skills.scss"

export default class CodingSkills extends Component {
    getSkillItems = () => {
        const items = map(data, item => {
            return (
                <Fragment>
                    <div id={item.id}>
                        <div className="skill-name">{item.name}</div>
                        <div className="progress-holder">
                            <div className={`progress-bar progress-bar-${item.percentage}`}>
                            <div className={`progress-tooltip progress-tooltip-${item.percentage}`}>{item.percentage}%</div>
                            </div>
                        </div>
                    </div>
                </Fragment>
            )
        });

        if (size(items) !== 0) {
            return <Fragment>{items}</Fragment>
        } else {
            return null;
        }
    }

    render() {
        return (
            <Fragment>
                <h1 className="wsa-h2">Skills</h1>
                <div className="skill-plh">{this.getSkillItems()}</div>
            </Fragment>
        )
    }
}
