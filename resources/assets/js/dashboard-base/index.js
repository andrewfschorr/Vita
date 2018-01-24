import React, { Component } from 'react';
import PagesSidebar from './pages-sidebar';
import PagesComponent from './page-component';

import './index.scss';

export default class Dashboard extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="row">
                <PagesSidebar />
                <PagesComponent />
            </div>
        );
    }
}
