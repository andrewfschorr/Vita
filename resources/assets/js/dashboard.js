import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard-base';

import '../sass/dashboard.global.scss';

if (document.getElementById('dashboardDomEl')) {
    ReactDOM.render(<Dashboard {...dataBs} />, document.getElementById('dashboardDomEl'));
}
