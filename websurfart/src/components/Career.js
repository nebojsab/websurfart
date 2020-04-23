import React, { Fragment, Component } from 'react'
import map from "lodash/map";
import size from 'lodash/size';
import data from "./career.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import "./Career.scss";

export default class Career extends Component {
    getItems = () => {
        const items = map(data, item => {
            return (
                <Fragment>
                    <div className="career-wrap" id={item.id}>
                        <div className="career-side">   
                            <div className="career-name">{item.name}</div>
                            <div className="career-date">{item.date}</div>
                        </div>
                        <div className="career-content">
                            <div className="career-position">{item.position}</div>
                            <div className="career-desc">{item.desc}</div>
                            {item.descii ? 
                                <div className="career-desc">{item.descii}</div>
                                : null 
                            }
                            {item.desciii ? 
                                <div className="career-desc">{item.desciii}</div>
                                : null 
                            }
                            <div className="career-info">
                                <div className="career-marker">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} /><span className="career-marker-name">{item.markerName}</span>
                                </div>
                                { item.url ? 
                                    <a href={item.url} target="_blank" className="career-url"><FontAwesomeIcon icon={faExternalLinkAlt} /> {item.url}</a> 
                                    : null 
                                }
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
            <div className="card-plh">{this.getItems()}</div>
        )
    }
}