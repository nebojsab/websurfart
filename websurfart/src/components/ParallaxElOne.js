import React, { Component } from 'react'
import Plx from "react-plx"



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
                start: height,
                duration: 800,
                properties: [
                    {
                        startValue: 0,
                        endValue: 90,
                        property: "rotate"
                    },
                    {
                        startValue: 1,
                        endValue: 1.5,
                        property: "scale"
                    },
                    {
                        startValue: 0,
                        endValue: 0.5,
                        property: "opacity"
                    },
                    {
                        startValue: -200,
                        endValue: 200,
                        property: "translateX"
                    },
                    {
                        startValue: -200,
                        endValue: 200,
                        property: "translateY"
                    }
                ]
            },
            {
                start: '.section3',
                duration: 300,
                properties: [
                    {
                        startValue: "#3cb99c",
                        endValue: "rgba(50,50,200,0.8)",
                        property: "backgroundColor"
                    },
                    {
                        startValue: 0,
                        endValue: 100,
                        property: "translateY"
                    },
                    {
                        startValue: 0.75,
                        endValue: 1,
                        property: "opacity"
                    }
                ]
            },
            {
                start: ".section4",
                duration: 1000,
                properties: [
                    {
                        startValue: 100,
                        endValue: 0,
                        property: "translateY"
                    },
                    {
                        startValue: 1.5,
                        endValue: 2,
                        property: "scale"
                    },
                    {
                        startValue: 180,
                        endValue: 0,
                        property: "rotate"
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
        
        const styles = {
            width: 100,
            height: 100,
            lineHeight: "100px",
            textAlign: "center",
            borderTopLeftRadius: 100,
            borderTopRightRadius: 30,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 100,
            backgroundColor: "#34ba9c",
            color: "#fff",
            left: "50%",
            marginLeft: -50,
            top: 100,
            position: "fixed",
            fontFamily: "Helvetica, Arial, sans-serif",
            opacity: 0,
        };

        return (
            <div>
                <div
                    className="hero-mock"
                    id="hero-mock"
                    style={style}
                    ref={(divElement) => { this.divElement = divElement }}
                >
                </div>
                <Plx parallaxData={exampleParallaxData} style={styles}>
                </Plx>
            </div>
        )
    }
}


export default ParallaxElOne