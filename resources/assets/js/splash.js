import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../sass/splash.global.scss';

export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            succesfulSubmit: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const isValidEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            this.state.value.trim(),
        );
        if (this.state.value.trim() === '' || !isValidEmail) return;

        axios
            .post(
                '/subscribe-splash',
                {
                    email: this.state.value,
                },
                {
                    withCredentials: true,
                },
            )
            .then(response => {
                if (response.status === 200) {
                    this.setState({ succesfulSubmit: true });
                } else {
                    this.setState({ succesfulSubmit: 'error' });
                }
            })
            .catch(error => {
                if (error.response.status === 500) {
                    this.setState({ succesfulSubmit: 'error' });
                } else {
                    this.setState({ succesfulSubmit: 'duplicate' });
                }
                console.log(error);
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-8 t-right">
                        <h3>You need a web site</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 offset-md-2 t-right">
                        <h2 className="bold">Custom website templates for your business</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-8">
                        {!this.state.succesfulSubmit ? (
                            <div className="email-form">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="input-group mb-3">
                                        <input
                                            type="email"
                                            className="form-control email-input"
                                            placeholder="Email"
                                            aria-label="Email"
                                            value={this.state.value}
                                            onChange={this.handleChange}
                                        />
                                        <div className="input-group-append">
                                            <input
                                                className="btn btn-outline-secondary btn-submit"
                                                type="submit"
                                                value="Submit"
                                            />
                                        </div>
                                    </div>
                                </form>
                                <div className="sub">
                                    <small id="" className="sub-text">
                                        Sign up for updates when we launch!
                                    </small>
                                </div>
                            </div>
                        ) : typeof this.state.succesfulSubmit === 'string' ? (
                            <div className="alert alert-danger" role="alert">
                                <strong>Uh oh...</strong>{' '}
                                {this.state.succesfulSubmit === 'duplicate'
                                    ? 'You may already be subscribed.'
                                    : 'There was an erorr processing your request.'}{' '}
                                😬
                            </div>
                        ) : (
                            <div className="alert alert-success" role="alert">
                                <strong>Awesome! 🎉</strong> Keep an eye out in your inbox.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('splashCpt')) {
    ReactDOM.render(<Welcome />, document.getElementById('splashCpt'));
}
