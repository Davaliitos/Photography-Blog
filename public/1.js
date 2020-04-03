(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      modalOpen: false,
      email: '',
      emailValidated: undefined
    };
  },
  computed: {
    imageURL: function imageURL() {
      if (window.devicePixelRatio > 1.5) {
        return __webpack_require__(/*! ../../images/globes.jpg */ "./resources/images/globes.jpg");
      } else {
        return __webpack_require__(/*! ../../images/aws-cloud-large.png */ "./resources/images/aws-cloud-large.png");
      }
    },
    isOpened: function isOpened() {
      if (!this.modalOpen) {
        return 'modal-container__hidden';
      }

      return '';
    },
    emailStatus: function emailStatus() {
      if (this.emailValidated === undefined) {
        return '';
      } else if (this.emailValidated === false) {
        return 'red-text';
      } else {
        return 'green-text';
      }
    },
    emailIsNotEmpty: function emailIsNotEmpty() {
      if (this.email !== '') {
        return 'moved';
      } else {
        return '';
      }
    },
    emailMessage: function emailMessage() {
      if (this.emailValidated === undefined) {
        return 'Please enter your email here';
      } else if (this.emailValidated === false) {
        return 'Please enter a valid email address';
      } else {
        return 'Success';
      }
    }
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
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../styles/blog.style.css */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/styles/blog.style.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/styles/blog.style.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./resources/styles/blog.style.css ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* General Styles*/\n*,\r\n*::before,\r\n*::after{\r\n    margin: 0;\r\n    padding: 0;\n}\nhtml{\r\n    font-size: 10px;\r\n    font-family: 'Lato',sans-serif;;\r\n    color : #101010;\n}\nbutton{\r\n    font-family: 'Lato',sans-serif;\r\n    color: #FFF;\r\n    background: linear-gradient(90deg, #AC519C 0.83%, #E5424F 100%);\r\n    cursor: pointer;\r\n    box-shadow: 0px 3px 10px rgba(104, 104, 104, 0.5);\r\n    padding: 1.1rem 0 1.1rem 0;\n}\nbutton:hover{\r\n    background: linear-gradient(90deg, #B678AA 1.29%, #E28990 100%);\n}\n.red-text{\r\n    color: red !important;\n}\n.green-text{\r\n    color: green !important;\n}\r\n\r\n/** Container Styles*/\n.container{\r\n    width: 90rem;\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    grid-template-areas: 'blog sidebar';\r\n    grid-gap: 7rem;\r\n    padding-top: 7.6rem;\r\n    padding-bottom: 7.6rem;\n}\r\n\r\n\r\n/**Content Styles */\n.content{\r\n    grid-area: 'blog';\r\n    width: 56rem;\n}\n.content__image{\r\n    width: 100%;\r\n    margin-top: 2rem;\n}\n.content__header{\r\n    font-size: 2.6rem;\r\n    line-height: 3.1rem;\r\n    font-weight: bold;\r\n    width: 100%;\n}\n.content__subheader{\r\n    font-size: 1.8rem;\r\n    line-height: 2.2rem;\r\n    font-weight: bold;\r\n    margin-top: 4.5rem;\r\n    margin-bottom: 2.2rem;\r\n    letter-spacing: .008rem;\r\n    font-weight: 700;\n}\n.content__paragraph{\r\n    font-size: 1.6rem;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    line-height: 2.4rem;\n}\n.content__header__divider{\r\n    margin-top: 1.6rem;\r\n    margin-bottom: 2.8rem;\r\n    border-width: 1px;\r\n    border-color: #E5424F;\n}\r\n\r\n\r\n/**Sidebar Styles */\n.sidebar{\r\n    width: 27rem;\r\n    height: 64rem;\r\n    background: #F5F5F5;\r\n    margin-top: 7.8rem;\r\n    grid-area: 'sidebar';\n}\n.sidebar__button{\r\n    display: block;\r\n    width: 22rem;\r\n    font-size: 1.5rem;\r\n    line-height: 1.8rem;\r\n    margin: 1.8rem auto;\n}\r\n\r\n/**Modal Styles */\n.modal-container{\r\n    display: flex;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 9999;\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: rgba(15, 15, 15, 0.8);\r\n    mix-blend-mode: normal;\n}\n.modal-container__dialog{\r\n    position: relative;\r\n    box-sizing: border-box;\r\n    background-color: #FFF;\r\n    width: 57rem;\r\n    height: 31rem;\r\n    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.5);\r\n    opacity: 1;\n}\n.modal-container__grid{\r\n    margin: 0 auto;\r\n    display: grid;\r\n    grid-template-rows: auto auto auto auto;\r\n    grid-row-gap: 2.3rem;\r\n    width: 44rem;\r\n    margin-top: 1.8rem;\n}\n.modal-container__hidden{\r\n    display: none;\r\n    visibility: hidden;\n}\n.modal-container__dialog__progress-bar{\r\n    height: 3rem;\r\n    margin: 0 auto;\r\n    width: 100%;\n}\n.progress-bar{\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr;\n}\n.progress-bar hr{\r\n    margin-top: 1.1rem;\r\n    border-width: 1px;\r\n    border-color: #E5424F;\n}\n.progress-bar .not-selected{\r\n    border-color: #E5E5E5;\n}\n.modal-container__dialog__close {\r\n    cursor: pointer;\r\n    position: absolute;\r\n    top: 2rem;\r\n    right: 1.1rem;\r\n    font-size: 3.8rem;\r\n    transform: translate(0%, -50%);\n}\n.modal-container__dialog__progress-bar__page{\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    font-size: 1.4rem;\r\n    line-height: 1.7rem;\r\n    text-align: center;\r\n    color: #848484;\n}\n.modal_container__title{\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 2.3rem;\r\n    line-height: 2.8rem;\r\n    text-align: center;\n}\n.modal-container__dialog__input{\r\n    width: 100%;\r\n    height: 4rem;\r\n    font-size: 1.6rem;\r\n    line-height: 1.9rem;\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    text-indent: 1.1rem;\r\n    padding-top: 1.4rem;\r\n    display: block;\r\n    box-shadow: inset 0px 1px 5px rgba(142, 142, 142, 0.5);\n}\n.modal-container__dialog__input:focus + .floating-label{\r\n    font-size: 1.2rem;\r\n    line-height: 1.4rem;\r\n    top: 15.6rem;\n}\n.modal-container__dialog__input::-ms-clear {\r\n    display: none;\n}\n.floating-label{\r\n    position: absolute;\r\n    pointer-events: none;\r\n    transition: 0.2s ease all;\r\n    font-size: 1.8rem;\r\n    font-weight: 300;\r\n    top: 17rem;\r\n    left: 7.7rem;\r\n    color: #828282;\n}\n.moved{\r\n    font-size: 1.2rem;\r\n    line-height: 1.4rem;\r\n    top: 15.5rem;\n}\n.modal-container__dialog__submit{\r\n    height: 4.8rem;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 1.8rem;\r\n    line-height: 2.2rem;\n}\r\n\r\n/* Styles when borders start to touch both divs*/\n@media only screen and (min-width: 900px) and (max-width: 1000px){\n.container{\r\n        width: 83rem;\r\n        margin: 0 auto;\r\n        display: grid;\r\n        grid-template-columns: auto auto;\r\n        grid-template-areas: 'blog sidebar';\r\n        grid-gap: 3rem;\r\n        padding-top: 7.6rem;\r\n        padding-bottom: 7.6rem;\n}\n}\r\n\r\n/*Styles for Devices Bigger than an Iphone*/\n@media only screen and (min-width: 768px) and (max-width: 900px){\n.container{\r\n        width: 60rem;\r\n        margin: 0 auto;\r\n        display: grid;\r\n        grid-template-areas:\r\n            'blog'\r\n            'sidebar';\r\n        grid-template-columns: auto;\r\n        grid-template-rows: auto auto;\r\n        grid-gap: 3rem;\r\n        padding-top: 2.5rem;\r\n        padding-bottom: 2.5rem;\r\n        overflow-x: hidden;\n}\n.content__image{\r\n        width: 60rem;\r\n        margin-top: 2rem;\n}\n.sidebar{\r\n        width: 60rem;\r\n        background: #F5F5F5;\r\n        grid-area: 'sidebar';\r\n        margin-top: 0;\n}\n}\r\n\r\n/*Styles for Iphones 6+*/\n@media only screen and (min-width: 368px) and (max-width: 767px){\n.container{\r\n        width: 34rem;\r\n        margin: 0 auto;\r\n        display: grid;\r\n        grid-template-areas:\r\n            'blog'\r\n            'sidebar';\r\n        grid-template-columns: auto;\r\n        grid-template-rows: auto auto;\r\n        grid-gap: 3rem;\r\n        padding-top: 2.5rem;\r\n        padding-bottom: 2.5rem;\r\n        overflow-x: hidden;\n}\n.content{\r\n        width: 34rem;\r\n        grid-area: 'blog';\n}\n.content__header{\r\n        font-size: 2.4rem;\r\n        line-height: 3.1rem;\r\n        font-weight: 700;\n}\n.content__image{\r\n        width: 34rem;\r\n        margin-top: 2rem;\n}\n.sidebar{\r\n        width: 34rem;\r\n        height: 42.6rem;\r\n        background: #F5F5F5;\r\n        grid-area: 'sidebar';\r\n        margin-top: 0;\n}\n.sidebar__button{\r\n        width: 28rem;\r\n        font-weight: bold;\r\n        font-size: 2rem;\r\n        line-height: 2.4rem;\r\n        margin: 3.4rem auto;\n}\n.modal-container__dialog{\r\n        width: 35.5rem;\r\n        height: 27.2rem;\n}\n.modal-container__grid{\r\n        width: 32rem;\r\n        grid-template-rows: auto auto auto auto;\r\n        grid-row-gap: 2rem;\r\n        margin-top: 1.3rem;\n}\n.modal_container__title{\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 2rem;\r\n        line-height: 2.6rem;\r\n        text-align: center;\n}\n.modal-container__dialog__input{\r\n        height: 4rem;\r\n        font-size: 1.7rem;\r\n        line-height: 2rem;\r\n        text-indent: 1.1rem;\r\n        padding-top: 1rem;\n}\n.modal-container__dialog__input:focus + .floating-label{\r\n        font-size: 1.2rem;\r\n        line-height: 1.4rem;\r\n        top: 14rem;\n}\n.floating-label{\r\n        font-size: 1.7rem;\r\n        top: 15rem;\r\n        left: 3rem;\n}\n.moved{\r\n        font-size: 1.2rem;\r\n        line-height: 1.4rem;\r\n        top: 14rem;\n}\n}\r\n\r\n/*Styles for Iphones 5SE*/\n@media only screen and (max-width: 368px){\nhtml{\r\n        font-size: 8px;\n}\n.container{\r\n        width: 34rem;\r\n        margin: 0 auto;\r\n        display: grid;\r\n        grid-template-areas:\r\n            'blog'\r\n            'sidebar';\r\n        grid-template-columns: auto;\r\n        grid-template-rows: auto auto;\r\n        grid-gap: 3rem;\r\n        padding-top: 2.5rem;\r\n        padding-bottom: 2.5rem;\r\n        overflow-x: hidden;\n}\n.content{\r\n        width: 34rem;\r\n        grid-area: 'blog';\n}\n.content__header{\r\n        font-size: 3rem;\r\n        line-height: 3.1rem;\r\n        font-weight: 700;\n}\n.content__image{\r\n        width: 34rem;\r\n        margin-top: 2rem;\n}\n.sidebar{\r\n        width: 34rem;\r\n        height: 42.6rem;\r\n        background: #F5F5F5;\r\n        grid-area: 'sidebar';\r\n        margin-top: 0;\n}\n.sidebar__button{\r\n        width: 28rem;\r\n        font-weight: bold;\r\n        font-size: 2rem;\r\n        line-height: 2.4rem;\r\n        margin: 3.4rem auto;\n}\n.modal-container__dialog{\r\n        width: 35.5rem;\r\n        height: 27.2rem;\n}\n.modal-container__grid{\r\n        width: 32rem;\r\n        grid-template-rows: auto auto auto auto;\r\n        grid-row-gap: 2rem;\r\n        margin-top: 1.3rem;\n}\n.modal_container__title{\r\n        font-style: normal;\r\n        font-weight: 700;\r\n        font-size: 2.5rem;\r\n        line-height: 2.6rem;\r\n        text-align: center;\n}\n.modal-container__dialog__input{\r\n        height: 4rem;\r\n        font-size: 2.1rem;\r\n        line-height: 2rem;\r\n        text-indent: 1.1rem;\r\n        padding-top: 1rem;\n}\n.modal-container__dialog__input:focus + .floating-label{\r\n        font-size: 1.5rem;\r\n        line-height: 1.4rem;\r\n        top: 14rem;\n}\n.floating-label{\r\n        font-size: 2.1rem;\r\n        top: 15rem;\r\n        left: 3rem;\n}\n.moved{\r\n        font-size: 1.5rem;\r\n        line-height: 1.4rem;\r\n        top: 14rem;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
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
  return _c("section", { staticClass: "container" }, [
    _c("div", { staticClass: "content" }, [
      _c("h2", { staticClass: "content__header" }, [
        _vm._v(
          "10 Best Photo Apps For Incredible Iphone Photography (2020 Edition)"
        )
      ]),
      _vm._v(" "),
      _c("hr", { staticClass: "content__header__divider" }),
      _vm._v(" "),
      _c("p", { staticClass: "content__paragraph" }, [
        _vm._v(
          "How do you capture more interesting travel photos with your iPhone? How do you avoid taking the same cliché vacation photos that everyone else takes? I recently interviewed Steffen Geldner – a talented iPhone photographer with a passion for travel. In this article, Steffen reveals 7 tips for shooting beautiful travel photos that will preserve the amazing memories of your trip. Read on to discover how to take better travel photos with your iPhone!"
        )
      ]),
      _vm._v(" "),
      _c("img", {
        staticClass: "content__image",
        attrs: { src: _vm.imageURL }
      }),
      _vm._v(" "),
      _c("h2", { staticClass: "content__subheader" }, [
        _vm._v(
          "1. Research Your Destination To Find The Best Photo Opportunities"
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("h2", { staticClass: "content__subheader" }, [
        _vm._v(
          "2. Capture Your Journey To Tell The Complete Story Of Your Travels"
        )
      ]),
      _vm._v(" "),
      _vm._m(1)
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "sidebar" }, [
      _c(
        "button",
        { staticClass: "sidebar__button", on: { click: _vm.openModal } },
        [_vm._v("Send Me The Tips")]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "modal-container", class: _vm.isOpened }, [
      _c("div", { staticClass: "modal-container__dialog" }, [
        _c(
          "span",
          {
            staticClass: "modal-container__dialog__close",
            on: { click: _vm.closeModal }
          },
          [_vm._v("×")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "modal-container__grid" }, [
          _vm._m(2),
          _vm._v(" "),
          _vm._m(3),
          _vm._v(" "),
          _c("div", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              staticClass: "modal-container__dialog__input",
              class: _vm.emailStatus,
              attrs: { type: "text" },
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
              "span",
              {
                staticClass: "floating-label",
                class: [_vm.emailStatus, _vm.emailIsNotEmpty]
              },
              [_vm._v(_vm._s(_vm.emailMessage))]
            )
          ]),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "modal-container__dialog__submit",
              on: { click: _vm.validateEmail }
            },
            [_vm._v("Send Me The Tips »")]
          )
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
    return _c("p", { staticClass: "content__paragraph" }, [
      _vm._v(
        "Before your trip, I recommend researching the destination to find the most interesting photo opportunities."
      ),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n            I always research the location I’m traveling to. I do this extensively and obsessively!"
      ),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n            It’s up to you how much research you do. But you should definitely spend a bit of time looking up some great places to take pictures."
      ),
      _c("br"),
      _c("br"),
      _vm._v("\n            So, what kind of research can you do?"),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n            First, you could search for photos that other people have taken at the locations you’re planning to visit."
      ),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n            Search on Instagram or Google to get an idea of the kinds of photos people take there."
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "content__paragraph" }, [
      _vm._v(
        "Travel photography isn’t just about photographing the destination."
      ),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        For a more complete photographic story, capture your journey to and from the location you’re visiting."
      ),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        If you’re traveling by plane, try to get a window seat where you have a view of the wing or propeller."
      ),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        And of course, you could capture a beautiful aerial view of clouds, mountains, or city lights as you’re flying above."
      ),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        Your journey will often involve several different types of transport. And they all offer great photo opportunities."
      ),
      _c("br"),
      _c("br"),
      _vm._v(
        "\n        Whether you’re traveling by car, taxi, bus, train, boat, or plane, try to capture some interesting photos."
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-container__dialog__progress-bar" }, [
      _c("h2", { staticClass: "modal-container__dialog__progress-bar__page" }, [
        _vm._v("Step 1 of 2")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "progress-bar" }, [
        _c("hr"),
        _vm._v(" "),
        _c("hr", { staticClass: "not-selected" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "modal_container__title" }, [
      _vm._v("Enter your Email To Get "),
      _c("span", { staticClass: "green-text" }, [_vm._v("FREE")]),
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

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);