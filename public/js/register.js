webpackJsonp([3],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(120);


/***/ }),

/***/ 120:
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

},[119]);