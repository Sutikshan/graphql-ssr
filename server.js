/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = __webpack_require__(8);

var _models2 = _interopRequireDefault(_models);

var _graphql = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const modelFields = {
  id: { type: _graphql.GraphQLInt },
  makeId: { type: _graphql.GraphQLInt },
  name: { type: _graphql.GraphQLString },
  price: { type: _graphql.GraphQLFloat },
  imageUrl: { type: _graphql.GraphQLString }
};

const ModelType = new _graphql.GraphQLObjectType({
  name: "ModelType",
  description: "Car Models",
  fields: () => modelFields
});

const models = {
  type: (0, _graphql.GraphQLList)(ModelType),
  args: {
    makeId: { type: _graphql.GraphQLInt }
  },
  resolve: (root, args) => {
    const modelListFields = m => ({ id: m.id, name: m.name, makeId: m.makeId });

    if (args.makeId) {
      const condition = model => model.makeId === args.makeId;

      return _models2.default.filter(condition).map(modelListFields);
    }
    return [];
  }
};

const modelResolver = args => {
  if (args.id) {
    return _models2.default.find(model => model.id === args.id);
  }

  throw new Error("id is mandatory argument to access a specfic model");
};

const model = {
  type: ModelType,
  args: {
    id: { type: _graphql.GraphQLInt }
  },
  resolve: (root, args) => modelResolver(args)
};

exports.default = { models, model, modelFields, modelResolver };

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(3);

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = __webpack_require__(4);

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _schema = __webpack_require__(5);

var _schema2 = _interopRequireDefault(_schema);

var _cors = __webpack_require__(11);

var _cors2 = _interopRequireDefault(_cors);

var _path = __webpack_require__(12);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();

app.use((0, _cors2.default)());
app.use("/graphql", (0, _expressGraphql2.default)({
  schema: _schema2.default,
  graphiql: true
}));

app.use(_express2.default.static("public"));

app.get("*", function (req, res) {
  res.sendFile(_path2.default.resolve("public/index.html"));
});

