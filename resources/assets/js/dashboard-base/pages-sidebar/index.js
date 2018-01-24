import React, { Component } from 'react';

export default class PagesSidebar extends Component {
    render() {
        return (
            <nav className="col-2 sidebar">
                <div className="side-nav">
                    <h5>Pages</h5>
                    <ul>
                        <li>
                            <a href="#">
                                <img
                                  src="/icons/star.svg"
                                  alt="document"
                                  className="icon"
                                />
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                  src="icons/document.svg"
                                  alt="document"
                                  className="icon"
                                />
                                Page One
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img
                                  src="icons/document.svg"
                                  alt="document"
                                  className="icon"
                                />
                                Two three And Four five siz seven 8 nine ten
                                eleve
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <a href="/add-page">+ Add new page</a>
                </div>
            </nav>
        );
    }
}
