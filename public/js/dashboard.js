webpackJsonp([2],{

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(_ref) {
    var message = _ref.message,
        _ref$type = _ref.type,
        type = _ref$type === undefined ? 'success' : _ref$type,
        clickHandler = _ref.clickHandler;
    return _react2.default.createElement(
        'div',
        { className: 'alert alert-' + type + ' alert-dismissible fade show', role: 'alert' },
        _react2.default.createElement(
            'button',
            {
                onClick: clickHandler,
                type: 'button',
                className: 'close',
                'data-dismiss': 'alert',
                'aria-label': 'Close' },
            _react2.default.createElement(
                'span',
                { 'aria-hidden': 'true' },
                '\xD7'
            )
        ),
        _react2.default.createElement(
            'strong',
            null,
            type === 'success' ? _react2.default.createElement(
                'span',
                null,
                'Congrats! \uD83C\uDF89'
            ) : _react2.default.createElement(
                'span',
                null,
                'Uh-oh...\uD83D\uDE31'
            )
        ),
        '\xA0',
        message
    );
};

// TODO figure this ish out
Alert.propTypes = {};
Alert.defaultProps = {};

exports.default = Alert;

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(23);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dashboardBase = __webpack_require__(222);

var _dashboardBase2 = _interopRequireDefault(_dashboardBase);

__webpack_require__(229);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (document.getElementById('dashboardDomEl')) {
    if (_.has(dataBs, 'id')) dataBs.id = Number(dataBs.id); // TODO better way to enforce type?
    _reactDom2.default.render(_react2.default.createElement(_dashboardBase2.default, dataBs), document.getElementById('dashboardDomEl'));
}

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _dashSidebar = __webpack_require__(223);

var _dashSidebar2 = _interopRequireDefault(_dashSidebar);

var _pageComponent = __webpack_require__(226);

var _pageComponent2 = _interopRequireDefault(_pageComponent);

var _siteInfoComponent = __webpack_require__(227);

var _siteInfoComponent2 = _interopRequireDefault(_siteInfoComponent);

__webpack_require__(228);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_Component) {
    _inherits(Dashboard, _Component);

    function Dashboard(props) {
        _classCallCheck(this, Dashboard);

        var _this = _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));

        _this.state = {
            pages: null
        };

        _this.updatedPagesList = _this.updatedPagesList.bind(_this);
        return _this;
    }

    _createClass(Dashboard, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.getUserPages();
        }
    }, {
        key: 'getUserPages',
        value: function getUserPages() {
            var _this2 = this;

            fetch('/user/pages', {
                credentials: 'same-origin'
            }).then(function (resp) {
                return resp.json();
            }).then(function (pages) {
                _this2.setState({ pages: pages });
            }).catch(function () {});
        }
    }, {
        key: 'updatedPagesList',
        value: function updatedPagesList(payload) {
            var updatedPageList = this.state.pages.map(function (page) {
                if (page.id === payload.id) {
                    page.name = payload.name;
                }
                return page;
            });
            this.setState({ pages: updatedPageList });
        }
    }, {
        key: 'render',
        value: function render() {
            var mainComponent = void 0;
            if (_.has(this.props, 'siteName')) {
                mainComponent = _react2.default.createElement(_siteInfoComponent2.default, { siteName: this.props.siteName });
            } else if (_.has(this.props, 'page')) {
                mainComponent = _react2.default.createElement(_pageComponent2.default, {
                    updatePagesList: this.updatedPagesList,
                    pageName: this.props.page,
                    id: this.props.id
                });
            } else {
                mainComponent = null;
            }
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(_dashSidebar2.default, { pages: this.state.pages }),
                _react2.default.createElement(
                    'main',
                    { role: 'main', className: 'col-10 pt-3 px-4' },
                    mainComponent
                )
            );
        }
    }]);

    return Dashboard;
}(_react.Component);

exports.default = Dashboard;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _addPage = __webpack_require__(224);