app.listen(3000, () => {
  console.info("listening...");
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express-graphql");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _makeSchema = __webpack_require__(6);

var _makeSchema2 = _interopRequireDefault(_makeSchema);

var _modelSchema = __webpack_require__(1);

var _modelSchema2 = _interopRequireDefault(_modelSchema);

var _modelReviewsSchema = __webpack_require__(9);

var _modelReviewsSchema2 = _interopRequireDefault(_modelReviewsSchema);

var _graphql = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLSchema({
  query: new _graphql.GraphQLObjectType({
    name: "Query",
    description: "Schema for Car Browser",
    fields: () => ({
      models: _modelSchema2.default.models,
      makes: _makeSchema2.default.makes,
      model: _modelSchema2.default.model,
      carOfTheWeek: _modelReviewsSchema2.default.carOfTheWeek
    })
  })
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(0);

var _makes = __webpack_require__(7);

var _makes2 = _interopRequireDefault(_makes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const MakeType = new _graphql.GraphQLObjectType({
  name: "MakeType",
  description: "Car Make",
  fields: () => ({
    id: { type: _graphql.GraphQLInt },
    name: { type: _graphql.GraphQLString }
  })
});

const makes = {
  type: (0, _graphql.GraphQLList)(MakeType),
  resolve: () => _makes2.default
};

exports.default = { makes };

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = [{"id":10,"name":"Porsche"},{"id":20,"name":"Nissan"},{"id":30,"name":"BMW"},{"id":40,"name":"Audi"},{"id":50,"name":"Mazda"}]

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = [{"id":100,"makeId":10,"name":"911 Carrera 4s","price":297130,"imageUrl":"http://files1.porsche.com/filestore/image/multimedia/none/991-2nd-c4s-modelimage-sideshot/model/15bd09cf-553b-11e5-8c32-0019999cd470;s25/porsche-model.png"},{"id":110,"makeId":10,"name":"Cayenne GTS","price":171605,"imageUrl":"http://files3.porsche.com/filestore/image/multimedia/none/rd-2013-9pa-e2-2nd-gts-modelimage-sideshot/model/c287d350-5920-11e4-99aa-001a64c55f5c;s25/porsche-model.png"},{"id":120,"makeId":10,"name":"Panamera 4S","price":328160,"imageUrl":"http://files1.porsche.com/filestore/image/multimedia/none/970-g2-4s-modelimage-sideshot/model/a23b6da0-33b9-11e6-9225-0019999cd470;s25/porsche-model.png"},{"id":210,"makeId":20,"name":"Leaf","price":50000,"imageUrl":"http://o.aolcdn.com/commerce/autodata/images/USC10NIC161B021001.jpg"},{"id":220,"makeId":20,"name":"GT-R","price":180000,"imageUrl":"http://o.aolcdn.com/dims-shared/dims3/GLOB/crop/1280x720+0+104/resize/800x450!/format/jpg/quality/85/http://o.aolcdn.com/hss/storage/midas/55737528ce8b83620a84bfa35c05e152/201537017/2009-nissan-gtr.jpg"},{"id":300,"makeId":30,"name":"1","price":83000,"imageUrl":"http://www.bmw.com.au/content/dam/bmw/common/all-models/1-series/5-door/2015/at-a-glance/design-fw-exterieur-01.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1447923462248.jpg"},{"id":310,"makeId":30,"name":"2","price":125000,"imageUrl":"http://www.bmw.com.au/content/dam/bmw/common/all-models/2-series/coupe/2013/at-a-glance/Exterieur-design-03.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1470324214485.jpg"},{"id":320,"makeId":30,"name":"3","price":150000,"imageUrl":"http://www.bmw.com.au/content/dam/bmw/common/all-models/3-series/sedan/2015/at-a-glance/3-series-sedan-design.jpg/jcr:content/renditions/cq5dam.resized.img.585.low.time1447942773188.jpg"},{"id":400,"makeId":40,"name":"S5","price":165000,"imageUrl":"http://media.caranddriver.com/images/media/267365/2008-audi-s5-photo-105022-s-450x274.jpg"},{"id":510,"makeId":50,"name":"TT","price":40000,"imageUrl":"http://media.caranddriver.com/images/media/3124/2007-nissan-350z-photo-3786-s-429x262.jpg"},{"id":520,"makeId":50,"name":"MX-5","price":90000,"imageUrl":"http://s22222.pcdn.co/wp-content/uploads/2018/02/2018-Mazda-MX-5-RF-Limited-Edition-Machine-Grey-front-3-4.jpg"}]

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _carOfTheWeek = __webpack_require__(10);

var _carOfTheWeek2 = _interopRequireDefault(_carOfTheWeek);

var _graphql = __webpack_require__(0);

var _modelSchema = __webpack_require__(1);

var _modelSchema2 = _interopRequireDefault(_modelSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ModelReviewsType = new _graphql.GraphQLObjectType({
  name: "ModelReviewsType",
  description: "Review of the Car Models",
  fields: () => _extends({
    review: { type: _graphql.GraphQLString }
  }, _modelSchema2.default.modelFields)
});

const carOfTheWeek = {
  type: ModelReviewsType,
  resolve: () => {
    const modelData = _modelSchema2.default.modelResolver({
      id: _carOfTheWeek.modelId
    });
    return _extends({}, _carOfTheWeek2.default, modelData);
  }
};

exports.default = { carOfTheWeek };

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"modelId":520,"review":"The Mazda MX-5 is a traditional two-seat sports car, with a lightweight body and rear-wheel drive. It has a folding, fabric roof and is among the least expensive convertibles. This fourth-generation MX-5 is fantastic fun to drive. Motoring magazine Wheels named it Car of the Year for 2016."}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);