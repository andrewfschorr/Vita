import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import s from './index.scss';

export default class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Example Component!</div>
                            {/* <div styleName='a'>hello</div> */}
                            <div styleName="a">hello!!!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('welcomeCpt')) {
    ReactDOM.render(<Welcome />, document.getElementById('welcomeCpt'));
}
