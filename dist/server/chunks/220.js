exports.id = 220;
exports.ids = [220];
exports.modules = {

/***/ 1655:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6988))

/***/ }),

/***/ 6988:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const NewTask = ()=>{
    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        description: ""
    });
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const getTask = async ()=>{
        const res = await fetch(`/api/tasks/${params.id}`);
        const data = await res.json();
        setNewTask({
            title: data.title,
            description: data.description
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (params.id) {
            getTask();
        }
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let errs = validate();
        if (Object.keys(errs).length) return setErrors(errs);
        setIsSubmitting(true);
        if (params.id) {
            await updateTask();
        } else {
            await createTask();
        }
        router.push("/");
    };
    const handleChange = (e)=>setNewTask({
            ...newTask,
            [e.target.name]: e.target.value
        });
    const validate = ()=>{
        let errors = {};
        if (!newTask.title) {
            errors.title = "Title is required";
        }
        if (!newTask.description) {
            errors.description = "Description is required";
        }
        return errors;
    };
    const createTask = async ()=>{
        try {
            await fetch("/api/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            });
            router.push("/");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };
    const handleDelete = async ()=>{
        if (window.confirm("Are you sure you want to delete this task?")) {
            try {
                const res = await fetch(`/api/tasks/${params.id}`, {
                    method: "DELETE"
                });
                router.push("/");
                router.refresh();
            } catch (error) {
                console.error(error);
            }
        }
    };
    const updateTask = async ()=>{
        try {
            await fetch(`/api/tasks/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTask)
            });
            router.push("/");
            router.refresh();
        } catch (error) {
            console.error(error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "min-h-[calc(100vh-7rem)] flex justify-center items-center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
                    className: "flex justify-between",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "font-bold text-3xl",
                            children: !params.id ? "Create Task" : "Update task"
                        }),
                        params.id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "bg-red-500 px-3 py-1 rounded-md",
                            onClick: handleDelete,
                            children: "Delete"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    type: "text",
                    placeholder: "Task title",
                    name: "title",
                    onChange: handleChange,
                    value: newTask.title,
                    autoFocus: true,
                    className: "bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                    name: "description",
                    placeholder: "Task description",
                    onChange: handleChange,
                    value: newTask.description,
                    className: "bg-gray-800 border-2 w-full p-4 rounded-lg my-4",
                    rows: 3
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "bg-green-600 text-white font-semibold px-8 py-2 rounded-lg",
                    children: params.id ? "Update" : "Save"
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);


/***/ }),

/***/ 9942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/atm/Desktop/my-movies/src/app/profile/new/page.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(696)


/***/ })

};
;