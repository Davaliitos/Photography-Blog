(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      modalOpen: false,
      email: '',
      emailValidated: undefined
    };
  },
  methods: {
    openModal: function openModal() {
      this.modalOpen = true;
    },
    closeModal: function closeModal() {
      this.modalOpen = false;
      this.email = '';
      this.emailValidated = undefined;
    },
    validateEmail: function validateEmail() {
      var emailExpression = /\S+@\S+\.\S+/;
      this.emailValidated = emailExpression.test(this.email);
    }
  },
  computed: {
    showModal: function showModal() {
      if (!this.modalOpen) {
        return 'modal-hidden';
      }

      return '';
    },
    emailStatus: function emailStatus() {
      if (this.email == '') {
        this.emailValidated = undefined;
        return '';
      }

      if (this.emailValidated === false) {
        return 'error';
      } else {
        return '';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader!../../styles/newblog.style.css */ "./node_modules/css-loader/index.js!./resources/styles/newblog.style.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./resources/styles/newblog.style.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader!./resources/styles/newblog.style.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap);", ""]);

// module
exports.push([module.i, "html,\r\nbody,\r\nh2,\r\narticle,\r\naside,\r\ndiv,\r\nheader,\r\nsection,\r\nh2,\r\nbutton,\r\nhr,\r\nmain,\r\nimg,\r\nform,\r\ninput,\r\nbutton,\r\nlabel,\r\np{\r\n    margin: 0;\r\n    border: 0;\r\n}\r\n\r\nhtml{\r\n    padding: 0;\r\n    vertical-align: baseline;\r\n    font-size: 100%;\r\n    font-family: 'Lato',sans-serif;\r\n    color: #101010;\r\n}\r\nbody{\r\n    background-color: #FFFFFF;\r\n    line-height: 1;\r\n}\r\n\r\nbody,\r\ninput{\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.green-text{\r\n    color: green;\r\n}\r\n.page-container{\r\n    clear : both;\r\n    overflow: hidden;\r\n    margin: 0 auto;\r\n}\r\n\r\n.content{\r\n    max-width: 560px;\r\n    margin-right: 70px;\r\n    width: 100%;\r\n}\r\n\r\n.content,\r\n.content-sidebar-wrap{\r\n    float: left;\r\n}\r\n\r\n.page-center{\r\n    margin: 0 auto;\r\n    width: 960px;\r\n}\r\n\r\n\r\np{\r\n    margin-top: 0px;\r\n    margin-bottom: 24px;\r\n    font-size: 16px;\r\n    font-weight: 300;\r\n    line-height: 24px;\r\n}\r\n\r\narticle{\r\n    margin-bottom: 138px;\r\n}\r\n\r\n.entry-header{\r\n    clear: both;\r\n    line-height: 1.5;\r\n    margin-bottom: 28px;\r\n}\r\n\r\n.entry-title{\r\n    font-size: 26px;\r\n    font-weight: bold;\r\n    line-height: 31px;\r\n    padding-bottom: 16px;\r\n    border-bottom: 1px solid #E51323;\r\n}\r\n\r\n.entry-content h2{\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    font-weight: bold;\r\n    padding-top: 20px;\r\n    margin-bottom: 27px;\r\n}\r\n\r\n.entry-content img{\r\n    height: auto;\r\n    width: 100%;\r\n    background: #fff;\r\n}\r\n\r\n.sidebar{\r\n    display : inline;\r\n    line-height: 1.5;\r\n    text-align: center;\r\n    background-color:  #F5F5F5;\r\n}\r\n.sidebar{\r\n    width: 270px;\r\n    height: 640px;\r\n}\r\n\r\n.sidebar .elements{\r\n    margin: 0 auto;\r\n    padding-top: 50px;\r\n}\r\n\r\nbutton{\r\n    background: linear-gradient(90deg, #AC519C 0.83%, #E5424F 100%);\r\n    box-shadow: 0px 3px 10px rgba(104, 104, 104, 0.5);\r\n    cursor: pointer;\r\n    width: 220px;\r\n    height: 40px;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: #FFF;\r\n    font-family: 'Lato',sans-serif;\r\n}\r\n\r\nbutton:hover{\r\n    background: linear-gradient(90deg, #B678AA 1.29%, #E28990 100%);\r\n    box-shadow: 0px 3px 10px rgba(104, 104, 104, 0.5);\r\n}\r\n\r\nlabel{\r\n    margin-left: 12px;\r\n}\r\n\r\ninput{\r\n    background-color: #fff;\r\n    box-shadow: inset 0px 1px 5px rgba(142, 142, 142, 0.5);\r\n    width: 100%;\r\n}\r\n\r\n.modal-hidden{\r\n    visibility: hidden;\r\n}\r\n\r\n.modal{\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 9999;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.modal__background{\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: #262626;;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    mix-blend-mode: normal;\r\n    z-index: 103;\r\n}\r\n.modal__inner{\r\n    background-color: #fff;\r\n    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.5);\r\n    width: 100%;\r\n    height: 100%;\r\n    max-width: 570px;\r\n    max-height: 310px;\r\n    position: relative;\r\n    z-index: 104;\r\n}\r\n\r\n.modal__close{\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0px;\r\n    color: #000;\r\n    cursor: pointer;\r\n    font-size: 37px;\r\n    padding: 0 11px;\r\n}\r\n\r\n.modal__content{\r\n    padding-top: 18px;\r\n    max-width: 440px;\r\n    margin: 0 auto;\r\n    width: 92%;\r\n}\r\n\r\n.modal__slider{\r\n    width: 100%;\r\n    max-width: 440px;\r\n    height: 27px;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n    line-height: 17px;\r\n    text-align: center;\r\n    border-bottom: 3px solid #E5E5E5;\r\n    margin-bottom: 21px;\r\n}\r\n\r\n.modal__slider__page{\r\n    position: absolute;\r\n    border-width: 3px;\r\n    height: 3px;\r\n    background: #E51323;\r\n    width: 220px;\r\n    top: 46px;\r\n}\r\n\r\n.modal__title{\r\n    font-weight: bold;\r\n    font-size: 23px;\r\n    line-height: 28px;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n    letter-spacing: 0;\r\n}\r\n\r\n.modal__email{\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 440px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.modal__email-input{\r\n    margin: 0 auto;\r\n    display: block;\r\n    font-family: 'Lato',sans-serif;\r\n    font-size: 16px;\r\n    font-weight: 300;   \r\n    height: 54px;\r\n    position: relative;\r\n    margin-bottom: 21px;\r\n    text-indent: 15.1px;\r\n}\r\n\r\ninput.modal__email-input::placeholder{\r\n    font-family: 'Lato',sans-serif;\r\n    font-weight: 300;\r\n    font-size: 18px;\r\n}\r\n\r\n.modal__email-input::-ms-clear {\r\n    display: none;\r\n}\r\n\r\n.modal__email-input-label{\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 3px;\r\n    opacity: 0;\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n    color: #828282;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.modal__email-input-label-error{\r\n    display:none;\r\n    top: 9px;\r\n    left: 4px;\r\n    position: absolute;\r\n    font-size: 12px;\r\n    font-weight: 300;\r\n    color: #E51323;\r\n    transition: all 0.3s ease;\r\n}\r\n\r\n.modal__email input:not(:placeholder-shown){\r\n    padding-top: 14px;\r\n}\r\n\r\n.modal__email input:not(:placeholder-shown) + label{\r\n    opacity: 1;\r\n    top: 9px;\r\n    left: 4px;\r\n}\r\n\r\n.modal__email.error input {\r\n    border: 1px solid #E51323;\r\n    box-shadow: inset 0px 1px 5px rgba(142, 142, 142, 0.5);\r\n    color: #E51323;\r\n}\r\n\r\n.modal__email.error > .modal__email-input-label-error{\r\n    display: block;\r\n}\r\n\r\n.modal__email.error > .modal__email-input-label{\r\n    opacity: 0;\r\n}\r\n\r\n.modal__submit{\r\n    background: linear-gradient(90deg, #AC519C 0.83%, #E5424F 100%);\r\n    box-shadow: 0px 3px 10px rgba(104, 104, 104, 0.5);\r\n    color: #fff;\r\n    font-weight: bold;\r\n    font-size: 18px;\r\n    line-height: 22px;\r\n    height: 48px;\r\n    display: block;\r\n    width: 100%;\r\n    max-width: 440px;\r\n}\r\n@media only screen and (min-width: 1024px) {\r\n    body div.page-container {\r\n        margin-top: 0;\r\n        padding-top: 76px;\r\n    }\r\n    .sidebar{\r\n        float: right;\r\n        width: 270px;\r\n        margin-top: 78px;\r\n    }\r\n    .aligncenter{\r\n        display : block;\r\n        margin: 0 auto 24px;\r\n        max-width: 560px;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 600px) and (max-width: 1023px){\r\n\r\n    .page-center{\r\n        margin: 0 auto;\r\n        width : 100%;\r\n    }\r\n\r\n    .content{\r\n        margin-left: 0;\r\n        margin-right: 0;\r\n        width: 560px;\r\n        margin: 0 auto;\r\n        margin-top: 21px;\r\n    }\r\n    \r\n    .content,\r\n    .content-sidebar-wrap{\r\n        float: none;\r\n    }\r\n\r\n    .entry-content h2{\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .entry-content p{\r\n        font-size: 16px;\r\n        font-weight: 300;\r\n        line-height: 24px;\r\n    }\r\n\r\n    article{\r\n        margin-bottom: 33px;\r\n    }\r\n\r\n    .entry{\r\n        text-align: left;\r\n    }\r\n    .aligncenter{\r\n        display : block;\r\n        margin: 0 auto 24px;\r\n        max-width: 560px;\r\n    }\r\n    button{\r\n        font-size: 20px;\r\n        width: 262px;\r\n        height: 49px;\r\n    }\r\n\r\n    .entry-title{\r\n        font-size: 24px;\r\n        line-height: 29px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .sidebar{\r\n        display: block;\r\n        clear: both;\r\n        width: 560px;\r\n        margin: 0 auto;\r\n        height: 426px;\r\n        margin-bottom: 37px;\r\n    }\r\n\r\n    .entry-header{\r\n        margin-bottom: 22px;\r\n    }\r\n\r\n    .entry-content h2{\r\n        padding-top: 0px;\r\n        margin-bottom: 14px;\r\n    }\r\n}\r\n\r\n\r\n@media only screen and (max-width: 600px){\r\n    .hide_767{\r\n        display: none;\r\n    }\r\n    .page-center{\r\n        margin: 0 auto;\r\n        width : 100%;\r\n    }\r\n\r\n    .content{\r\n        margin-right: 0;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n        margin-top: 21px;\r\n    }\r\n\r\n    .content,\r\n    .content-sidebar-wrap{\r\n        float: none;\r\n    }\r\n\r\n    .entry-content h2{\r\n        font-size: 18px;\r\n        line-height: 22px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .entry-content p{\r\n        font-size: 16px;\r\n        font-weight: 300;\r\n        line-height: 24px;\r\n    }\r\n\r\n    article{\r\n        margin-bottom: 33px;\r\n    }\r\n\r\n    .content img{\r\n        width: 110%;\r\n        position: relative;\r\n        left: -4.53%;\r\n    }\r\n    .entry{\r\n        text-align: left;\r\n        margin-left: 4.53%;\r\n        margin-right: 4.53%;\r\n    }\r\n\r\n\r\n\r\n    .entry-title{\r\n        font-size: 24px;\r\n        line-height: 29px;\r\n        font-weight: bold;\r\n    }\r\n\r\n    .sidebar{\r\n        float: left;\r\n        width: 90.9%;\r\n        margin-left: 4.53%;\r\n        margin-right: 4.53%;\r\n        height: 426px;\r\n        margin-bottom: 37px;\r\n    }\r\n\r\n    button{\r\n        font-size: 20px;\r\n        max-width: 262px;\r\n        width: 77%;\r\n        height: 49px;\r\n    }\r\n\r\n\r\n    .entry-header{\r\n        margin-bottom: 22px;\r\n    }\r\n\r\n    .entry-content h2{\r\n        padding-top: 0px;\r\n        margin-bottom: 14px;\r\n    }\r\n    .modal__inner{\r\n        width: 95%;\r\n        max-width: 355px;\r\n        max-height: 272px;\r\n        height: 100%;\r\n        position: relative;\r\n    }\r\n    @media (max-width: 325px){\r\n        .modal__inner{\r\n            max-height: 280px;\r\n            height: 100%;\r\n        }\r\n    }\r\n    .modal__close{\r\n        padding: 0 11px;\r\n    }\r\n    .modal__content{\r\n        max-width: 319px;\r\n        margin: 0 auto;\r\n        width: 92%;\r\n    }\r\n    .modal__slider{\r\n        margin-bottom: 20px;\r\n    }\r\n    .modal__slider__page{\r\n        width: 45%;\r\n        top: 43px;\r\n    }\r\n    .modal__email-input{\r\n        height: 49px;\r\n        margin-bottom: 16px;\r\n    }\r\n    .modal__title{\r\n        font-size: 20px;\r\n        line-height: 26px;\r\n        text-align: left;\r\n        margin-bottom: 23px;\r\n        letter-spacing: 0;\r\n    }\r\n    .modal__submit{\r\n        max-width: 320px;\r\n        height: 45px;\r\n        width: 100%;\r\n        margin: 0 auto;\r\n    }\r\n    input.modal__email-input::placeholder{\r\n        font-size: 17px;\r\n    }\r\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Main.vue?vue&type=template&id=2ad93e50& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "page-container" }, [
      _c("div", { staticClass: "page-center" }, [
        _c("div", { staticClass: "content-sidebar-wrap" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("aside", { staticClass: "sidebar" }, [
            _c("section", { staticClass: "elements" }, [
              _c("button", { on: { click: _vm.openModal } }, [
                _vm._v("Send Me The Tips")
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal", class: _vm.showModal }, [
      _c("div", { staticClass: "modal__background" }),
      _vm._v(" "),
      _c("div", { staticClass: "modal__inner" }, [
        _c(
          "div",
          { staticClass: "modal__close", on: { click: _vm.closeModal } },
          [_vm._v("×")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "modal__content" }, [
          _c("div", { staticClass: "modal__slider" }, [_vm._v("Step 1 of 2")]),
          _vm._v(" "),
          _c("hr", { staticClass: "modal__slider__page" }),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("form", [
            _c("div", { staticClass: "modal__email", class: _vm.emailStatus }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.email,
                    expression: "email"
                  }
                ],
                staticClass: "modal__email-input",
                attrs: {
                  type: "text",
                  id: "email-input",
                  placeholder: "Please enter your email here"
                },
                domProps: { value: _vm.email },
                on: {
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.email = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "modal__email-input-label",
                  attrs: { for: "email-input" }
                },
                [_vm._v("Please enter your email here")]
              ),
              _vm._v(" "),
              _c(
                "label",
                {
                  staticClass: "modal__email-input-label-error",
                  attrs: { for: "email-input" }
                },
                [_vm._v("Please enter a valid email address")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "modal__submit",
                  attrs: { type: "button" },
                  on: { click: _vm.validateEmail }
                },
                [_vm._v("Send Me The Tips »")]
              )
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("main", { staticClass: "content" }, [
      _c("article", { staticClass: "entry" }, [
        _c("header", { staticClass: "entry-header" }, [
          _c("h2", { staticClass: "entry-title" }, [
            _vm._v(
              "10 Best Photo Apps For Incredible Iphone Photography (2020 Edition)"
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "entry-content" }, [
          _c("p", [
            _vm._v(
              "How do you capture more interesting travel photos with your iPhone? How do you avoid taking the same cliché vacation photos that everyone else takes? I recently interviewed Steffen Geldner – a talented iPhone photographer with a passion for travel. In this article, Steffen reveals 7 tips for shooting beautiful travel photos that will preserve the amazing memories of your trip. Read on to discover how to take better travel photos with your iPhone!"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _c("img", {
              staticClass: "aligncenter",
              attrs: {
                src: __webpack_require__(/*! ./../../images/globes.jpg */ "./resources/images/globes.jpg"),
                srcset:
                  __webpack_require__(/*! ./../../images/aws-cloud-large.png */ "./resources/images/aws-cloud-large.png") +
                  " 1x, " +
                  __webpack_require__(/*! ./../../images/globes.jpg */ "./resources/images/globes.jpg") +
                  " 2x"
              }
            })
          ]),
          _vm._v(" "),
          _c("h2", [
            _vm._v(
              "1. Research Your Destination To Find The Best Photo Opportunities"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Before your trip, I recommend researching the destination to find the most interesting photo opportunities."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "I always research the location I’m traveling to. I do this extensively and obsessively!"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "It’s up to you how much research you do. But you should definitely spend a bit of time looking up some great places to take pictures."
            )
          ]),
          _vm._v(" "),
          _c("p", [_vm._v("So, what kind of research can you do?")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "First, you could search for photos that other people have taken at the locations you’re planning to visit."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Search on Instagram or Google to get an idea of the kinds of photos people take there."
            )
          ]),
          _vm._v(" "),
          _c("h2", [
            _vm._v(
              "2. Capture Your Journey To Tell The Complete Story Of Your Travels"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Travel photography isn’t just about photographing the destination."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "For a more complete photographic story, capture your journey to and from the location you’re visiting."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "If you’re traveling by plane, try to get a window seat where you have a view of the wing or propeller."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "And of course, you could capture a beautiful aerial view of clouds, mountains, or city lights as you’re flying above."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Your journey will often involve several different types of transport. And they all offer great photo opportunities."
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Whether you’re traveling by car, taxi, bus, train, boat, or plane, try to capture some interesting photos."
            )
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "modal__title" }, [
      _vm._v("Enter your Email To Get "),
      _c("span", { staticClass: "green-text" }, [_vm._v("FREE")]),
      _c("br", { staticClass: "hide_767" }),
      _vm._v(" iPhone Photography Email Tips:")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/images/aws-cloud-large.png":
/*!**********************************************!*\
  !*** ./resources/images/aws-cloud-large.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/aws-cloud-large.png?0fe90db0cdda997b8f88870b96e68005";

/***/ }),

/***/ "./resources/images/globes.jpg":
/*!*************************************!*\
  !*** ./resources/images/globes.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/globes.jpg?e85f6014f39e0a66e6ad1a9dbc11a05f";

/***/ }),

/***/ "./resources/js/views/Main.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Main.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_2ad93e50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=2ad93e50& */ "./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/views/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/Main.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_2ad93e50___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_2ad93e50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Main.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Main.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Main.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Main.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Main.vue?vue&type=template&id=2ad93e50& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_2ad93e50___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=2ad93e50& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_2ad93e50___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_2ad93e50___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);