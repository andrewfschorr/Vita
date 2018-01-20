import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

export default class Example extends Component {
    render() {
        const hi = () => {
            console.log('!');
        };

        hi();
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Example Component
                            </div>
                            {/* <div styleName='a'>hello</div> */}
                            <div className="a">hello!!!</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('exampleDomEl')) {
    ReactDOM.render(<Example />, document.getElementById('exampleDomEl'));
}