var _addPage2 = _interopRequireDefault(_addPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PagesSidebar = function (_Component) {
    _inherits(PagesSidebar, _Component);

    function PagesSidebar() {
        _classCallCheck(this, PagesSidebar);

        return _possibleConstructorReturn(this, (PagesSidebar.__proto__ || Object.getPrototypeOf(PagesSidebar)).apply(this, arguments));
    }

    _createClass(PagesSidebar, [{
        key: 'render',
        value: function render() {
            var hasLoadedPages = !(this.props.pages instanceof Array);
            return _react2.default.createElement(
                'nav',
                { className: 'col-2 sidebar' },
                _react2.default.createElement(
                    'div',
                    { className: 'side-nav' },
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Account'
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '/dashboard/home' },
                                _react2.default.createElement('img', { src: '/icons/home.svg', alt: 'home', className: 'icon' }),
                                _react2.default.createElement(
                                    'span',
                                    null,
                                    'Site Info'
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'h5',
                        null,
                        'Pages'
                    ),
                    hasLoadedPages ? null : _react2.default.createElement(
                        'ul',
                        null,
                        this.props.pages.map(function (page) {
                            return _react2.default.createElement(
                                'li',
                                { key: page.id },
                                _react2.default.createElement(
                                    'a',
                                    { href: '/dashboard/page/' + page.id },
                                    _react2.default.createElement('img', {
                                        src: '/icons/document.svg',
                                        alt: 'document',
                                        className: 'icon'
                                    }),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        page.name
                                    )
                                )
                            );
                        })
                    ),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(_addPage2.default, null)
                )
            );
        }
    }]);

    return PagesSidebar;
}(_react.Component);

exports.default = PagesSidebar;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _index = __webpack_require__(225);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddPage = function (_Component) {
    _inherits(AddPage, _Component);

    function AddPage() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, AddPage);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AddPage.__proto__ || Object.getPrototypeOf(AddPage)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            addPageOpen: false,
            newPageName: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(AddPage, [{
        key: 'toggleAddField',
        value: function toggleAddField(e) {
            e.preventDefault();
            this.setState({ addPageOpen: !this.state.addPageOpen });
        }
    }, {
        key: 'addPage',
        value: function addPage(e) {
            e.preventDefault();
            axios.post('/page', {
                pageName: this.state.newPageName
            }, {
                withCredentials: true
            }).then(function (response) {
                window.location = '/dashboard/page/' + response.data.page;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ newPageName: e.target.value });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                null,
                !this.state.addPageOpen ? _react2.default.createElement(
                    'a',
                    { href: '#', onClick: function onClick(e) {
                            return _this2.toggleAddField(e);
                        } },
                    '+ Add new page'
                ) : _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'label',
                        { htmlFor: 'pageName' },
                        'Add Page',
                        _react2.default.createElement('input', {
                            onChange: function onChange(e) {
                                return _this2.handleChange(e);
                            },
                            type: 'text',
                            className: 'form-control',
                            id: 'pageName',
                            'aria-describedby': 'pageName',
                            placeholder: 'Enter email',
                            value: this.state.newPageName
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'resources-assets-js-dashboard-base-dash-sidebar-add-page-___index__btnContainer___djLRC' },
                        _react2.default.createElement(
                            'a',
                            {
                                href: '/',
                                className: 'btn btn-primary btn-sm',
                                onClick: function onClick(e) {
                                    return _this2.addPage(e);
                                } },
                            'Add'
                        ),
                        _react2.default.createElement(
                            'a',
                            {
                                href: '/',

                                className: 'btn btn-danger btn-sm resources-assets-js-dashboard-base-dash-sidebar-add-page-___index__rightAlign___27GH5',
                                onClick: function onClick() {
                                    return _this2.setState({ addPageOpen: false });
                                } },
                            'Cancel'
                        )
                    )
                )
            );
        }
    }]);

    return AddPage;
}(_react.Component);

exports.default = AddPage;

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"rightAlign":"resources-assets-js-dashboard-base-dash-sidebar-add-page-___index__rightAlign___27GH5","btnContainer":"resources-assets-js-dashboard-base-dash-sidebar-add-page-___index__btnContainer___djLRC"};

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _bootstrapAlert = __webpack_require__(109);

