import React, { Component } from 'react';
import PagesSidebar from './pages-sidebar';
import PagesComponent from './page-component';

import './index.scss';

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: null
        };
    }
    componentWillMount() {
        this.getUserPages();
    }

    getUserPages() {
        fetch('/user/pages', {
            credentials: 'same-origin'
        })
            .then(resp => resp.json())
            .then(pages => {
                this.setState('pages', pages);
            })
            .catch(() => {});
    }

    render() {
        return (
            <div className="row">
                <PagesSidebar pages={this.state.pages} />
                <PagesComponent />
            </div>
        );
    }
}
