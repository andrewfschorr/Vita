import PropTypes from 'prop-types';
import React, { Component } from 'react';
import BootstrapAlert from 'components/bootstrap-alert';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import style from './index.scss';

export default class PagesComponent extends Component {
    constructor(props) {
        super(props);
        this.toggleModal = this.toggleModal.bind(this);
        this.deletePage = this.deletePage.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        pageName: this.props.pageName,
        id: this.props.id,
        updatedPageName: null,
        alertStatus: null,
        showModal: false,
    };

    toggleModal(e) {
        e.preventDefault();
        this.setState({
            showModal: !this.state.showModal,
        });
    }

    handleChange(e) {
        this.setState({ pageName: e.target.value });
    }

    removeAlert() {
        this.setState({ alertStatus: null });
    }

    deletePage(e) {
        e.preventDefault();
        axios
            .delete(`/page/${this.state.id}`)
            .then(resp => {
                window.location = '/dashboard/home';
            })
            .catch(err => {
                console.log(err);
            });
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
            .put(
                '/page',
                {
                    pageName: this.state.pageName,
                    id: this.state.id,
                },
                {
                    withCredentials: true,
                },
            )
            .then(resp => {
                this.setState({ alertStatus: 'success', updatedPageName: resp.data.pageName });
                this.props.updatePagesList({
                    id: this.state.id,
                    name: this.state.updatedPageName,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col col-10 page-section">
                    <h4>page name</h4>
                    <form>
                        <div className="form-group">
                            <input
                                value={this.state.pageName}
                                onChange={e => this.handleChange(e)}
                                type="text"
                                className="form-control"
                                id="pageName"
                                aria-describedby="pageNameHelp"
                                placeholder="Page Name"
                            />
                        </div>

                        {this.state.alertStatus === 'success' ? (
                            <BootstrapAlert
                                message={`Your page is now named ${this.state.updatedPageName}.`}
                                type="success"
                                clickHandler={() => this.removeAlert()}
                            />
                        ) : null}
                        <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.handleSubmit}>
                            Save
                        </button>
                        <button
                            type="submit"
                            className="btn btn-danger float-right"
                            onClick={this.toggleModal}>
                            Delete Page
                        </button>
                    </form>
                </div>
                <div>
                    <Modal isOpen={this.state.showModal} toggle={this.toggle}>
                        <ModalBody>
                            Are you sure you want to delete <strong>{this.state.pageName}</strong>? This cannot be
                            undone.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.deletePage}>
                                Delete
                            </Button>{' '}
                            <Button color="secondary" onClick={this.toggleModal}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

PagesComponent.propTypes = {
    id: PropTypes.number,
    pageName: PropTypes.string,
};
