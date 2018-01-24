import React, { Component } from 'react';

export default class PagesSidebar extends Component {
    // componentWillReceiveProps(nextProps) {
    //     console.log(nextProps);
    // }

    render() {
        const hasLoadedPages = !(this.props.pages instanceof Array);
        return (
            <nav className="col-2 sidebar">
                <div className="side-nav">
                    <h5>Pages</h5>
                    {hasLoadedPages ? (
                        <p>Loading</p>
                    ) : (
                        <ul>
                            {this.props.pages.map(page => (
                                <li key={page.id}>
                                    <a href={`/dashboard/${page.url}`}>
                                        <img
                                            src="/icons/document.svg"
                                            alt="document"
                                            className="icon"
                                        />
                                        {page.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                    <hr />
                    <a href="/add-page">+ Add new page</a>
                </div>
            </nav>
        );
    }
}
