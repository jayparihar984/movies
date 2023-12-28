"use strict";
exports.id = 644;
exports.ids = [644];
exports.modules = {

/***/ 63:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(4937);


/***/ }),

/***/ 3746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const TaskSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    title: {
        type: String,
        required: [
            true,
            "The Movie title is required "
        ],
        unique: true,
        trim: true,
        maxlength: [
            40,
            "title cannot be grater than 40 characters"
        ]
    },
    publishing_year: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: [
            true,
            "The Movie image is required "
        ]
    }
}, {
    timestamps: true,
    versionKey: false
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.Task || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Task", TaskSchema));


/***/ }),

/***/ 9455:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const _interop_require_default = __webpack_require__(3297);
const _jsonwebtoken = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9877));
const _nextresponse = /*#__PURE__*/ _interop_require_default._(__webpack_require__(9335));
async function varifyToken(token) {
    console.log("test", token);
    if (!token) {
        return 0;
    }
    if (token) {
        token = token.replace(/^Bearer\s+/, "");
    }
    try {
        const decodedToken = await _jsonwebtoken.default.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return 0;
        }
    } catch (error) {
        return 0;
    }
    return 1;
}
;
module.exports = varifyToken;


/***/ }),

/***/ 1550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ dbConnect)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const conn = {
    isConnected: false
};
async function dbConnect() {
    if (conn.isConnected) {
        return;
    }
    const db = await (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.connect)(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nextjs");
    //console.log(db.connection.db.databaseName);
    conn.isConnected = db.connections[0].readyState;
}
mongoose__WEBPACK_IMPORTED_MODULE_0__.connection.on("connected", ()=>console.log("Mongodb connected to db"));
mongoose__WEBPACK_IMPORTED_MODULE_0__.connection.on("error", (err)=>console.error("Mongodb Errro:", err.message));


/***/ }),

/***/ 3297:
/***/ ((__unused_webpack_module, exports) => {


exports._ = exports._interop_require_default = _interop_require_default;
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ })

};
;