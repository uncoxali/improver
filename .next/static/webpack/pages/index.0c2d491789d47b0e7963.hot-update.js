webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Main/FullScrollPage.js":
/*!*******************************************!*\
  !*** ./components/Main/FullScrollPage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");


var helper = {
  getDelta: function getDelta(event) {
    if (event.wheelDelta) {
      return event.wheelDelta;
    } else {
      return -event.detail;
    }
  },
  throttle: function throttle(method, delay, context) {
    var inThrottle = false;
    return function () {
      if (!inThrottle) {
        inThrottle = true;
        method.apply(context, arguments);
        setTimeout(function () {
          inThrottle = false;
        }, delay);
      }
    };
  },
  debounce: function debounce(method, delay, context) {
    var inDebounce;
    return function () {
      var _arguments = arguments;
      clearTimeout(method.inDebounce);
      inDebounce = setTimeout(function () {
        method.apply(context, _arguments);
      }, delay);
    };
  }
};

var FullScrollPage = /*#__PURE__*/function () {
  function FullScrollPage(currentPageNumber, totalPageNumber, pages) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullScrollPage);

    this.currentPageNumber = currentPageNumber;
    this.totalPageNumber = totalPageNumber;
    this.pages = pages;
    this.viewHeight = document.documentElement.clientHeight;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FullScrollPage, [{
    key: "mouseScroll",
    value: function mouseScroll(event) {
      var delta = helper.getDelta(event);

      if (delta < 0) {
        this.scrollDown();
      } else {
        this.scrollUp();
      }
    }
  }, {
    key: "scrollDown",
    value: function scrollDown() {
      if (this.currentPageNumber !== this.totalPageNumber) {
        this.pages.style.top = -this.viewHeight * this.currentPageNumber + 'px';
        this.currentPageNumber++;
        this.updateNav();
        this.textFadeInOut();
      }
    }
  }, {
    key: "scrollUp",
    value: function scrollUp() {
      if (this.currentPageNumber !== 1) {
        this.pages.style.top = -this.viewHeight * (this.currentPageNumber - 2) + 'px';
        this.currentPageNumber--;
        this.updateNav();
        this.textFadeInOut();
      }
    }
  }, {
    key: "scrollTo",
    value: function scrollTo(targetPageNumber) {
      while (this.currentPageNumber !== targetPageNumber) {
        if (this.currentPageNumber > targetPageNumber) {
          this.scrollUp();
        } else {
          this.scrollDown();
        }
      }
    }
  }, {
    key: "createNav",
    value: function createNav() {
      var _this = this;

      var pageNav = document.createElement('div');
      pageNav.className = 'nav-dot-container';
      this.pages.appendChild(pageNav);

      for (var i = 0; i < this.totalPageNumber; i++) {
        pageNav.innerHTML += '<p class="nav-dot"><span></span></p>';
      }

      var navDots = document.getElementsByClassName('nav-dot');
      this.navDots = Array.prototype.slice.call(navDots);
      this.navDots[0].classList.add('dot-active');
      this.navDots.forEach(function (e, index) {
        e.addEventListener('click', function (event) {
          _this.scrollTo(index + 1);

          _this.navDots.forEach(function (e) {
            e.classList.remove('dot-active');
          });

          e.classList.add('dot-active');
        });
      });
    }
  }, {
    key: "updateNav",
    value: function updateNav() {
      this.navDots.forEach(function (e) {
        e.classList.remove('dot-active');
      });
      this.navDots[this.currentPageNumber - 1].classList.add('dot-active');
    }
  }, {
    key: "resize",
    value: function resize() {
      this.viewHeight = document.documentElement.clientHeight;
      this.pages.style.height = this.viewHeight + 'px';
      this.pages.style.top = -this.viewHeight * (this.currentPageNumber - 1) + 'px';
    }
  }, {
    key: "textFadeInOut",
    value: function textFadeInOut() {
      var containersDom = document.getElementsByClassName('text-container');
      var textContainers = Array.prototype.slice.call(containersDom);
      textContainers.forEach(function (e) {
        e.classList.remove('in-sight');
      });
      var textContainerInSight = textContainers[this.currentPageNumber - 1]; // textContainerInSight.classList.add('in-sight');
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      var handleMouseWheel = helper.throttle(this.mouseScroll, 0, this);
      var handleResize = helper.debounce(this.resize, 0, this);
      this.pages.style.height = this.viewHeight + 'px';
      this.createNav();
      this.textFadeInOut();

      if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
        document.addEventListener('wheel', handleMouseWheel);
      } else {
        document.addEventListener('DOMMouseScroll', handleMouseWheel);
      }

      document.addEventListener('scroll', handleMouseWheel);
      document.addEventListener('touchstart', function (event) {
        _this2.startY = event.touches[0].pageY;
      });
      document.addEventListener('touchend', function (event) {
        var endY = event.changedTouches[0].pageY;

        if (_this2.startY - endY < 0) {
          _this2.scrollUp();
        }

        if (_this2.startY - endY > 0) {
          _this2.scrollDown();
        }
      });
      document.addEventListener('touchmove', function (event) {
        event.preventDefault();
      });
      window.addEventListener('resize', handleResize);
    }
  }]);

  return FullScrollPage;
}();

