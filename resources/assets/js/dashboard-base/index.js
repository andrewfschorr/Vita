import React, { Component } from 'react';
import PagesSidebar from './pages-sidebar';
import PagesComponent from './page-component';

import './index.scss';

export default class Dashboard extends Component {
    componentWillMount() {
        console.log(this);
        this.getUserPages();
    }

    componentDidMount() {
        console.log(this);
    }

    getUserPages() {
        fetch('/user/pages', {
            credentials: 'same-origin'
        })
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                console.log(data);
                this.setState('foo', 'bar');
            })
            .catch(() => {});
    }

    render() {
        return (
            <div className="row">
                <PagesSidebar />
                <PagesComponent />
            </div>
        );
    }
}
