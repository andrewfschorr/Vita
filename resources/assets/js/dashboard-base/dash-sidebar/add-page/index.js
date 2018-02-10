import React, { Component } from 'react';
import BootstrapAlert from 'components/bootstrap-alert';

import style from './index.scss';

export default class AddPage extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        addPageOpen: false,
        newPageName: '',
        alertType: null,
    };

    toggleAddField(e) {
        e.preventDefault();
        this.setState({ addPageOpen: !this.state.addPageOpen });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
            .post(
                '/page',
                {
                    pageName: this.state.newPageName,
                },
                {
                    withCredentials: true,
                },
            )
            .then(response => {
                window.location = `/dashboard/page/${response.data.page}`;
            })
            .catch(error => {
                if (error.response.status === 409) {
                    this.setState({
                        alertMessage: 'Sorry, you already have a page by that name',
                        alertType: 'danger',
                    })
                }
            });
    }

    handleChange(e) {
        this.setState({ newPageName: e.target.value });
    }

    render() {
        return (
            <div>
                {!this.state.addPageOpen ? (
                    <a href="#" onClick={e => this.toggleAddField(e)}>
                        + Add new page
                    </a>
                ) : (
                    <div>
                        <form>
                            <label htmlFor="pageName">
                                Add Page
                                <input
                                    onChange={e => this.handleChange(e)}
                                    type="text"
                                    className="form-control"
                                    id="pageName"
                                    aria-describedby="pageName"
                                    placeholder="Enter email"
                                    value={this.state.newPageName}
                                />
                            </label>
                            <div styleName="btnContainer">
                                <button
                                    href="/"
                                    className="btn btn-primary btn-sm"
                                    onClick={this.handleSubmit}>
                                    Add
                                </button>
                                <button
                                    href="/"
                                    styleName="rightAlign"
                                    className="btn btn-danger btn-sm"
                                    onClick={() => this.setState({ addPageOpen: false })}>
                                    Cancel
                                </button>
                            </div>
                            {this.state.alertType !== null ? (
                                <BootstrapAlert
                                    message={this.state.alertMessage}
                                    type={this.state.alertType}
                                    clickHandler={() => this.removeAlert()}
                                />
                            ) : null}
                        </form>
                    </div>
                )}
            </div>
        );
    }
}
