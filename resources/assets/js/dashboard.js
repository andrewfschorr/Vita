import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './dashboard-base';

import '../sass/dashboard.global.scss';

if (document.getElementById('dashboardDomEl')) {
    if (_.has(dataBs, 'id')) dataBs.id = Number(dataBs.id); // TODO better way to enforce type?
    ReactDOM.render(<Dashboard {...dataBs} />, document.getElementById('dashboardDomEl'));
}
