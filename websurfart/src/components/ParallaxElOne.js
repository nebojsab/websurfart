import React, { Component } from 'react'
import Plx from "react-plx"
import prlx_one from "../images/prlx_one_animated.svg"


const style = {
    width: '100%',
    height: '100vh',
    position: 'absolute',
};

export class ParallaxElOne extends Component {
    constructor(props) {
        super(props)

        this.state = {
            height: 0
        }
    }

    componentDidMount() {
        const height = this.divElement.clientHeight;
        this.setState({ height });
        console.log(height);
    }

    render() {
        const { height } = this.state;

        const exampleParallaxData = [
            {
                start: height - 300,
                duration: 1500,
                properties: [
                    {
                        startValue: 0,
                        endValue: 125,
                        property: "rotate"
                    },
                    {
                        startValue: 0.5,
                        endValue: 1.5,
                        property: "scale"
                    },
                    {
                        startValue: 0.15,
                        endValue: 0.75,
                        property: "opacity"
                    },
                    {
                        startValue: 0,
                        endValue: 500,
                        property: "translateY"
                    }
                ]
            },
            {
                start: '.section3',
                duration: 900,
                properties: [
                    {
                        startValue: 125,
                        endValue: 360,
                        property: "rotate"
                    }
                ]
            },
            {
                start: ".section4",
                duration: 1000,
                properties: [
                    {
                        startValue: 360,
                        endValue: 360,
                        property: "rotate"
                    },
                    {
                        startValue: 500,
                        endValue: 1000,
                        property: "translateY"
                    },
                    {
                        startValue: 1.5,
                        endValue: 4,
                        property: "scale"
                    },
                    // Blur is not performant
                    // Used just as an example for CSS filters
                    {
                        startValue: 0,
                        endValue: 2,
                        property: "blur"
                    }
                ]
            }
        ];

        return (
            <div>
                <div
                    className="hero-mock"
                    id="hero-mock"
                    style={style}
                    ref={(divElement) => { this.divElement = divElement }}
                >
                </div>
                {/*<Plx parallaxData={exampleParallaxData} className="prlx_one">
        </Plx>*/}
            </div>
        )
    }
}


export default ParallaxElOne