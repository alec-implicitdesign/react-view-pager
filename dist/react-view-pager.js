/*!
 * React View Pager 0.5.0-prerelease.8
 * https://github.com/souporserious/react-view-pager
 * Copyright (c) 2017 React View Pager Authors
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("resize-observer-polyfill"), require("get-prefix"), require("react-dom"), require("react-motion"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "resize-observer-polyfill", "get-prefix", "react-dom", "react-motion"], factory);
	else if(typeof exports === 'object')
		exports["ReactViewPager"] = factory(require("react"), require("resize-observer-polyfill"), require("get-prefix"), require("react-dom"), require("react-motion"));
	else
		root["ReactViewPager"] = factory(root["React"], root["ResizeObserver"], root["getPrefix"], root["ReactDOM"], root["ReactMotion"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.utils = exports.AnimatedView = exports.View = exports.Track = exports.Frame = exports.ViewPager = undefined;

	var _ViewPager2 = __webpack_require__(1);

	var _ViewPager3 = _interopRequireDefault(_ViewPager2);

	var _Frame2 = __webpack_require__(13);

	var _Frame3 = _interopRequireDefault(_Frame2);

	var _Track2 = __webpack_require__(19);

	var _Track3 = _interopRequireDefault(_Track2);

	var _View2 = __webpack_require__(20);

	var _View3 = _interopRequireDefault(_View2);

	var _AnimatedView2 = __webpack_require__(22);

	var _AnimatedView3 = _interopRequireDefault(_AnimatedView2);

	var _utils2 = __webpack_require__(11);

	var _utils3 = _interopRequireDefault(_utils2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.ViewPager = _ViewPager3.default;
	exports.Frame = _Frame3.default;
	exports.Track = _Track3.default;
	exports.View = _View3.default;
	exports.AnimatedView = _AnimatedView3.default;
	exports.utils = _utils3.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _Pager = __webpack_require__(3);

	var _Pager2 = _interopRequireDefault(_Pager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ViewPager = function (_Component) {
	  _inherits(ViewPager, _Component);

	  function ViewPager(props) {
	    _classCallCheck(this, ViewPager);

	    var _this = _possibleConstructorReturn(this, (ViewPager.__proto__ || Object.getPrototypeOf(ViewPager)).call(this, props));

	    var pager = new _Pager2.default();
	    var forceUpdate = function forceUpdate() {
	      return _this.forceUpdate();
	    };

	    // re-render the whole tree to update components on certain events
	    pager.on('viewChange', forceUpdate);
	    pager.on('hydrated', forceUpdate);

	    _this._pager = pager;
	    return _this;
	  }

	  _createClass(ViewPager, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        pager: this._pager
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;

	      // run a hydration on the next animation frame to obtain proper targets and positioning
	      requestAnimationFrame(function () {
	        _this2._pager.hydrate();
	      });
	    }
	  }, {
	    key: 'getInstance',
	    value: function getInstance() {
	      return this._pager;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          tag = _props.tag,
	          restProps = _objectWithoutProperties(_props, ['tag']);

	      return (0, _react.createElement)(tag, restProps);
	    }
	  }]);

	  return ViewPager;
	}(_react.Component);

	ViewPager.childContextTypes = {
	  pager: _react.PropTypes.instanceOf(_Pager2.default)
	};
	ViewPager.propTypes = {
	  tag: _react.PropTypes.string
	};
	ViewPager.defaultProps = {
	  tag: 'div'
	};
	exports.default = ViewPager;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _mitt = __webpack_require__(4);

	var _mitt2 = _interopRequireDefault(_mitt);

	var _tabbable = __webpack_require__(5);

	var _tabbable2 = _interopRequireDefault(_tabbable);

	var _animationBus = __webpack_require__(6);

	var _animationBus2 = _interopRequireDefault(_animationBus);

	var _resizeObserverPolyfill = __webpack_require__(9);

	var _resizeObserverPolyfill2 = _interopRequireDefault(_resizeObserverPolyfill);

	var _PagerElement3 = __webpack_require__(10);

	var _PagerElement4 = _interopRequireDefault(_PagerElement3);

	var _utils = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TRANSFORM = __webpack_require__(12)('transform');
	var isWindowDefined = typeof window !== 'undefined';

	var Track = function (_PagerElement) {
	  _inherits(Track, _PagerElement);

	  function Track() {
	    _classCallCheck(this, Track);

	    return _possibleConstructorReturn(this, (Track.__proto__ || Object.getPrototypeOf(Track)).apply(this, arguments));
	  }

	  _createClass(Track, [{
	    key: 'getStyles',
	    value: function getStyles(trackPosition) {
	      var _pager$getPositionVal = this.pager.getPositionValue(trackPosition),
	          x = _pager$getPositionVal.x,
	          y = _pager$getPositionVal.y;

	      var trackSize = this.pager.getTrackSize();
	      var style = _defineProperty({}, TRANSFORM, 'translate3d(' + x + 'px, ' + y + 'px, 0)');

	      if (trackSize) {
	        var _pager$options = this.pager.options,
	            axis = _pager$options.axis,
	            viewsToShow = _pager$options.viewsToShow;

	        var dimension = axis === 'x' ? 'width' : 'height';

	        style[dimension] = viewsToShow === 'auto' ? trackSize : this.pager.views.length / viewsToShow * 100 + '%';
	      }

	      return style;
	    }
	  }]);

	  return Track;
	}(_PagerElement4.default);

	var View = function (_PagerElement2) {
	  _inherits(View, _PagerElement2);

	  function View(_ref) {
	    var index = _ref.index,
	        restOptions = _objectWithoutProperties(_ref, ['index']);

	    _classCallCheck(this, View);

	    var _this2 = _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).call(this, restOptions));

	    _this2.index = index;
	    _this2.inBounds = true;
	    _this2.tabbableChildren = [];
	    _this2.setCurrent(false);
	    _this2.setVisible(false);
	    _this2.setTarget();
	    _this2.setOrigin();

	    // TODO: look into getting rid of setTimeout
	    // not sure the reason for needing setTimeout in order to get proper children,
	    // might be due to something in React that we're not doing at the right time
	    setTimeout(function () {
	      _this2.tabbableChildren = (0, _tabbable2.default)(_this2.node);
	      _this2.setTabbableChildren();
	    });
	    return _this2;
	  }

	  _createClass(View, [{
	    key: 'setCurrent',
	    value: function setCurrent(isCurrent) {
	      this.isCurrent = isCurrent;
	    }
	  }, {
	    key: 'setVisible',
	    value: function setVisible(isVisible) {
	      this.isVisible = isVisible;
	      this.setTabbableChildren();
	    }
	  }, {
	    key: 'setTabbableChildren',
	    value: function setTabbableChildren() {
	      // only allow tabbing in current slides
	      for (var i = 0; i < this.tabbableChildren.length; i++) {
	        this.tabbableChildren[i].tabIndex = this.isCurrent ? 0 : -1;
	      }
	    }
	  }, {
	    key: 'setTarget',
	    value: function setTarget() {
	      var _pager$options2 = this.pager.options,
	          align = _pager$options2.align,
	          viewsToShow = _pager$options2.viewsToShow;

	      var target = this.pager.getStartCoords(this.index);

	      if (align) {
	        target += this.pager.getAlignOffset(this);
	      }

	      this.target = target;
	    }
	  }, {
	    key: 'setOrigin',
	    value: function setOrigin() {
	      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.pager.trackPosition;

	      this.origin = this.target - trackPosition;
	    }
	  }, {
	    key: 'getStyles',
	    value: function getStyles() {
	      var _pager$options3 = this.pager.options,
	          axis = _pager$options3.axis,
	          viewsToShow = _pager$options3.viewsToShow,
	          infinite = _pager$options3.infinite;

	      var style = {};

	      // we need to position views inline when using the x axis
	      if (axis === 'x') {
	        style.display = 'inline-block';
	        style.verticalAlign = 'top';
	      }

	      // set width or height on view when viewsToShow is not auto
	      if (viewsToShow !== 'auto') {
	        style[axis === 'x' ? 'width' : 'height'] = 100 / this.pager.views.length + '%';
	      }

	      // make sure view stays in frame when using infinite option
	      if (infinite && !this.inBounds) {
	        style.position = 'relative';
	        style[axis === 'y' ? 'top' : 'left'] = this.getPosition();
	      }

	      // finally, apply any animations
	      return _extends({}, style, this.pager.animationBus.getStyles(this));
	    }
	  }]);

	  return View;
	}(_PagerElement4.default);

	var defaultOptions = {
	  viewsToShow: 1,
	  viewsToMove: 1,
	  align: 0,
	  contain: false,
	  axis: 'x',
	  autoSize: false,
	  animations: [],
	  infinite: false,
	  instant: false,
	  swipe: true,
	  swipeThreshold: 0.5,
	  flickTimeout: 300,
	  accessibility: true
	};

	var Pager = function () {
	  function Pager() {
	    var _this3 = this;

	    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    _classCallCheck(this, Pager);

	    this.hydrate = function () {
	      _this3.frame.setSize();
	      _this3.track.setSize();
	      _this3.views.forEach(function (view) {
	        view.setSize();
	        view.setTarget();
	      });
	      _this3.setPositionValue();
	      _this3.setViewStyles();
	      _this3.emit('hydrated');
	    };

	    var emitter = (0, _mitt2.default)();

	    this.on = emitter.on;
	    this.emit = emitter.emit;
	    this.off = emitter.off;

	    this.views = [];
	    this.currentIndex = 0;
	    this.currentView = null;
	    this.currentTween = 0;
	    this.trackPosition = 0;
	    this.isSwiping = false;

	    this.options = _extends({}, defaultOptions, options);

	    this.animationBus = new _animationBus2.default({
	      animations: this.options.animations,
	      origin: function origin(view) {
	        return view.origin;
	      }
	    });

	    if (isWindowDefined) {
	      this.resizeObserver = new _resizeObserverPolyfill2.default(function () {
	        _this3.hydrate();
	      });
	    }
	  }

	  _createClass(Pager, [{
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var lastOptions = this.options;

	      // spread new options over the old ones
	      this.options = _extends({}, this.options, options);

	      // merge animations into animation bus
	      this.animationBus.animations = this.options.animations;

	      // fire a viewChange event with the new indicies if viewsToShow has changed
	      if (lastOptions.viewsToShow !== this.options.viewsToShow) {
	        this.emit('viewChange', this.getCurrentIndicies());
	      }
	    }
	  }, {
	    key: 'addFrame',
	    value: function addFrame(node) {
	      this.frame = new _PagerElement4.default({
	        node: node,
	        pager: this
	      });
	    }
	  }, {
	    key: 'addTrack',
	    value: function addTrack(node) {
	      this.track = new Track({
	        node: node,
	        pager: this
	      });
	    }
	  }, {
	    key: 'addView',
	    value: function addView(node) {
	      var index = this.views.length;
	      var view = new View({
	        node: node,
	        index: index,
	        pager: this
	      });

	      // add view to collection
	      this.views.push(view);

	      // set this as the first view if there isn't one yet
	      if (!this.currentView) {
	        this.setCurrentView({
	          index: index,
	          suppressEvent: true
	        });
	      }

	      // listen for width and height changes
	      if (isWindowDefined) {
	        this.resizeObserver.observe(node);
	      }

	      // fire an event
	      this.emit('viewAdded');

	      return view;
	    }
	  }, {
	    key: 'removeView',
	    value: function removeView(view) {
	      // filter out view
	      this.views = this.views.filter(function (_view) {
	        return view !== _view;
	      });

	      // stop observing node
	      if (isWindowDefined) {
	        this.resizeObserver.disconnect(view.node);
	      }

	      // fire an event
	      this.emit('viewRemoved');
	    }
	  }, {
	    key: 'prev',
	    value: function prev() {
	      this.setCurrentView({ direction: -1 });
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      this.setCurrentView({ direction: 1 });
	    }
	  }, {
	    key: 'setCurrentView',
	    value: function setCurrentView(_ref2) {
	      var _ref2$direction = _ref2.direction,
	          direction = _ref2$direction === undefined ? 0 : _ref2$direction,
	          _ref2$index = _ref2.index,
	          index = _ref2$index === undefined ? this.currentIndex : _ref2$index,
	          _ref2$suppressEvent = _ref2.suppressEvent,
	          suppressEvent = _ref2$suppressEvent === undefined ? false : _ref2$suppressEvent;
	      var _options = this.options,
	          viewsToMove = _options.viewsToMove,
	          infinite = _options.infinite;

	      var newIndex = index + direction * viewsToMove;

	      var previousIndex = this.currentIndex;
	      var currentIndex = infinite ? newIndex : (0, _utils.clamp)(newIndex, 0, this.views.length - 1);

	      var previousView = this.getView(previousIndex);
	      var currentView = this.getView(currentIndex);

	      // set current index and view
	      this.currentIndex = currentIndex;
	      this.currentView = currentView;

	      // swap current view flags
	      previousView.setCurrent(false);
	      currentView.setCurrent(true);

	      var rangeStart = currentIndex;
	      var rangeEnd = currentIndex + viewsToMove - 1;
	      var viewRange = (0, _utils.range)(rangeStart, rangeEnd, this.views.length);

	      // set flags for which views are currently showing
	      this.views.forEach(function (view, index) {
	        view.setVisible(index === currentIndex);
	      });

	      // set the track position to the new view
	      this.setPositionValue();

	      if (!suppressEvent) {
	        this.emit('viewChange', this.getCurrentIndicies());
	      }
	    }
	  }, {
	    key: 'setPositionValue',
	    value: function setPositionValue() {
	      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentView ? this.currentView.target : 0;

	      if (!this.isSwiping) {
	        var _options2 = this.options,
	            viewsToShow = _options2.viewsToShow,
	            autoSize = _options2.autoSize,
	            infinite = _options2.infinite,
	            contain = _options2.contain;

	        var trackSize = this.getTrackSize();

	        if (infinite) {
	          // we offset by a track multiplier so infinite animation can take advantage of
	          // physics by animating to a large value, the final value provided in getTransformValue
	          // will return the proper wrapped value
	          trackPosition -= (Math.floor(this.currentIndex / this.views.length) || 0) * trackSize;
	        }

	        if (contain) {
	          var trackEndOffset = viewsToShow === 'auto' && autoSize || viewsToShow <= 1 ? 0 : this.getFrameSize({ autoSize: false });
	          trackPosition = (0, _utils.clamp)(trackPosition, trackEndOffset - trackSize, 0);
	        }
	      }

	      this.trackPosition = trackPosition;
	    }
	  }, {
	    key: 'setViewStyles',
	    value: function setViewStyles() {
	      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var _options3 = this.options,
	          infinite = _options3.infinite,
	          align = _options3.align;

	      var frameSize = this.getFrameSize();
	      var trackSize = this.getTrackSize();
	      var wrappedtrackPosition = (0, _utils.modulo)(trackPosition, -trackSize);

	      this.views.reduce(function (lastPosition, view, index) {
	        var viewSize = view.getSize();
	        var nextPosition = lastPosition + viewSize;
	        var position = lastPosition;

	        // impd: setting the align attribute directly (to -0.5) caused the initial order of the Views to be offset.
	        // it was necessary to set the align variable to -0.5 here so that the Views would transition smoothly over the edges
	        if (nextPosition + viewSize * -0.5 < Math.abs(wrappedtrackPosition)) {
	          // shift views around so they are always visible in frame
	          if (infinite) {
	            position += trackSize - lastPosition;
	          }
	          view.inBounds = false;
	        } else {
	          view.inBounds = true;
	        }

	        view.setPosition(position);
	        view.setOrigin(trackPosition);

	        return nextPosition;
	      }, 0);
	    }
	  }, {
	    key: 'getNumericViewsToShow',
	    value: function getNumericViewsToShow() {
	      return isNaN(this.options.viewsToShow) ? 1 : this.options.viewsToShow;
	    }
	  }, {
	    key: 'getMaxDimensions',
	    value: function getMaxDimensions(indices) {
	      var _this4 = this;

	      var axis = this.options.axis;

	      var widths = [];
	      var heights = [];

	      indices.forEach(function (index) {
	        var view = isNaN(index) ? index : _this4.getView(index);
	        widths.push(view.getSize('width'));
	        heights.push(view.getSize('height'));
	      });

	      return {
	        width: axis === 'x' ? (0, _utils.sum)(widths) : (0, _utils.max)(widths),
	        height: axis === 'y' ? (0, _utils.sum)(heights) : (0, _utils.max)(heights)
	      };
	    }
	  }, {
	    key: 'getCurrentIndicies',
	    value: function getCurrentIndicies() {
	      var _options4 = this.options,
	          infinite = _options4.infinite,
	          contain = _options4.contain;

	      var currentViews = [];
	      var viewsToShow = isNaN(this.options.viewsToShow) ? 1 : this.options.viewsToShow;
	      var minIndex = this.currentIndex;
	      var maxIndex = this.currentIndex + (viewsToShow - 1);

	      if (contain) {
	        // if containing, we need to clamp the start and end indexes so we only return what's in view
	        minIndex = (0, _utils.clamp)(minIndex, 0, this.views.length - viewsToShow);
	        maxIndex = (0, _utils.clamp)(maxIndex, 0, this.views.length - 1);
	        for (var i = minIndex; i <= maxIndex; i++) {
	          currentViews.push(i);
	        }
	      } else {
	        for (var _i = minIndex; _i <= maxIndex; _i++) {
	          currentViews.push(infinite ? (0, _utils.modulo)(_i, this.views.length) : (0, _utils.clamp)(_i, 0, this.views.length - 1));
	        }
	      }

	      return currentViews;
	    }
	  }, {
	    key: 'getFrameSize',
	    value: function getFrameSize() {
	      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	          _ref3$autoSize = _ref3.autoSize,
	          autoSize = _ref3$autoSize === undefined ? this.options.autoSize : _ref3$autoSize,
	          _ref3$fullSize = _ref3.fullSize,
	          fullSize = _ref3$fullSize === undefined ? false : _ref3$fullSize;

	      var dimensions = {
	        width: 0,
	        height: 0
	      };

	      if (this.views.length) {
	        if (autoSize) {
	          var currentViews = this.getCurrentIndicies();
	          dimensions = this.getMaxDimensions(currentViews);
	        } else if (this.frame) {
	          dimensions = {
	            width: this.frame.getSize('width'),
	            height: this.frame.getSize('height')
	          };
	        }
	      }

	      if (fullSize) {
	        return dimensions;
	      } else {
	        return dimensions[this.options.axis === 'x' ? 'width' : 'height'];
	      }
	    }
	  }, {
	    key: 'getTrackSize',
	    value: function getTrackSize() {
	      var includeLastSlide = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      var lastIndex = includeLastSlide ? this.views.length : this.views.length - 1;
	      var size = 0;
	      this.views.slice(0, lastIndex).forEach(function (view) {
	        size += view.getSize();
	      });
	      return size;
	    }
	  }, {
	    key: 'getView',
	    value: function getView(index) {
	      return this.views[(0, _utils.modulo)(index, this.views.length)];
	    }

	    // where the view should start

	  }, {
	    key: 'getStartCoords',
	    value: function getStartCoords(index) {
	      var target = 0;
	      this.views.slice(0, index).forEach(function (view) {
	        target -= view.getSize();
	      });
	      return target;
	    }

	    // how much to offset the view defined by the align option

	  }, {
	    key: 'getAlignOffset',
	    value: function getAlignOffset(view) {
	      var frameSize = this.getFrameSize({ autoSize: false });
	      var viewSize = view.getSize();
	      return (frameSize - viewSize) * this.options.align;
	    }
	  }, {
	    key: 'getPositionValue',
	    value: function getPositionValue() {
	      var trackPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.trackPosition;
	      var _options5 = this.options,
	          infinite = _options5.infinite,
	          contain = _options5.contain;

	      var position = { x: 0, y: 0 };

	      // store the current animated value so we can reference it later
	      this.currentTween = trackPosition;

	      // wrap the track position if this is an infinite track
	      if (infinite) {
	        var trackSize = this.getTrackSize();
	        trackPosition = (0, _utils.modulo)(trackPosition, -trackSize) || 0;
	      }

	      // emit a "scroll" event so we can do things based on the progress of the track
	      this.emit('scroll', {
	        progress: trackPosition / this.getTrackSize(false),
	        position: trackPosition
	      });

	      // set the proper transform axis based on our options
	      position[this.options.axis] = trackPosition;

	      return position;
	    }
	  }, {
	    key: 'resetViewIndex',
	    value: function resetViewIndex() {
	      // reset back to a normal index
	      this.setCurrentView({
	        index: (0, _utils.modulo)(this.currentIndex, this.views.length),
	        suppressEvent: true
	      });
	    }
	  }]);

	  return Pager;
	}();

	exports.default = Pager;
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	function n(n) {
	  function o(o) {
	    var t = o.toLowerCase();return n[t] || (n[t] = []);
	  }return n = n || {}, { on: function on(n, t) {
	      o(n).push(t);
	    }, off: function off(n, t) {
	      var c = o(n),
	          f = c.indexOf(t);~f && c.splice(f, 1);
	    }, emit: function emit(n, t) {
	      o("*").concat(o(n)).forEach(function (n) {
	        n(t);
	      });
	    } };
	}module.exports = n;
	//# sourceMappingURL=mitt.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (el) {
	  var basicTabbables = [];
	  var orderedTabbables = [];

	  // A node is "available" if
	  // - it's computed style
	  var isUnavailable = createIsUnavailable();

	  var candidateSelectors = ['input', 'select', 'a[href]', 'textarea', 'button', '[tabindex]'];

	  var candidates = el.querySelectorAll(candidateSelectors);

	  var candidate, candidateIndex;
	  for (var i = 0, l = candidates.length; i < l; i++) {
	    candidate = candidates[i];
	    candidateIndex = candidate.tabIndex;

	    if (candidateIndex < 0 || candidate.tagName === 'INPUT' && candidate.type === 'hidden' || candidate.disabled || isUnavailable(candidate)) {
	      continue;
	    }

	    if (candidateIndex === 0) {
	      basicTabbables.push(candidate);
	    } else {
	      orderedTabbables.push({
	        tabIndex: candidateIndex,
	        node: candidate
	      });
	    }
	  }

	  var tabbableNodes = orderedTabbables.sort(function (a, b) {
	    return a.tabIndex - b.tabIndex;
	  }).map(function (a) {
	    return a.node;
	  });

	  Array.prototype.push.apply(tabbableNodes, basicTabbables);

	  return tabbableNodes;
	};

	function createIsUnavailable() {
	  // Node cache must be refreshed on every check, in case
	  // the content of the element has changed
	  var isOffCache = [];

	  // "off" means `display: none;`, as opposed to "hidden",
	  // which means `visibility: hidden;`. getComputedStyle
	  // accurately reflects visiblity in context but not
	  // "off" state, so we need to recursively check parents.

	  function isOff(node, nodeComputedStyle) {
	    if (node === document.documentElement) return false;

	    // Find the cached node (Array.prototype.find not available in IE9)
	    for (var i = 0, length = isOffCache.length; i < length; i++) {
	      if (isOffCache[i][0] === node) return isOffCache[i][1];
	    }

	    nodeComputedStyle = nodeComputedStyle || window.getComputedStyle(node);

	    var result = false;

	    if (nodeComputedStyle.display === 'none') {
	      result = true;
	    } else if (node.parentNode) {
	      result = isOff(node.parentNode);
	    }

	    isOffCache.push([node, result]);

	    return result;
	  }

	  return function isUnavailable(node) {
	    if (node === document.documentElement) return false;

	    var computedStyle = window.getComputedStyle(node);

	    if (isOff(node, computedStyle)) return true;

	    return computedStyle.visibility === 'hidden';
	  };
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _polylinearScale = __webpack_require__(7);

	var _polylinearScale2 = _interopRequireDefault(_polylinearScale);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var transformUnits = {
	  perspective: 'px',
	  rotate: 'deg',
	  rotateX: 'deg',
	  rotateY: 'deg',
	  rotateZ: 'deg',
	  scale: '',
	  scaleX: '',
	  scaleY: '',
	  scaleZ: '',
	  skew: 'deg',
	  skewX: 'deg',
	  skewY: 'deg',
	  translateX: 'px',
	  translateY: 'px',
	  translateZ: 'px'
	};
	var transformKeys = Object.keys(transformUnits);

	var AnimationBus = function () {
	  function AnimationBus(_ref) {
	    var animations = _ref.animations,
	        element = _ref.element,
	        origin = _ref.origin;

	    _classCallCheck(this, AnimationBus);

	    this.animations = animations;
	    this.element = element;
	    this.origin = origin;
	  }

	  _createClass(AnimationBus, [{
	    key: 'getStyles',
	    value: function getStyles() {
	      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

	      var origin = this.origin(element);
	      var transformValues = [];
	      var styles = {};

	      this.animations.forEach(function (animation) {
	        var prop = animation.prop;
	        var unit = animation.unit || transformUnits[prop] || '';
	        var value = (0, _polylinearScale2.default)(animation.stops)(origin);

	        if (transformKeys.indexOf(prop) > -1) {
	          transformValues.push(prop + '(' + value + unit + ')');
	        } else {
	          styles[prop] = '' + value + unit;
	        }
	      });

	      if (transformValues.length) {
	        styles.transform = transformValues.join(' ');
	      }

	      return styles;
	    }
	  }, {
	    key: 'applyStyles',
	    value: function applyStyles() {
	      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.element;

	      var styles = this.getStyles(element);
	      Object.keys(styles).forEach(function (key) {
	        return element.style[key] = styles[key];
	      });
	    }
	  }]);

	  return AnimationBus;
	}();

	exports.default = AnimationBus;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	var _slicedToArray = function () {
	  function sliceIterator(arr, i) {
	    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
	      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
	        _arr.push(_s.value);if (i && _arr.length === i) break;
	      }
	    } catch (err) {
	      _d = true;_e = err;
	    } finally {
	      try {
	        if (!_n && _i["return"]) _i["return"]();
	      } finally {
	        if (_d) throw _e;
	      }
	    }return _arr;
	  }return function (arr, i) {
	    if (Array.isArray(arr)) {
	      return arr;
	    } else if (Symbol.iterator in Object(arr)) {
	      return sliceIterator(arr, i);
	    } else {
	      throw new TypeError("Invalid attempt to destructure non-iterable instance");
	    }
	  };
	}();

	exports.default = polylinearScale;

	var _piecewise = __webpack_require__(8);

	var _piecewise2 = _interopRequireDefault(_piecewise);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function polylinearScale(stops) {
	  var xs = [];
	  var ys_r = [];
	  var ys_g = [];
	  var ys_b = [];

	  stops.forEach(function (_ref) {
	    var _ref2 = _slicedToArray(_ref, 2),
	        domain = _ref2[0],
	        range = _ref2[1];

	    xs.push(domain);
	    if (isNaN(range)) {
	      ys_r.push(parseInt(range.substr(1, 2), 16));
	      ys_g.push(parseInt(range.substr(3, 2), 16));
	      ys_b.push(parseInt(range.substr(5, 2), 16));
	    } else {
	      ys_r.push(range);
	    }
	  });

	  var pw_r = (0, _piecewise2.default)(xs, ys_r);

	  if (ys_g.length && ys_b.length) {
	    var _ret = function () {
	      var pw_g = (0, _piecewise2.default)(xs, ys_g);
	      var pw_b = (0, _piecewise2.default)(xs, ys_b);
	      return {
	        v: function v(x) {
	          return 'rgb(' + Math.round(pw_r(x)) + ', ' + Math.round(pw_g(x)) + ', ' + Math.round(pw_b(x)) + ')';
	        }
	      };
	    }();

	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  } else {
	    return function (x) {
	      return pw_r(x);
	    };
	  }
	}
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = piecewise;
	function piecewise(xs, ys) {
	  return function (x) {
	    // out of bounds
	    if (x <= xs[0]) {
	      return ys[0];
	    } else if (x >= xs[xs.length - 1]) {
	      return ys[xs.length - 1];
	    }

	    // bisect
	    var lo = 0;
	    var hi = xs.length - 1;

	    while (hi - lo > 1) {
	      var mid = lo + hi >> 1;
	      if (x < xs[mid]) {
	        hi = mid;
	      } else {
	        lo = mid;
	      }
	    }

	    // project
	    return ys[lo] + (ys[hi] - ys[lo]) / (xs[hi] - xs[lo]) * (x - xs[lo]);
	  };
	}
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var PagerElement = function () {
	  function PagerElement(_ref) {
	    var node = _ref.node,
	        pager = _ref.pager,
	        width = _ref.width,
	        height = _ref.height;

	    _classCallCheck(this, PagerElement);

	    this.node = node;
	    this.pager = pager;
	    this.x = this.y = 0;
	    this.setSize(width, height);
	  }

	  _createClass(PagerElement, [{
	    key: 'setSize',
	    value: function setSize(width, height) {
	      this.width = width || this.node.offsetWidth;
	      this.height = height || this.node.offsetHeight;
	    }
	  }, {
	    key: 'setPosition',
	    value: function setPosition(position) {
	      this[this.pager.options.axis] = position;
	    }
	  }, {
	    key: 'getSize',
	    value: function getSize(dimension) {
	      if (dimension === 'width' || dimension === 'height') {
	        return this[dimension];
	      } else {
	        var axis = this.pager.options.axis;
	        return this[axis === 'x' ? 'width' : 'height'];
	      }
	    }
	  }, {
	    key: 'getPosition',
	    value: function getPosition() {
	      return this[this.pager.options.axis];
	    }
	  }]);

	  return PagerElement;
	}();

	exports.default = PagerElement;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.modulo = modulo;
	exports.clamp = clamp;
	exports.sum = sum;
	exports.max = max;
	exports.range = range;

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function modulo(val, max) {
	  return (val % max + max) % max;
	}

	function clamp(val, min, max) {
	  return Math.min(Math.max(min, val), max);
	}

	function sum(arr) {
	  return arr.reduce(function (a, b) {
	    return a + b;
	  }, 0);
	}

	function max(arr) {
	  return Math.max.apply(null, arr);
	}

	function range(start, end, max) {
	  return [].concat(_toConsumableArray(Array(1 + end - start).keys())).map(function (v) {
	    return max ? modulo(start + v, max) : start + v;
	  });
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactMotion = __webpack_require__(15);

	var _Pager = __webpack_require__(3);

	var _Pager2 = _interopRequireDefault(_Pager);

	var _Swipe = __webpack_require__(16);

	var _Swipe2 = _interopRequireDefault(_Swipe);

	var _Keyboard = __webpack_require__(17);

	var _Keyboard2 = _interopRequireDefault(_Keyboard);

	var _specialAssign = __webpack_require__(18);

	var _specialAssign2 = _interopRequireDefault(_specialAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var checkedProps = {
	  tag: _react.PropTypes.any,
	  autoSize: _react.PropTypes.oneOf([true, false, 'width', 'height']),
	  accessibility: _react.PropTypes.bool,
	  springConfig: _react.PropTypes.objectOf(_react.PropTypes.number)
	};

	var Frame = function (_Component) {
	  _inherits(Frame, _Component);

	  function Frame(props) {
	    _classCallCheck(this, Frame);

	    var _this = _possibleConstructorReturn(this, (Frame.__proto__ || Object.getPrototypeOf(Frame)).call(this, props));

	    _this._setFrameSize = function () {
	      var frameSize = _this.context.pager.getFrameSize({ fullSize: true });

	      if (frameSize.width && frameSize.height) {
	        _this.setState(frameSize, function () {
	          // we need to unset the instant flag now that React Motion has dimensions to animate to
	          if (_this.state.instant) {
	            _this.setState({ instant: false });
	          }
	        });
	      }
	    };

	    _this.state = {
	      width: 0,
	      height: 0,
	      instant: true
	    };
	    _this._hydrate = false;
	    return _this;
	  }

	  _createClass(Frame, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var pager = this.context.pager;
	      var _props = this.props,
	          autoSize = _props.autoSize,
	          accessibility = _props.accessibility;


	      pager.setOptions({ autoSize: autoSize, accessibility: accessibility });

	      this._swipe = new _Swipe2.default(pager);
	      this._keyboard = new _Keyboard2.default(pager);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var pager = this.context.pager;


	      pager.addFrame((0, _reactDom.findDOMNode)(this));

	      // set frame size initially and then based on certain pager events
	      this._setFrameSize();
	      pager.on('viewChange', this._setFrameSize);
	      pager.on('hydrated', this._setFrameSize);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref) {
	      var autoSize = _ref.autoSize,
	          accessibility = _ref.accessibility;

	      // update any options that have changed
	      if (this.props.autoSize !== autoSize || this.props.accessibility !== accessibility) {
	        this.context.pager.setOptions({ autoSize: autoSize, accessibility: accessibility });
	        this._hydrate = true;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(nextProps) {
	      if (this._hydrate) {
	        this.context.pager.hydrate();
	        this._hydrate = false;
	      }
	    }
	  }, {
	    key: '_getFrameStyle',
	    value: function _getFrameStyle() {
	      var springConfig = this.props.springConfig;
	      var _state = this.state,
	          width = _state.width,
	          height = _state.height,
	          instant = _state.instant;

	      return {
	        maxWidth: instant ? width : (0, _reactMotion.spring)(width, springConfig),
	        height: instant ? height : (0, _reactMotion.spring)(height, springConfig)
	      };
	    }
	  }, {
	    key: '_renderFrame',
	    value: function _renderFrame(style) {
	      var pager = this.context.pager;
	      var _props2 = this.props,
	          tag = _props2.tag,
	          accessibility = _props2.accessibility;

	      var props = (0, _specialAssign2.default)(_extends({}, this._swipe.getEvents(), this._keyboard.getEvents(), {
	        tabIndex: accessibility ? 0 : null
	      }), this.props, checkedProps);

	      return (0, _react.createElement)(tag, _extends({}, props, {
	        style: _extends({}, style, props.style)
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var autoSize = this.props.autoSize;
	      var height = this.state.height;

	      var style = {
	        position: 'relative',
	        overflow: 'hidden'
	      };

	      if (autoSize) {
	        return _react2.default.createElement(
	          _reactMotion.Motion,
	          { style: this._getFrameStyle() },
	          function (dimensions) {
	            if ((autoSize === true || autoSize === 'width') && dimensions.maxWidth) {
	              style.maxWidth = dimensions.maxWidth;
	            }
	            if ((autoSize === true || autoSize === 'height') && dimensions.height) {
	              style.height = dimensions.height;
	            }
	            return _this2._renderFrame(style);
	          }
	        );
	      } else {
	        return this._renderFrame(style);
	      }
	    }
	  }]);

	  return Frame;
	}(_react.Component);

	Frame.contextTypes = {
	  pager: _react.PropTypes.instanceOf(_Pager2.default)
	};
	Frame.propTypes = checkedProps;
	Frame.defaultProps = {
	  tag: 'div',
	  autoSize: false,
	  accessibility: true,
	  springConfig: _reactMotion.presets.noWobble
	};
	exports.default = Frame;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function getTouchEvent(e) {
	  return e.touches && e.touches[0] || e;
	}

	var Swipe = function () {
	  function Swipe(pager) {
	    var _this = this;

	    _classCallCheck(this, Swipe);

	    this._onSwipeStart = function (e) {
	      var _getTouchEvent = getTouchEvent(e),
	          pageX = _getTouchEvent.pageX,
	          pageY = _getTouchEvent.pageY;

	      // we're now swiping


	      _this.pager.isSwiping = true;

	      // store the initial starting coordinates
	      _this._swipeStart = {
	        x: pageX,
	        y: pageY
	      };

	      // reset swipeDiff
	      _this._swipeDiff = {
	        x: 0,
	        y: 0
	      };

	      // determine if a flick or not
	      _this._isFlick = true;

	      setTimeout(function () {
	        _this._isFlick = false;
	      }, _this.pager.options.flickTimeout);

	      _this.pager.emit('swipeStart');
	    };

	    this._onSwipeMove = function (e) {
	      // bail if we aren't swiping
	      if (!_this.pager.isSwiping) return;

	      var _pager$options = _this.pager.options,
	          swipeThreshold = _pager$options.swipeThreshold,
	          axis = _pager$options.axis;

	      var _getTouchEvent2 = getTouchEvent(e),
	          pageX = _getTouchEvent2.pageX,
	          pageY = _getTouchEvent2.pageY;

	      // grab the current position of the track before


	      if (!_this._trackStart) {
	        _this._trackStart = _this.pager.currentTween;
	      }

	      // determine how much we have moved
	      _this._swipeDiff = {
	        x: _this._swipeStart.x - pageX,
	        y: _this._swipeStart.y - pageY
	      };

	      if (_this._isSwipe(swipeThreshold)) {
	        e.preventDefault();
	        e.stopPropagation();

	        var swipeDiff = _this._swipeDiff[axis];
	        var trackPosition = _this._trackStart - swipeDiff;

	        _this.pager.setPositionValue(trackPosition);

	        _this.pager.emit('swipeMove');
	      }
	    };

	    this._onSwipeEnd = function () {
	      var _pager$options2 = _this.pager.options,
	          swipeThreshold = _pager$options2.swipeThreshold,
	          viewsToMove = _pager$options2.viewsToMove,
	          axis = _pager$options2.axis,
	          infinite = _pager$options2.infinite;

	      var threshold = _this._isFlick ? swipeThreshold : _this.pager.currentView.getSize() * viewsToMove * swipeThreshold;

	      // we've stopped swiping
	      _this.pager.isSwiping = false;

	      // reset start track so we can grab it again on the next swipe
	      _this._trackStart = false;

	      // don't move anything if there hasn't been an attempted swipe
	      if (_this._swipeDiff.x || _this._swipeDiff.y) {
	        // determine if we've passed the defined threshold
	        if (_this._isSwipe(threshold)) {
	          if (_this._swipeDiff[axis] < 0) {
	            _this.pager.prev();
	          } else {
	            _this.pager.next();
	          }
	        }
	        // if we didn't, reset back to original view
	        else {
	            _this.pager.setPositionValue();
	          }
	      }

	      _this.pager.emit('swipeEnd');
	    };

	    this._onSwipePast = function () {
	      // perform a swipe end if we swiped past the component
	      if (_this.pager.isSwiping) {
	        _this._onSwipeEnd();
	      }
	    };

	    this.pager = pager;
	    this._trackStart = false;
	    this._swipeStart = this._swipeDiff = {
	      x: 0,
	      y: 0
	    };
	  }

	  _createClass(Swipe, [{
	    key: '_isSwipe',
	    value: function _isSwipe(threshold) {
	      var _swipeDiff = this._swipeDiff,
	          x = _swipeDiff.x,
	          y = _swipeDiff.y;

	      return this.pager.options.axis === 'x' ? Math.abs(x) > Math.max(threshold, Math.abs(y)) : Math.abs(x) < Math.max(threshold, Math.abs(y));
	    }
	  }, {
	    key: 'getEvents',
	    value: function getEvents() {
	      var swipe = this.pager.options.swipe;

	      var swipeEvents = {};

	      if (swipe === true || swipe === 'mouse') {
	        swipeEvents.onMouseDown = this._onSwipeStart;
	        swipeEvents.onMouseMove = this._onSwipeMove;
	        swipeEvents.onMouseUp = this._onSwipeEnd;
	        swipeEvents.onMouseLeave = this._onSwipePast;
	      }

	      if (swipe === true || swipe === 'touch') {
	        swipeEvents.onTouchStart = this._onSwipeStart;
	        swipeEvents.onTouchMove = this._onSwipeMove;
	        swipeEvents.onTouchEnd = this._onSwipeEnd;
	      }

	      return swipeEvents;
	    }
	  }]);

	  return Swipe;
	}();

	exports.default = Swipe;
	module.exports = exports['default'];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Keyboard = function () {
	  function Keyboard(pager) {
	    var _this = this;

	    _classCallCheck(this, Keyboard);

	    this._handleKeyDown = function (e) {
	      // handle respective key controls
	      switch (e.key) {
	        // move to the previous view
	        case 'ArrowUp':
	        case 'ArrowLeft':
	          _this.pager.prev();
	          return;

	        // move to the next view
	        case 'ArrowDown':
	        case 'ArrowRight':
	        case ' ':
	          _this.pager.next();
	          return;

	        // move to first view
	        case 'Home':
	          _this.pager.setCurrentView({ index: 0 });
	          return;

	        // move to last view
	        case 'End':
	          _this.pager.setCurrentView({ index: _this.pager.views.length - 1 });
	          return;
	      }

	      // 1 - 9 keys mapped to respective slide number
	      var maxNumKey = (0, _utils.clamp)(_this.pager.views.length, 0, 9);

	      for (var i = 1; i <= maxNumKey; i++) {
	        if (+e.key === i) {
	          _this.pager.setCurrentView({ index: i - 1 });
	        }
	      }
	    };

	    this.pager = pager;
	  }

	  _createClass(Keyboard, [{
	    key: 'getEvents',
	    value: function getEvents() {
	      var keyboardEvents = {};

	      if (this.pager.options.accessibility) {
	        keyboardEvents.onKeyDown = this._handleKeyDown;
	      }

	      return keyboardEvents;
	    }
	  }]);

	  return Keyboard;
	}();

	exports.default = Keyboard;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = specialAssign;
	function specialAssign(a, b, reserved) {
	  for (var x in b) {
	    if (!b.hasOwnProperty(x) || reserved[x]) continue;
	    a[x] = b[x];
	  }
	  return a;
	}
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _reactMotion = __webpack_require__(15);

	var _Pager = __webpack_require__(3);

	var _Pager2 = _interopRequireDefault(_Pager);

	var _View = __webpack_require__(20);

	var _View2 = _interopRequireDefault(_View);

	var _getIndex = __webpack_require__(21);

	var _getIndex2 = _interopRequireDefault(_getIndex);

	var _specialAssign = __webpack_require__(18);

	var _specialAssign2 = _interopRequireDefault(_specialAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var noop = function noop() {
	  return null;
	};
	var checkedProps = {
	  tag: _react.PropTypes.any,
	  currentView: _react.PropTypes.any,
	  viewsToShow: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.oneOf(['auto'])]),
	  viewsToMove: _react.PropTypes.number,
	  align: _react.PropTypes.number,
	  contain: _react.PropTypes.bool,
	  axis: _react.PropTypes.oneOf(['x', 'y']),
	  animations: _react.PropTypes.array,
	  infinite: _react.PropTypes.bool,
	  instant: _react.PropTypes.bool,
	  swipe: _react.PropTypes.oneOf([true, false, 'mouse', 'touch']),
	  swipeThreshold: _react.PropTypes.number,
	  flickTimeout: _react.PropTypes.number,
	  // rightToLeft: PropTypes.bool,
	  // lazyLoad: PropTypes.bool,
	  springConfig: _react.PropTypes.objectOf(_react.PropTypes.number),
	  onSwipeStart: _react.PropTypes.func,
	  onSwipeMove: _react.PropTypes.func,
	  onSwipeEnd: _react.PropTypes.func,
	  onScroll: _react.PropTypes.func,
	  onViewChange: _react.PropTypes.func,
	  onRest: _react.PropTypes.func
	};
	var isNotEqual = function isNotEqual(current, next) {
	  return current.viewsToShow !== next.viewsToShow || current.viewsToMove !== next.viewsToMove || current.align !== next.align || current.axis !== next.axis || current.animations !== next.animations || current.infinite !== next.infinite || current.swipe !== next.swipe || current.swipeThreshold !== next.swipeThreshold || current.flickTimeout !== next.flickTimeout;
	};

	// Track scroller is an intermediate component that allows us to provide the
	// React Motion value to onScroll and lets any user of onScroll use setState

	var TrackScroller = function (_Component) {
	  _inherits(TrackScroller, _Component);

	  function TrackScroller() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, TrackScroller);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TrackScroller.__proto__ || Object.getPrototypeOf(TrackScroller)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
	      x: 0,
	      y: 0
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(TrackScroller, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(_ref2) {
	      var _this2 = this;

	      var trackPosition = _ref2.trackPosition;
	      var pager = this.context.pager;

	      // update view styles with current position tween
	      // this method can get called hundreds of times, let's make sure to optimize as much as we can

	      pager.setViewStyles(trackPosition);

	      // update onScroll callback, we use requestAnimationFrame to avoid bouncing
	      // back from updates from onScroll while React Motion is trying to update it's own tree
	      // https://github.com/chenglou/react-motion/issues/357#issuecomment-262393424
	      if (this.props.trackPosition !== trackPosition) {
	        requestAnimationFrame(function () {
	          return _this2.props.onScroll(trackPosition / pager.getTrackSize(false) * -1, trackPosition);
	        });
	      }
	    }
	  }, {
	    key: '_renderViews',
	    value: function _renderViews() {
	      // we need Children map in order for the infinite option to work
	      // not actually sure why this is the case
	      return _react.Children.map(this.props.children, function (child) {
	        return child;
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var pager = this.context.pager;

	      var _props = this.props,
	          tag = _props.tag,
	          trackPosition = _props.trackPosition,
	          children = _props.children,
	          restProps = _objectWithoutProperties(_props, ['tag', 'trackPosition', 'children']);

	      var style = _extends({}, restProps.style);

	      if (pager.track) {
	        style = _extends({}, style, pager.track.getStyles(trackPosition));
	      }

	      return (0, _react.createElement)(tag, _extends({}, restProps, {
	        style: style
	      }), this._renderViews());
	    }
	  }]);

	  return TrackScroller;
	}(_react.Component);

	TrackScroller.propTypes = checkedProps;
	TrackScroller.contextTypes = {
	  pager: _react.PropTypes.instanceOf(_Pager2.default)
	};

	var Track = function (_Component2) {
	  _inherits(Track, _Component2);

	  function Track() {
	    var _ref3;

	    var _temp2, _this3, _ret2;

	    _classCallCheck(this, Track);

	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }

	    return _ret2 = (_temp2 = (_this3 = _possibleConstructorReturn(this, (_ref3 = Track.__proto__ || Object.getPrototypeOf(Track)).call.apply(_ref3, [this].concat(args))), _this3), _this3.state = {
	      instant: false
	    }, _this3._currentTween = 0, _this3._hydrate = false, _this3._handleOnRest = function () {
	      if (_this3.props.infinite && !_this3.state.instant) {
	        // reset back to a normal index
	        _this3.context.pager.resetViewIndex();

	        // set instant flag so we can prime track for next move
	        _this3._setValueInstantly(true, true);
	      }

	      _this3.props.onRest();
	    }, _temp2), _possibleConstructorReturn(_this3, _ret2);
	  }

	  _createClass(Track, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.context.pager.setOptions(this.props);
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this4 = this;

	      var pager = this.context.pager;

	      // add track to pager

	      pager.addTrack((0, _reactDom.findDOMNode)(this));

	      // set initial view index and listen for any incoming view index changes
	      this.scrollTo((0, _getIndex2.default)(this.props.currentView, this.props.children));

	      // set values instantly on respective events
	      pager.on('hydrated', function () {
	        return _this4._setValueInstantly(true, true);
	      });
	      pager.on('swipeMove', function () {
	        return _this4._setValueInstantly(true);
	      });
	      pager.on('swipeEnd', function () {
	        return _this4._setValueInstantly(false);
	      });

	      // prop callbacks
	      pager.on('swipeStart', this.props.onSwipeStart);
	      pager.on('swipeMove', this.props.onSwipeMove);
	      pager.on('swipeEnd', this.props.onSwipeEnd);
	      pager.on('viewChange', this.props.onViewChange);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      var currentView = nextProps.currentView,
	          instant = nextProps.instant,
	          children = nextProps.children;

	      // update instant state from props

	      if (this.props.instant !== instant) {
	        this._setValueInstantly(instant);
	      }

	      // update state with new index if necessary
	      if ((typeof currentView === 'undefined' ? 'undefined' : _typeof(currentView)) !== undefined && this.props.currentView !== currentView) {
	        this.scrollTo((0, _getIndex2.default)(currentView, children));
	      }

	      // update any options that have changed
	      if (isNotEqual(this.props, nextProps)) {
	        this.context.pager.setOptions(nextProps);
	        this._hydrate = true;
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(nextProps) {
	      if (this._hydrate) {
	        this.context.pager.hydrate();
	        this._hydrate = false;
	      }
	    }
	  }, {
	    key: 'prev',
	    value: function prev() {
	      this.context.pager.prev();
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      this.context.pager.next();
	    }
	  }, {
	    key: 'scrollTo',
	    value: function scrollTo(index) {
	      this.context.pager.setCurrentView({ index: index });
	    }
	  }, {
	    key: '_setValueInstantly',
	    value: function _setValueInstantly(instant, reset) {
	      var _this5 = this;

	      this.setState({ instant: instant }, function () {
	        if (reset) {
	          _this5.setState({ instant: false });
	        }
	      });
	    }
	  }, {
	    key: '_getTrackStyle',
	    value: function _getTrackStyle() {
	      var trackPosition = this.context.pager.trackPosition;

	      if (!this.state.instant) {
	        trackPosition = (0, _reactMotion.spring)(trackPosition, this.props.springConfig);
	      }
	      return { trackPosition: trackPosition };
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props,
	          tag = _props2.tag,
	          onScroll = _props2.onScroll,
	          restProps = _objectWithoutProperties(_props2, ['tag', 'onScroll']);

	      return _react2.default.createElement(
	        _reactMotion.Motion,
	        {
	          style: this._getTrackStyle(),
	          onRest: this._handleOnRest
	        },
	        function (_ref4) {
	          var trackPosition = _ref4.trackPosition;
	          return (0, _react.createElement)(TrackScroller, (0, _specialAssign2.default)({ trackPosition: trackPosition, tag: tag, onScroll: onScroll }, restProps, checkedProps));
	        }
	      );
	    }
	  }]);

	  return Track;
	}(_react.Component);

	Track.propTypes = checkedProps;
	Track.defaultProps = {
	  tag: 'div',
	  currentView: 0,
	  viewsToShow: 1,
	  viewsToMove: 1,
	  align: 0,
	  contain: false,
	  axis: 'x',
	  infinite: false,
	  instant: false,
	  swipe: true,
	  swipeThreshold: 0.5,
	  flickTimeout: 300,
	  springConfig: _reactMotion.presets.noWobble,
	  onSwipeStart: noop,
	  onSwipeMove: noop,
	  onSwipeEnd: noop,
	  onScroll: noop,
	  onViewChange: noop,
	  onRest: noop
	};
	Track.contextTypes = {
	  pager: _react.PropTypes.instanceOf(_Pager2.default)
	};
	exports.default = Track;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(14);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Pager = __webpack_require__(3);

	var _Pager2 = _interopRequireDefault(_Pager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var View = function (_Component) {
	  _inherits(View, _Component);

	  function View() {
	    var _ref;

	    var _temp, _this, _ret;

	    _classCallCheck(this, View);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = View.__proto__ || Object.getPrototypeOf(View)).call.apply(_ref, [this].concat(args))), _this), _this._viewAdded = false, _this._viewInstance = null, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(View, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        view: this._viewInstance
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._viewInstance = this.context.pager.addView((0, _reactDom.findDOMNode)(this));
	      this._viewAdded = true;
	      this.forceUpdate();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.context.pager.removeView(this._viewInstance);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var pager = this.context.pager;
	      var _pager$options = pager.options,
	          viewsToShow = _pager$options.viewsToShow,
	          axis = _pager$options.axis;

	      var _props = this.props,
	          tag = _props.tag,
	          trackSize = _props.trackSize,
	          restProps = _objectWithoutProperties(_props, ['tag', 'trackSize']);

	      var style = _extends({}, restProps.style);

	      // hide view visually until it has been added to the pager
	      // this should help avoid FOUC
	      if (!this._viewAdded) {
	        style.visibility = 'hidden';
	        style.pointerEvents = 'none';
	      }

	      if (this._viewInstance) {
	        style = _extends({}, style, this._viewInstance.getStyles());
	      }

	      return (0, _react.createElement)(tag, _extends({}, restProps, { style: style }));
	    }
	  }]);

	  return View;
	}(_react.Component);

	View.contextTypes = {
	  pager: _react.PropTypes.instanceOf(_Pager2.default)
	};
	View.childContextTypes = {
	  view: _react.PropTypes.any
	};
	View.propTypes = {
	  tag: _react.PropTypes.any
	};
	View.defaultProps = {
	  tag: 'div'
	};
	exports.default = View;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getIndex;

	var _react = __webpack_require__(2);

	function getIndex(key, children) {
	  var index = null;

	  _react.Children.forEach(children, function (child, _index) {
	    if (child.key === key || _index === key) {
	      index = _index;
	      return;
	    }
	  });

	  return index;
	}
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _animationBus = __webpack_require__(6);

	var _animationBus2 = _interopRequireDefault(_animationBus);

	var _Pager = __webpack_require__(3);

	var _Pager2 = _interopRequireDefault(_Pager);

	var _specialAssign = __webpack_require__(18);

	var _specialAssign2 = _interopRequireDefault(_specialAssign);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var checkedProps = {
	  tag: _react.PropTypes.string,
	  index: _react.PropTypes.number,
	  animations: _react.PropTypes.array
	};

	var AnimatedView = function (_Component) {
	  _inherits(AnimatedView, _Component);

	  function AnimatedView() {
	    _classCallCheck(this, AnimatedView);

	    return _possibleConstructorReturn(this, (AnimatedView.__proto__ || Object.getPrototypeOf(AnimatedView)).apply(this, arguments));
	  }

	  _createClass(AnimatedView, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var animations = this.props.animations;


	      if (animations.length) {
	        this._animationBus = new _animationBus2.default({
	          animations: animations,
	          origin: function origin(view) {
	            return view.origin;
	          }
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          tag = _props.tag,
	          index = _props.index,
	          restProps = _objectWithoutProperties(_props, ['tag', 'index']);

	      var style = _extends({}, restProps.style);

	      if (this._animationBus) {
	        var view = this.context.view || this.context.pager.getView(index);
	        if (view) {
	          style = _extends({}, restProps.style, this._animationBus.getStyles(view));
	        }
	      }

	      return (0, _react.createElement)(tag, (0, _specialAssign2.default)({ style: style }, this.props, checkedProps));
	    }
	  }]);

	  return AnimatedView;
	}(_react.Component);

	AnimatedView.contextTypes = {
	  pager: _react.PropTypes.instanceOf(_Pager2.default),
	  view: _react.PropTypes.any
	};
	AnimatedView.propTypes = checkedProps;
	AnimatedView.defaultProps = {
	  tag: 'div',
	  animations: []
	};
	exports.default = AnimatedView;
	module.exports = exports['default'];

/***/ }
/******/ ])
});
;