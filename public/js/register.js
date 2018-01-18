webpackJsonp([3],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(124);


/***/ }),

/***/ 124:
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
    var usernameEl = document.querySelector('input[name="username"]');
    usernameEl.addEventListener('keydown', function (e) {
        if (e.which === 32) {
            e.preventDefault();
        }
    });
});

/***/ })

},[123]);