import React, { Component } from 'react';
import AddPage from './add-page';

export default class PagesSidebar extends Component {
    render() {
        const hasLoadedPages = !(this.props.pages instanceof Array);
        return (
            <nav className="col-2 sidebar">
                <div className="side-nav">
                    <h5>Account</h5>
                    <ul>
                        <li>
                            <a href="/dashboard/home">
                                <img src="/icons/home.svg" alt="home" className="icon" />
                                <span>Site Info</span>
                            </a>
                        </li>
                    </ul>
                    <h5>Pages</h5>
                    {hasLoadedPages ? null : (
                        <ul>
                            {this.props.pages.map(page => (
                                <li key={page.id}>
                                    <a href={`/dashboard/page/${page.id}`}>
                                        <img
                                            src="/icons/document.svg"
                                            alt="document"
                                            className="icon"
                                        />
                                        <span>{page.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                    <hr />
                    <AddPage />
                </div>
            </nav>
        );
    }
}
