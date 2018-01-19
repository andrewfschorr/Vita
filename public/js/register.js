webpackJsonp([3],{

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(121);


/***/ }),

/***/ 121:
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

},[120]);