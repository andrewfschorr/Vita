import React, { Component } from 'react';
import BootstrapAlert from 'components/bootstrap-alert';

export default class PagesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.siteName ? this.props.siteName : '',
            alertType: null,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const urlSafeName = event.target.value.replace(/[^\w-]+/g, '-').toLowerCase();
        this.setState({ value: urlSafeName });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value.trim() === '') return;
        axios
            .post(
                '/user/site-name',
                {
                    siteName: this.state.value,
                },
                {
                    withCredentials: true,
                },
            )
            .then(response => {
                this.setState({
                    alertMessage: `Your site has been named ${_.get(response, 'data.siteName')}`,
                    alertType: 'success',
                });
            })
            .catch(error => {
                this.setState({
                    alertType: 'danger',
                });
                if (error.response.status === 409) {
                    this.setState({
                        alertMessage: 'Oops, sorry, that site name has been taken.',
                    });
                } else {
                    this.setState({
                        alertMessage: 'Uh oh, something went wrong, out engineers have been alerted.'
                    });
                }
            });
    }

    removeAlert() {
        this.setState({ alertType: null });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col col-10 info-section">
                    <h4>Site Info</h4>
                    <form>
                        <div className="form-group">
                            <input
                                value={this.state.value}
                                onChange={this.handleChange}
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
                        {this.state.alertType !== null ? (
                            <BootstrapAlert
                                message={this.state.alertMessage}
                                type={this.state.alertType}
                                clickHandler={() => this.removeAlert()}
                            />
                        ) : null}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.handleSubmit}>
                            Save
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
