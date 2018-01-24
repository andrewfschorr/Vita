webpackJsonp([1],{

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(28);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dashboardBase = __webpack_require__(221);

var _dashboardBase2 = _interopRequireDefault(_dashboardBase);

__webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (document.getElementById('dashboardDomEl')) {
    _reactDom2.default.render(_react2.default.createElement(_dashboardBase2.default, dataBs), document.getElementById('dashboardDomEl'));
}

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

var _pagesSidebar = __webpack_require__(222);

var _pagesSidebar2 = _interopRequireDefault(_pagesSidebar);

var _pageComponent = __webpack_require__(223);

var _pageComponent2 = _interopRequireDefault(_pageComponent);

__webpack_require__(224);

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
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(_pagesSidebar2.default, { pages: this.state.pages }),
                _react2.default.createElement(_pageComponent2.default, null)
            );
        }
    }]);

    return Dashboard;
}(_react.Component);

exports.default = Dashboard;

/***/ }),

/***/ 222:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

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
        key: "render",

        // componentWillReceiveProps(nextProps) {
        //     console.log(nextProps);
        // }

        value: function render() {
            var hasLoadedPages = !(this.props.pages instanceof Array);
            return _react2.default.createElement(
                "nav",
                { className: "col-2 sidebar" },
                _react2.default.createElement(
                    "div",
                    { className: "side-nav" },
                    _react2.default.createElement(
                        "h5",
                        null,
                        "Pages"
                    ),
                    hasLoadedPages ? _react2.default.createElement(
                        "p",
                        null,
                        "Loading"
                    ) : _react2.default.createElement(
                        "ul",
                        null,
                        this.props.pages.map(function (page) {
                            return _react2.default.createElement(
                                "li",
                                { key: page.id },
                                _react2.default.createElement(
                                    "a",
                                    { href: "/dashboard/" + page.url },
                                    _react2.default.createElement("img", {
                                        src: "/icons/document.svg",
                                        alt: "document",
                                        className: "icon"
                                    }),
                                    page.name
                                )
                            );
                        })
                    ),
                    _react2.default.createElement("hr", null),
                    _react2.default.createElement(
                        "a",
                        { href: "/add-page" },
                        "+ Add new page"
                    )
                )
            );
        }
    }]);

    return PagesSidebar;
}(_react.Component);

exports.default = PagesSidebar;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(15);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PagesComponent = function (_Component) {
    _inherits(PagesComponent, _Component);

    function PagesComponent() {
        _classCallCheck(this, PagesComponent);

        return _possibleConstructorReturn(this, (PagesComponent.__proto__ || Object.getPrototypeOf(PagesComponent)).apply(this, arguments));
    }

    _createClass(PagesComponent, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "main",
                { role: "main", className: "col-10 pt-3 px-4" },
                _react2.default.createElement(
                    "div",
                    { className: "row justify-content-md-center" },
                    _react2.default.createElement(
                        "div",
                        { className: "col col-10 info-section" },
                        _react2.default.createElement(
                            "h4",
                            null,
                            "Site Info"
                        ),
                        _react2.default.createElement(
                            "form",
                            null,
                            _react2.default.createElement(
                                "div",
                                { className: "form-group" },
                                _react2.default.createElement("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "pageName",
                                    "aria-describedby": "siteNameHelp",
                                    placeholder: "Site Name"
                                }),
                                _react2.default.createElement(
                                    "small",
                                    { id: "siteNameHelp", className: "form-text text-muted" },
                                    "This is your site's URL."
                                )
                            ),
                            _react2.default.createElement(
                                "button",
                                { type: "submit", className: "btn btn-primary" },
                                "Save"
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "row justify-content-md-center" },
                    _react2.default.createElement(
                        "div",
                        { className: "col col-10 page-section" },
                        _react2.default.createElement(
                            "h4",
                            null,
                            "page name"
                        ),
                        _react2.default.createElement(
                            "form",
                            null,
                            _react2.default.createElement(
                                "div",
                                { className: "form-group" },
                                _react2.default.createElement("input", {
                                    type: "text",
                                    className: "form-control",
                                    id: "pageName",
                                    "aria-describedby": "pageNameHelp",
                                    placeholder: "Page Name"
                                })
                            ),
                            _react2.default.createElement(
                                "button",
                                { type: "submit", className: "btn btn-primary" },
                                "Save"
                            )
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

/***/ 224:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 225:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[220]);