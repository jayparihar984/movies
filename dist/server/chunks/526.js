"use strict";
exports.id = 526;
exports.ids = [526];
exports.modules = {

/***/ 2594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7096);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9877);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);



const userSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: String,
    email: String,
    password: String
}, {
    timestamps: true
});
userSchema.methods.encryptPassword = async function() {
    const salt = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().genSalt(10);
    this.password = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, salt);
};
userSchema.statics.comparePassword = async function(password, hash) {
    return await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, hash);
};
userSchema.methods.generateToken = function() {
    return jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({
        id: this._id
    }, process.env.JWT_SECRET);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0__.models.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("User", userSchema));


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


/***/ })

};
;