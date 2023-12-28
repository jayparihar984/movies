exports.id = 871;
exports.ids = [871];
exports.modules = {

/***/ 5203:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 6394))

/***/ }),

/***/ 6394:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1440);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(418);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4997);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const NewTask = ()=>{
    const [newTask, setNewTask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        publishing_year: "",
        file: "",
        editFile: ""
    });
    const params = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [isSubmitting, setIsSubmitting] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
    const getTask = async ()=>{
        const localUser = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : "";
        setIsSubmitting(true);
        axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post(`/api/movies/${params.id}`, {}, {
            headers: {
                "Authorization": `Bearer ${localUser?.token}`
            }
        }).then(function(response) {
            if (response.data.title == undefined) {
                router.push("/movies");
            }
            setIsSubmitting(false);
            setNewTask({
                title: response.data.title,
                publishing_year: response.data.publishing_year,
                file: "",
                editFile: response.data.poster ? response.data.poster : ""
            });
        }).catch(function(error) {
            if (error.response.status == 401) {
                localStorage.setItem("userData", "");
                router.push("/");
            }
            setErrors({
                ...errors,
                common: error.response.data.error
            });
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (params.id) {
            getTask();
        }
    }, []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setErrors({});
        let errs = validate();
        if (Object.keys(errs).length) return setErrors(errs);
        setIsSubmitting(true);
        if (params.id) {
            await updateTask();
        } else {
            await createTask();
        }
    };
    const handleChange = (e)=>{
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.value
        });
    };
    const handleFileChange = (e)=>{
        console.log(e.target.files);
        setNewTask({
            ...newTask,
            [e.target.name]: e.target.files[0]
        });
    };
    const validate = ()=>{
        let errors = {};
        if (!newTask.title) {
            errors.title = "Title is required";
        }
        if (!newTask.publishing_year) {
            errors.publishing_year = "Publishing year is required";
        }
        if (!newTask.file && !newTask.editFile) {
            errors.file = "Image is required";
        }
        return errors;
    };
    const createTask = async ()=>{
        const localUser = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : "";
        const fd = new FormData();
        fd.append("title", newTask.title);
        fd.append("publishing_year", newTask.publishing_year);
        fd.append("file", newTask.file);
        fd.append("action", "add");
        axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post("/api/movies", fd, {
            headers: {
                "Authorization": `Bearer ${localUser?.token}`
            }
        }).then(function(response) {
            router.push("/movies");
        }).catch(function(error) {
            if (error.response.status == 401) {
                localStorage.setItem("userData", "");
                router.push("/");
            }
            setIsSubmitting(false);
            setErrors({
                ...errors,
                common: error.response.data.error
            });
        });
    };
    const handleDelete = async ()=>{
        if (window.confirm("Are you sure you want to delete this movie?")) {
            try {
                const res = await fetch(`/api/movies/${params.id}`, {
                    method: "DELETE"
                });
                router.push("/movies");
                router.refresh();
            } catch (error) {
                console.error(error);
            }
        }
    };
    const updateTask = async ()=>{
        const localUser = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : "";
        const fd = new FormData();
        fd.append("title", newTask.title);
        fd.append("publishing_year", newTask.publishing_year);
        fd.append("file", newTask.file);
        axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.put(`/api/movies/${params.id}`, fd, {
            headers: {
                "Authorization": `Bearer ${localUser?.token}`
            }
        }).then(function(response) {
            router.push("/movies");
        }).catch(function(error) {
            if (error.response.status == 401) {
                localStorage.setItem("userData", "");
                router.push("/");
            }
            setIsSubmitting(false);
            setErrors({
                ...errors,
                common: error.response.data.error
            });
        });
    };
    const checkLogin = ()=>{
        const user = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : "";
        if (!user) {
            router.push("/");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        checkLogin();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: "py-5 mb-2",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "px-10 md:px-0 mx-auto flex justify-between",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-5xl font-bold",
                            children: !params.id ? "Create a new movie " : "Edit"
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                htmlFor: "fileUpload",
                                className: "DragImage",
                                children: [
                                    newTask.file == "" && newTask.editFile == "" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__/* .RiDownload2Line */ .VxU, {
                                                className: "display-6 mb-3"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "display-8 fw-bold",
                                                children: "Drag an image here "
                                            })
                                        ]
                                    }),
                                    newTask.file != "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        width: "90%",
                                        src: URL.createObjectURL(newTask.file)
                                    }),
                                    newTask.file == "" && newTask.editFile != "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                        width: "90%",
                                        src: "http://localhost:3000/" + "uploads/" + newTask.editFile
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-danger fw-bold",
                                children: errors.file ? errors.file + "." : ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "file",
                                style: {
                                    display: "none"
                                },
                                placeholder: "file",
                                name: "file",
                                id: "fileUpload",
                                accept: "image/png, image/gif, image/jpeg",
                                onChange: handleFileChange,
                                className: "bg-gray-800 border-2 w-full p-4 rounded-lg my-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "col-6",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "Title",
                                        name: "title",
                                        onChange: handleChange,
                                        value: newTask.title,
                                        autoFocus: true,
                                        className: "bg-gray-800 border-2 w-full p-4 rounded-lg my-4 InputFieldStyle mb-1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-danger fw-bold",
                                        children: errors.title ? errors.title + "." : ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        name: "publishing_year",
                                        type: "number",
                                        placeholder: "Publishing year",
                                        onChange: handleChange,
                                        value: newTask.publishing_year,
                                        className: "bg-gray-800 border-2 w-half p-4 d-block rounded-lg my-4 InputFieldStyle mb-1"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-danger fw-bold",
                                        children: errors.publishing_year ? errors.publishing_year + "." : ""
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: errors.common ? errors.common : ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "mt-5 formSubmition",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        onClick: ()=>router.push("/movies"),
                                        className: "createEditCancelBtn",
                                        children: "Cancel"
                                    }),
                                    isSubmitting == true ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        variant: "success",
                                        size: "lg",
                                        className: "ml-3 createEditSubmitBtn",
                                        children: params.id ? "Updating" : "Submiting"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        onClick: handleSubmit,
                                        variant: "success",
                                        size: "lg",
                                        className: "ml-3 createEditSubmitBtn",
                                        children: params.id ? "Update" : "Submit"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewTask);


/***/ }),

/***/ 3047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/mahesh-parihar/Desktop/nextjs/my-movies/src/app/movies/new/page.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;