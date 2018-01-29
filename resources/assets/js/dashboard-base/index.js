import PropTypes from 'prop-types';
import React, { Component } from 'react';
import DashSidebar from './dash-sidebar';
import PagesComponent from './page-component';
import SiteInfoComponent from './site-info-component';

import './index.scss';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.updatedPagesList = this.updatedPagesList.bind(this);
    }
    state = {
        pages: null,
    };

    componentWillMount() {
        this.getUserPages();
    }

    getUserPages() {
        fetch('/user/pages', {
            credentials: 'same-origin',
        })
            .then(resp => resp.json())
            .then(pages => {
                this.setState({ pages });
            })
            .catch(() => {});
    }

    updatedPagesList(payload) {
        const updatedPageList = this.state.pages.map(page => {
            if (page.id === payload.id) {
                page.name = payload.name;
            }
            return page;
        });
        this.setState({ pages: updatedPageList });
    }

    render() {
        let mainComponent;
        if (_.has(this.props, 'siteName')) {
            mainComponent = <SiteInfoComponent siteName={this.props.siteName} />;
        } else if (_.has(this.props, 'page')) {
            mainComponent = (
                <PagesComponent
                    updatePagesList={this.updatedPagesList}
                    pageName={this.props.page}
                    id={this.props.id}
                />
            );
        } else {
            mainComponent = null;
        }
        return (
            <div className="row">
                <DashSidebar pages={this.state.pages} />
                <main role="main" className="col-10 pt-3 px-4">
                    {mainComponent}
                </main>
            </div>
        );
    }
}

// Dashboard.defaultProps = {
//     id: 0,
//     siteName: '',
// };

// Dashboard.propTypes = {
//     id: PropTypes.number,
//     siteName: PropTypes.string,
// };
