import React, { Component } from 'react';

export default class PagesComponent extends Component {
    render() {
        return (
            <main role="main" className="col-10 pt-3 px-4">
                <div className="row justify-content-md-center">
                    <div className="col col-10 info-section">
                        <h4>Site Info</h4>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pageName"
                                    aria-describedby="siteNameHelp"
                                    placeholder="Site Name"
                                />
                                <small id="siteNameHelp" className="form-text text-muted">
                                    This is your site's URL.
                                </small>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col col-10 page-section">
                        <h4>page name</h4>
                        <form>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="pageName"
                                    aria-describedby="pageNameHelp"
                                    placeholder="Page Name"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        );
    }
}
