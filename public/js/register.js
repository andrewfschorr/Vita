webpackJsonp([4],{

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(218);

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(23);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(219);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = function (_Component) {
    _inherits(Example, _Component);

    function Example() {
        _classCallCheck(this, Example);

        return _possibleConstructorReturn(this, (Example.__proto__ || Object.getPrototypeOf(Example)).apply(this, arguments));
    }

    _createClass(Example, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-md-8 col-md-offset-2' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                'Example Component'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'resources-assets-js-register-___index__reg___30Zxu' },
                                'hello!!!'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Example;
}(_react.Component);

exports.default = Example;


if (document.getElementById('registerDomEl')) {
    _reactDom2.default.render(_react2.default.createElement(Example, null), document.getElementById('registerDomEl'));
}

/***/ }),

/***/ 219:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"reg":"resources-assets-js-register-___index__reg___30Zxu"};

/***/ })

},[217]);