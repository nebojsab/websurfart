import React, { Component } from 'react'
import PropTypes from "prop-types";
import About from "./About";

import "./section.scss";

export class SectionContent extends Component {
    static propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        bcg: PropTypes.string,
        pageName: PropTypes.string,
    };

    // constructor(props) {
    //     super(props);
    //     this.state = this.getInitialState();
    // }

    // getInitialState = () => ({
    //     name: '',
    // });

    handleContent() {
        const { pageName } = this.props;

        if (pageName === 'about') {
            return <About />
        } else if (pageName === 'work') {
            return <About />
        } else if (pageName === 'experience') {
            return <About />
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
                    <h1 className="wsa-section-title">{title}</h1>
                    {this.handleContent()}
                </div>
            </div>
        )
    }
}

export default SectionContent
