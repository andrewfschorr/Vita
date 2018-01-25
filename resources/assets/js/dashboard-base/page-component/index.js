import React, { Component } from 'react';

export default class PagesComponent extends Component {
    render() {
        return (
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
        );
    }
}
