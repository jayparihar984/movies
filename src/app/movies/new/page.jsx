"use client";
import { React, useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { RiDownload2Line } from "react-icons/ri";
import axios from "axios";

const NewTask = () => {
  const [newTask, setNewTask] = useState({
    title: "",
    publishing_year: "",
    file: "",
    editFile: "",
  });

  const params = useParams();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const getTask = async () => {
    const localUser = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : "";

    setIsSubmitting(true);
    axios
      .post(
        `/api/movies/${params.id}`,
        {},
        { headers: { Authorization: `Bearer ${localUser?.token}` } }
      )
      .then(function (response) {
        if (response.data.title == undefined) {
          router.push("/movies");
        }

        setIsSubmitting(false);

        setNewTask({
          title: response.data.title,
          publishing_year: response.data.publishing_year,
          file: "",
          editFile: response.data.poster ? response.data.poster : "",
        });
      })
      .catch(function (error) {
        if (error.response.status == 401) {
          localStorage.setItem("userData", "");
          router.push("/");
        }
        setErrors({ ...errors, common: error.response.data.error });
      });
  };

  useEffect(() => {
    if (params.id) {
      getTask();
    }
  }, []);

  const handleSubmit = async (e) => {
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

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    console.log(e.target.files);

    setNewTask({ ...newTask, [e.target.name]: e.target.files[0] });
  };

  const validate = () => {
    let errors = {};

    if (!newTask.title) {
      errors.title = "Title is required.";
    }
    if (!newTask.publishing_year) {
      errors.publishing_year = "Publishing year is required.";
    }
    if (!newTask.file && !newTask.editFile) {
      errors.file = "Image is required.";
    }

    return errors;
  };

  const createTask = async () => {
    const localUser = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : "";
    const fd = new FormData();
    fd.append("title", newTask.title);
    fd.append("publishing_year", newTask.publishing_year);
    fd.append("file", newTask.file);
    fd.append("action", "add");

    axios
      .post("/api/movies", fd, {
        headers: { Authorization: `Bearer ${localUser?.token}` },
      })
      .then(function (response) {
        router.push("/movies");
      })
      .catch(function (error) {
        if (error.response.status == 401) {
          localStorage.setItem("userData", "");
          router.push("/");
        }
        setIsSubmitting(false);
        setErrors({ ...errors, common: error.response.data.error });
      });
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        const res = await fetch(`/api/movies/${params.id}`, {
          method: "DELETE",
        });
        router.push("/movies");
        router.refresh();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const updateTask = async () => {
    const localUser = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : "";
    const fd = new FormData();
    fd.append("title", newTask.title);
    fd.append("publishing_year", newTask.publishing_year);
    fd.append("file", newTask.file);

    axios
      .put(`/api/movies/${params.id}`, fd, {
        headers: { Authorization: `Bearer ${localUser?.token}` },
      })
      .then(function (response) {
        router.push("/movies");
      })
      .catch(function (error) {
        if (error.response.status == 401) {
          localStorage.setItem("userData", "");
          router.push("/");
        }
        setIsSubmitting(false);

        setErrors({ ...errors, common: error.response.data.error });
      });
  };

  const checkLogin = () => {
    const user = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : "";
    if (!user) {
      router.push("/");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      <div className="container">
        <nav className="py-5 mb-2">
          <div className="px-10 md:px-0 mx-auto flex justify-between">
            <div>
              <span className="text-4xl font-bold">
                {!params.id ? "Create a new movie " : "Edit"}
              </span>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <label htmlFor="fileUpload" className="DragImage">
              {newTask.file == "" && newTask.editFile == "" && (
                <>
                  <RiDownload2Line className="display-6 mb-3" />
                  <span className="display-8 fw-bold">Drag an image here </span>
                </>
              )}

              {newTask.file != "" && (
                <img width="90%" src={URL.createObjectURL(newTask.file)} />
              )}
              {newTask.file == "" && newTask.editFile != "" && (
                <img
                  width="90%"
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    "uploads/" +
                    newTask.editFile
                  }
                />
              )}
            </label>
            <span className="text-danger fw-bold">
              {errors.file ? errors.file : ""}
            </span>
            <input
              type="file"
              style={{ display: "none" }}
              placeholder="file"
              name="file"
              id="fileUpload"
              accept="image/png, image/gif, image/jpeg"
              onChange={handleFileChange}
              className="border-2 w-full p-4 rounded-lg my-4"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div>
              <input
                type="text"
                placeholder="Title"
                name="title"
                onChange={handleChange}
                value={newTask.title}
                autoFocus
                className="border-2 w-full p-4 rounded-lg my-4 InputFieldStyle mb-1"
              />
              <span className="text-danger fw-bold">
                {errors.title ? errors.title : ""}
              </span>
            </div>
            <div>
              <input
                name="publishing_year"
                type="number"
                placeholder="Publishing year"
                onChange={handleChange}
                value={newTask.publishing_year}
                className="border-2 w-half p-4 d-block rounded-lg my-4 InputFieldStyle mb-1"
              />
              <span className="text-danger fw-bold">
                {errors.publishing_year ? errors.publishing_year : ""}
              </span>
            </div>
            <p>{errors.common ? errors.common : ""}</p>
            <div className="mt-5 formSubmition">
              <span
                onClick={() => router.push("/movies")}
                className="createEditCancelBtn"
              >
                Cancel
              </span>
              {isSubmitting == true ? (
                <span
                  variant="success"
                  size="lg"
                  className="ml-3 createEditSubmitBtn"
                >
                  {params.id ? "Updating" : "Submiting"}
                </span>
              ) : (
                <span
                  onClick={handleSubmit}
                  variant="success"
                  size="lg"
                  className="ml-5 createEditSubmitBtn"
                >
                  {params.id ? "Update" : "Submit"}
                </span>
              )}
            </div>
          </div>
        </div>
        {/* {params.id && (
          <button
            className="bg-red-500 px-3 py-1 rounded-md"
            onClick={handleDelete}
          >
            Delete
          </button>
        )} */}
      </div>
      <div className="bottomImageOnEdit">
       
      </div>
    </>
  );
};

export default NewTask;