var _bootstrapAlert2 = _interopRequireDefault(_bootstrapAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // import PropTypes from 'prop-types';


var PagesComponent = function (_Component) {
    _inherits(PagesComponent, _Component);

    function PagesComponent() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, PagesComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PagesComponent.__proto__ || Object.getPrototypeOf(PagesComponent)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            pageName: _this.props.pageName,
            id: _this.props.id,
            updatedPageName: null,
            alertStatus: null
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(PagesComponent, [{
        key: 'handleChange',
        value: function handleChange(e) {
            this.setState({ pageName: e.target.value });
        }
    }, {
        key: 'removeAlert',
        value: function removeAlert() {
            this.setState({ alertStatus: null });
        }
    }, {
        key: 'changePageName',
        value: function changePageName(e) {
            var _this2 = this;

            e.preventDefault();
            axios.put('/page', {
                pageName: this.state.pageName,
                id: this.state.id
            }, {
                withCredentials: true
            }).then(function (resp) {
                _this2.setState({ alertStatus: 'success', updatedPageName: resp.data.pageName });
                _this2.props.updatePagesList({
                    id: _this2.state.id,
                    name: _this2.state.updatedPageName
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'row justify-content-md-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'col col-10 page-section' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'page name'
                    ),
                    _react2.default.createElement(
                        'form',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement('input', {
                                value: this.state.pageName,
                                onChange: function onChange(e) {
                                    return _this3.handleChange(e);
                                },
                                type: 'text',
                                className: 'form-control',
                                id: 'pageName',
                                'aria-describedby': 'pageNameHelp',
                                placeholder: 'Page Name'
                            })
                        ),
                        this.state.alertStatus === 'success' ? _react2.default.createElement(_bootstrapAlert2.default, {
                            message: 'Your page is now named ' + this.state.updatedPageName + '.',
                            type: 'success',
                            clickHandler: function clickHandler() {
                                return _this3.removeAlert();
                            }
                        }) : null,
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'submit',
                                className: 'btn btn-primary',
                                onClick: function onClick(e) {
                                    return _this3.changePageName(e);
                                } },
                            'Save'
                        )
                    )
                )
            );
        }
    }]);

    return PagesComponent;
}(_react.Component);

// PagesComponent.propTypes = {
//     id: PropTypes.number,
//     pageName: PropTypes.string,
// };


exports.default = PagesComponent;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _bootstrapAlert = __webpack_require__(109);

var _bootstrapAlert2 = _interopRequireDefault(_bootstrapAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PagesComponent = function (_Component) {
    _inherits(PagesComponent, _Component);

    function PagesComponent(props) {
        _classCallCheck(this, PagesComponent);

        var _this = _possibleConstructorReturn(this, (PagesComponent.__proto__ || Object.getPrototypeOf(PagesComponent)).call(this, props));

        _this.state = {
            value: _this.props.siteName ? _this.props.siteName : '',
            alertType: null
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }

    _createClass(PagesComponent, [{
        key: 'handleChange',
        value: function handleChange(event) {
            var urlSafeName = event.target.value.replace(/[^\w-]+/g, '-').toLowerCase();
            this.setState({ value: urlSafeName });
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            var _this2 = this;

            event.preventDefault();
            if (this.state.value.trim() === '') return;
            axios.post('/user/site-name', {
                siteName: this.state.value
            }, {
                withCredentials: true
            }).then(function (response) {
                _this2.setState({
                    alertName: _.get(response, 'data.siteName'),
                    alertType: 'success'
                });
            }).catch(function (error) {
                console.log(error);
            });
        }
    }, {
        key: 'removeAlert',
        value: function removeAlert() {
            this.setState({ alertType: null });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'row justify-content-md-center' },
                _react2.default.createElement(
                    'div',
                    { className: 'col col-10 info-section' },
                    _react2.default.createElement(
                        'h4',
                        null,
                        'Site Info'
                    ),
                    _react2.default.createElement(
                        'form',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'form-group' },
                            _react2.default.createElement('input', {
                                value: this.state.value,
                                onChange: this.handleChange,
                                type: 'text',
                                className: 'form-control',
                                id: 'pageName',
                                'aria-describedby': 'siteNameHelp',
                                placeholder: 'Site Name'
                            }),
                            _react2.default.createElement(
                                'small',
                                { id: 'siteNameHelp', className: 'form-text text-muted' },
                                'This is your site\'s URL.'
                            )
                        ),
                        this.state.alertType !== null ? _react2.default.createElement(_bootstrapAlert2.default, {
                            message: 'Your site is now named ' + this.state.alertName + '.',
                            type: 'success',
                            clickHandler: function clickHandler() {
                                return _this3.removeAlert();
                            }
                        }) : null,
                        _react2.default.createElement(
                            'button',
                            {
                                type: 'submit',
                                className: 'btn btn-primary',
                                onClick: this.handleSubmit },
                            'Save'
                        )
                    )
                )
            );
        }
    }]);

    return PagesComponent;
}(_react.Component);

exports.default = PagesComponent;

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[221]);
//# sourceMappingURL=dashboard.js.map