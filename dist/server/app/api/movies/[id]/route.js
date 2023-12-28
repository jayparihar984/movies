"use strict";
(() => {
var exports = {};
exports.id = 333;
exports.ids = [333];
exports.modules = {

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

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 3292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 3359:
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

// NAMESPACE OBJECT: ./src/app/api/movies/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  POST: () => (POST),
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/models/Task.js
var Task = __webpack_require__(3746);
// EXTERNAL MODULE: ./src/utils/mongoose.js
var mongoose = __webpack_require__(1550);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
// EXTERNAL MODULE: external "fs/promises"
var promises_ = __webpack_require__(3292);
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(1017);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: ./src/utils/authentication.js
var authentication = __webpack_require__(9455);
var authentication_default = /*#__PURE__*/__webpack_require__.n(authentication);
// EXTERNAL MODULE: ./node_modules/next/headers.js
var headers = __webpack_require__(63);
;// CONCATENATED MODULE: ./src/app/api/movies/[id]/route.js








async function POST(request, { params }) {
    const varify = await authentication_default()((0,headers.headers)().get("authorization"));
    if (!varify) {
        return next_response["default"].json({
            error: "unauthorized"
        }, {
            status: 401
        });
    }
    (0,mongoose/* dbConnect */.C)();
    try {
        const taskFound = await Task/* default */.Z.findById(params.id);
        if (!taskFound) return next_response["default"].json({
            message: "Task not found"
        }, {
            status: 404
        });
        return next_response["default"].json(taskFound);
    } catch (error) {
        return next_response["default"].json(error.message, {
            status: 400
        });
    }
}
async function PUT(request, { params }) {
    const varify = await authentication_default()((0,headers.headers)().get("authorization"));
    if (!varify) {
        return next_response["default"].json({
            error: "unauthorized"
        }, {
            status: 401
        });
    }
    const body = await request.formData();
    (0,mongoose/* dbConnect */.C)();
    try {
        const file = body.get("file");
        const publishing_year = body.get("publishing_year");
        const title = body.get("title");
        let taskUpdated = "";
        if (file) {
            if (file.size / 1024 / 1024 > 2) {
                return next_response["default"].json({
                    error: "Photo only allows less than 2mb ."
                }, {
                    status: 400
                });
            }
            // file upload 
            const fileName = Date.now() + file.name;
            const destinationDirPath = external_path_default().join(process.cwd(), "public/uploads");
            const fileArrayBuffer = await file.arrayBuffer();
            if (!(0,external_fs_.existsSync)(destinationDirPath)) {
                promises_default().mkdir(destinationDirPath, {
                    recursive: true
                });
            }
            await promises_default().writeFile(external_path_default().join(destinationDirPath, fileName), Buffer.from(fileArrayBuffer));
            taskUpdated = await Task/* default */.Z.findByIdAndUpdate(params.id, {
                title: title,
                publishing_year: publishing_year,
                poster: fileName
            }, {
                new: true
            });
        } else {
            taskUpdated = await Task/* default */.Z.findByIdAndUpdate(params.id, {
                title: title,
                publishing_year: publishing_year
            }, {
                new: true
            });
        }
        if (!taskUpdated) return next_response["default"].json({
            message: "Movies not found"
        }, {
            status: 404
        });
        return next_response["default"].json(taskUpdated);
    } catch (error) {
        return next_response["default"].json(error.message, {
            status: 400
        });
    }
}
async function DELETE(request, { params }) {
    (0,mongoose/* dbConnect */.C)();
    try {
        const taskDeleted = await Task/* default */.Z.findByIdAndDelete(params.id);
        if (!taskDeleted) return next_response["default"].json({
            message: "Task not found"
        }, {
            status: 404
        });
        return next_response["default"].json(taskDeleted);
    } catch (error) {
        return next_response["default"].json(error.message, {
            status: 400
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fmovies%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fmovies%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fmovies%2F%5Bid%5D%2Froute.js&appDir=%2Fhome%2Fmahesh-parihar%2FDesktop%2Fnextjs%2Fmy-movies%2Fsrc%2Fapp&appPaths=%2Fapi%2Fmovies%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/movies/[id]/route","pathname":"/api/movies/[id]","filename":"route","bundlePath":"app/api/movies/[id]/route"},"resolvedPagePath":"/home/mahesh-parihar/Desktop/nextjs/my-movies/src/app/api/movies/[id]/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/movies/[id]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [212,778,877,644], () => (__webpack_exec__(3359)));
module.exports = __webpack_exports__;

})();