"use strict";
(() => {
var exports = {};
exports.id = 740;
exports.ids = [740];
exports.modules = {

/***/ 7096:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 1917:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/login/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/models/User.js
var User = __webpack_require__(2594);
// EXTERNAL MODULE: ./src/utils/mongoose.js
var mongoose = __webpack_require__(1550);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(9877);
var jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken);
// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(7096);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
;// CONCATENATED MODULE: ./src/app/api/login/route.js





async function GET() {
    await (0,mongoose/* dbConnect */.C)();
    const users = await User/* default */.Z.find();
    return next_response["default"].json(users);
}
async function POST(request) {
    await (0,mongoose/* dbConnect */.C)();
    const body = await request.json();
    try {
        if (body.email == "" || body.password == "") {
            return next_response["default"].json({
                error: "Please enter email and password."
            }, {
                status: 400
            });
        }
        const user = await User/* default */.Z.findOne({
            email: body.email
        });
        if (!user) {
            return next_response["default"].json({
                error: "user does not match."
            }, {
                status: 400
            });
        }
        const isMatch = await external_bcrypt_default().compare(body.password, user.password);
        if (!isMatch) {
            return next_response["default"].json({
                error: "passwords does not match."
            }, {
                status: 400
            });
        }
        if (isMatch) {
            const token = jsonwebtoken_default().sign({
                id: user._id
            }, process.env.JWT_SECRET);
            return next_response["default"].json({
                userID: user._id,
                token
            }, {
                status: 200
            });
        }
    } catch (error) {
        console.log(error);
        return next_response["default"].json({
            error: "There was an error fetching that user."
        }, {
            status: 400
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Flogin%2Froute&name=app%2Fapi%2Flogin%2Froute&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=%2Fhome%2Fmahesh-parihar%2FDesktop%2Fnextjs%2Fmy-movies%2Fsrc%2Fapp&appPaths=%2Fapi%2Flogin%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/login/route","pathname":"/api/login","filename":"route","bundlePath":"app/api/login/route"},"resolvedPagePath":"/home/mahesh-parihar/Desktop/nextjs/my-movies/src/app/api/login/route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/login/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [212,778,877,526], () => (__webpack_exec__(1917)));
module.exports = __webpack_exports__;

})();