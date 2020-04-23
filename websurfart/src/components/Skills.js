import React, { Fragment, Component } from 'react';
import ToolsSkills from "./toolsSkills";
import CodingSkills from "./codingSkills";

import "./Skills.scss"

export default class Skills extends Component {
    render() {
        return (
            <Fragment>
                <CodingSkills />
                <ToolsSkills />
            </Fragment>
        )
    }
}