/* harmony default export */ __webpack_exports__["default"] = (FullScrollPage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL0Z1bGxTY3JvbGxQYWdlLmpzIl0sIm5hbWVzIjpbImhlbHBlciIsImdldERlbHRhIiwiZXZlbnQiLCJ3aGVlbERlbHRhIiwiZGV0YWlsIiwidGhyb3R0bGUiLCJtZXRob2QiLCJkZWxheSIsImNvbnRleHQiLCJpblRocm90dGxlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJzZXRUaW1lb3V0IiwiZGVib3VuY2UiLCJpbkRlYm91bmNlIiwiY2xlYXJUaW1lb3V0IiwiRnVsbFNjcm9sbFBhZ2UiLCJjdXJyZW50UGFnZU51bWJlciIsInRvdGFsUGFnZU51bWJlciIsInBhZ2VzIiwidmlld0hlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwiZGVsdGEiLCJzY3JvbGxEb3duIiwic2Nyb2xsVXAiLCJzdHlsZSIsInRvcCIsInVwZGF0ZU5hdiIsInRleHRGYWRlSW5PdXQiLCJ0YXJnZXRQYWdlTnVtYmVyIiwicGFnZU5hdiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImkiLCJpbm5lckhUTUwiLCJuYXZEb3RzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiY2xhc3NMaXN0IiwiYWRkIiwiZm9yRWFjaCIsImUiLCJpbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxUbyIsInJlbW92ZSIsImhlaWdodCIsImNvbnRhaW5lcnNEb20iLCJ0ZXh0Q29udGFpbmVycyIsInRleHRDb250YWluZXJJblNpZ2h0IiwiaGFuZGxlTW91c2VXaGVlbCIsIm1vdXNlU2Nyb2xsIiwiaGFuZGxlUmVzaXplIiwicmVzaXplIiwiY3JlYXRlTmF2IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwic3RhcnRZIiwidG91Y2hlcyIsInBhZ2VZIiwi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QUFQLENBQXdCLFFBQXhCLEVBQWtDUyxZQUFsQztBQUNIOzs7Ozs7QUFHVTFDLDZFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBjMmQ0OTE3ODlkNDdiMGU3OTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWxwZXIgPSB7XHJcbiAgICBnZXREZWx0YShldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC53aGVlbERlbHRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBldmVudC53aGVlbERlbHRhO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtZXZlbnQuZGV0YWlsO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0aHJvdHRsZShtZXRob2QsIGRlbGF5LCBjb250ZXh0KSB7XHJcbiAgICAgICAgbGV0IGluVGhyb3R0bGUgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIWluVGhyb3R0bGUpIHtcclxuICAgICAgICAgICAgICAgIGluVGhyb3R0bGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpblRocm90dGxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfSxcclxuICAgIGRlYm91bmNlKG1ldGhvZCwgZGVsYXksIGNvbnRleHQpIHtcclxuICAgICAgICBsZXQgaW5EZWJvdW5jZTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQobWV0aG9kLmluRGVib3VuY2UpO1xyXG4gICAgICAgICAgICBpbkRlYm91bmNlID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2QuYXBwbHkoY29udGV4dCwgYXJndW1lbnRzKTtcclxuICAgICAgICAgICAgfSwgZGVsYXkpO1xyXG4gICAgICAgIH07XHJcbiAgICB9LFxyXG59O1xyXG5jbGFzcyBGdWxsU2Nyb2xsUGFnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjdXJyZW50UGFnZU51bWJlciwgdG90YWxQYWdlTnVtYmVyLCBwYWdlcykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgPSBjdXJyZW50UGFnZU51bWJlcjtcclxuICAgICAgICB0aGlzLnRvdGFsUGFnZU51bWJlciA9IHRvdGFsUGFnZU51bWJlcjtcclxuICAgICAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XHJcbiAgICAgICAgdGhpcy52aWV3SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgIH1cclxuICAgIG1vdXNlU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGRlbHRhID0gaGVscGVyLmdldERlbHRhKGV2ZW50KTtcclxuICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsRG93bigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVXAoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzY3JvbGxEb3duKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQYWdlTnVtYmVyICE9PSB0aGlzLnRvdGFsUGFnZU51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzLnN0eWxlLnRvcCA9IC10aGlzLnZpZXdIZWlnaHQgKiB0aGlzLmN1cnJlbnRQYWdlTnVtYmVyICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZU51bWJlcisrO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5hdigpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGYWRlSW5PdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzY3JvbGxVcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGFnZU51bWJlciAhPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzLnN0eWxlLnRvcCA9IC10aGlzLnZpZXdIZWlnaHQgKiAodGhpcy5jdXJyZW50UGFnZU51bWJlciAtIDIpICsgJ3B4JztcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGFnZU51bWJlci0tO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU5hdigpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGYWRlSW5PdXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzY3JvbGxUbyh0YXJnZXRQYWdlTnVtYmVyKSB7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgIT09IHRhcmdldFBhZ2VOdW1iZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBhZ2VOdW1iZXIgPiB0YXJnZXRQYWdlTnVtYmVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFVwKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbERvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNyZWF0ZU5hdigpIHtcclxuICAgICAgICBjb25zdCBwYWdlTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcGFnZU5hdi5jbGFzc05hbWUgPSAnbmF2LWRvdC1jb250YWluZXInO1xyXG4gICAgICAgIHRoaXMucGFnZXMuYXBwZW5kQ2hpbGQocGFnZU5hdik7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsUGFnZU51bWJlcjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhZ2VOYXYuaW5uZXJIVE1MICs9ICc8cCBjbGFzcz1cIm5hdi1kb3RcIj48c3Bhbj48L3NwYW4+PC9wPic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG5hdkRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduYXYtZG90Jyk7XHJcbiAgICAgICAgdGhpcy5uYXZEb3RzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobmF2RG90cyk7XHJcbiAgICAgICAgdGhpcy5uYXZEb3RzWzBdLmNsYXNzTGlzdC5hZGQoJ2RvdC1hY3RpdmUnKTtcclxuICAgICAgICB0aGlzLm5hdkRvdHMuZm9yRWFjaCgoZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUbyhpbmRleCArIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uYXZEb3RzLmZvckVhY2goKGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ2RvdC1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKCdkb3QtYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlTmF2KCkge1xyXG4gICAgICAgIHRoaXMubmF2RG90cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnZG90LWFjdGl2ZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubmF2RG90c1t0aGlzLmN1cnJlbnRQYWdlTnVtYmVyIC0gMV0uY2xhc3NMaXN0LmFkZCgnZG90LWFjdGl2ZScpO1xyXG4gICAgfVxyXG4gICAgcmVzaXplKCkge1xyXG4gICAgICAgIHRoaXMudmlld0hlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5wYWdlcy5zdHlsZS5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMucGFnZXMuc3R5bGUudG9wID0gLXRoaXMudmlld0hlaWdodCAqICh0aGlzLmN1cnJlbnRQYWdlTnVtYmVyIC0gMSkgKyAncHgnO1xyXG4gICAgfVxyXG4gICAgdGV4dEZhZGVJbk91dCgpIHtcclxuICAgICAgICBjb25zdCBjb250YWluZXJzRG9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGV4dC1jb250YWluZXInKTtcclxuICAgICAgICBsZXQgdGV4dENvbnRhaW5lcnMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChjb250YWluZXJzRG9tKTtcclxuICAgICAgICB0ZXh0Q29udGFpbmVycy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnaW4tc2lnaHQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgdGV4dENvbnRhaW5lckluU2lnaHQgPSB0ZXh0Q29udGFpbmVyc1t0aGlzLmN1cnJlbnRQYWdlTnVtYmVyIC0gMV07XHJcbiAgICAgICAgLy8gdGV4dENvbnRhaW5lckluU2lnaHQuY2xhc3NMaXN0LmFkZCgnaW4tc2lnaHQnKTtcclxuICAgIH1cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgbGV0IGhhbmRsZU1vdXNlV2hlZWwgPSBoZWxwZXIudGhyb3R0bGUodGhpcy5tb3VzZVNjcm9sbCwgMCwgdGhpcyk7XHJcbiAgICAgICAgbGV0IGhhbmRsZVJlc2l6ZSA9IGhlbHBlci5kZWJvdW5jZSh0aGlzLnJlc2l6ZSwgMCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wYWdlcy5zdHlsZS5oZWlnaHQgPSB0aGlzLnZpZXdIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTmF2KCk7XHJcbiAgICAgICAgdGhpcy50ZXh0RmFkZUluT3V0KCk7XHJcbiAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgaGFuZGxlTW91c2VXaGVlbCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NTW91c2VTY3JvbGwnLCBoYW5kbGVNb3VzZVdoZWVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlTW91c2VXaGVlbCk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgbGV0IGVuZFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RhcnRZIC0gZW5kWSA8IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGFydFkgLSBlbmRZID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxEb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRnVsbFNjcm9sbFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=