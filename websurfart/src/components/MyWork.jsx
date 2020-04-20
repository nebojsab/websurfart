import React, { Fragment, Component } from 'react';
import map from "lodash/map";
import size from 'lodash/size';
import data from "./works.json";

import "./MyWork.scss"

export default class MyWork extends Component {

    getItems = () => {
        const items = map(data, item => {
            return (
                <Fragment>
                    <div className="card--wrapp">
                        <div className="card__aside">
                            <img src={item.src} alt="Dummy Image" className="card__image" />
                        </div>
                        <article className={`card${item.overlay === 'green' ? ' is-green' : ''}${item.overlay === 'blue' ? ' is-blue' : ''}${item.overlay === 'yellow' ? ' is-yellow' : ''}${item.overlay === 'orange' ? ' is-orange' : ''}${item.overlay === 'black' ? ' is-black' : ''}${item.overlay === 'red' ? ' is-red' : ''}`}
                            id={item.id}>
                            <header className="card__header">
                                <h2 className="card__title">{item.title}</h2>
                                <h3 className="card__subtitle">{item.subTitle}</h3>
                            </header>
                            <div className="card__body">
                                <p className="card__copy">{item.description}</p>
                            </div>
                            <footer className="card__footer">
                                <div className="card__actions">
                                    {item.url ?
                                        <a href={item.url} target="_blank" className="button button--site">
                                            Visit Website
                                </a>
                                        : null
                                    }
                                </div>
                            </footer>
                        </article>
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
