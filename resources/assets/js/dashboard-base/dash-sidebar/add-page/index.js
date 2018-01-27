import React, { Component } from 'react';
import style from './index.scss';

export default class AddPage extends Component {
    state = {
        addPageOpen: false,
        newPageName: '',
    };

    toggleAddField(e) {
        e.preventDefault();
        this.setState({ addPageOpen: !this.state.addPageOpen });
    }

    addPage(e) {
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
                console.log(error);
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
                            <a
                                href="/"
                                className="btn btn-primary btn-sm"
                                onClick={e => this.addPage(e)}>
                                Add
                            </a>
                            <a
                                href="/"
                                styleName="rightAlign"
                                className="btn btn-danger btn-sm"
                                onClick={() => this.setState({ addPageOpen: false })}>
                                Cancel
                            </a>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
