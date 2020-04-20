import React, { Component } from 'react'
import PropTypes from "prop-types";
import About from "./About";
import MyWork from "./MyWork";
import Skills from "./Skills";

import "./section.scss";

export class SectionContent extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        bcg: PropTypes.string,
        pageName: PropTypes.string,
    };

    handleContent() {
        const { pageName } = this.props;

        if (pageName === 'about') {
            return <About />
        } else if (pageName === 'my-work') {
            return <MyWork />
        } else if (pageName === 'skills') {
            return <Skills />
        } else if (pageName === 'contact') {
            return <About />
        } else if (pageName === 'work') {
            return <About />
        } else {
            return
        }
        // return <About />
    }

    render() {
        const { id } = this.props;
        const { title } = this.props;
        const { bcg } = this.props;
        const { pageName } = this.props;

        return (
            <div className={`section ${bcg === 'green' ? 'is-green' : ''} ${bcg === 'blue' ? 'is-blue' : ''} ${bcg === 'gray' ? 'is-gray' : ''} ${bcg === 'black' ? 'is-black' : ''} ${bcg === 'turquoise' ? 'is-turquoise' : ''}`}>
                <div className={`section-content ${id}`} id={id} pageName={pageName}>
                    {title ? <h1 className="wsa-section-title">{title}</h1> : null}
                    {this.handleContent()}
                </div>
            </div>
        )
    }
}

export default SectionContent
