"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function HomePage() {
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleChange = (e) =>
    setNewUser({ ...newUser, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let errs = validate();

    if (Object.keys(errs).length) return setErrors(errs);

    setIsSubmitting(true);
    await axios
      .post("/api/login", newUser)
      .then(function (response) {
        if (newUser.remember == true) {
          localStorage.setItem("myapp-email", newUser.email);
          localStorage.setItem("myapp-password", newUser.password);
        } else {
          localStorage.setItem("myapp-email", "");
          localStorage.setItem("myapp-password", "");
        }

        localStorage.setItem("userData", JSON.stringify(response.data));
        router.push("/movies");
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        setIsSubmitting(false);
        //router.push("/movies");
        setErrors({ ...errors, common: error.response.data.error });
      });
  };

  const handleRemamberMe = (e) => {
    setNewUser({ ...newUser, ["remember"]: e.target.checked });
  };

  const validate = () => {
    let errors = {};

    if (!newUser.email) {
      errors.email = "Email is required.";
    }
    if (!newUser.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  const checkLogin = () => {
    const user = localStorage.getItem("userData")
      ? JSON.parse(localStorage.getItem("userData"))
      : "";
    if (user) {
      router.push("/movies");
    }
  };

  useEffect(() => {
    setNewUser({
      email: localStorage.getItem("myapp-email") || "",
      password: localStorage.getItem("myapp-password") || "",
      remember: localStorage.getItem("myapp-email") ? true : false,
    });

    checkLogin();
  }, []);

  return (
    <>
      <div className="min-h-[calc(100vh-7rem)] flex justify-center items-center">
        <div className="sigInForm">
          <header className="flex justify-center">
            <h1 className="text-5xl mb-4">Sign in</h1>
          </header>
          <div className="my-5">
            <input
              autoComplete="nope"
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={newUser.email}
              autoFocus
              className="border-2 w-full p-4 rounded-lg InputFieldStyle"
            />
            <span className="text-danger fw-bold mt-2 d-block">
              {errors.email ? errors.email : ""}
            </span>
          </div>
          <div className="my-5">
            <input
              autoComplete="new-password"
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={newUser.password}
              autoFocus
              className="border-2 w-full p-4 rounded-lg InputFieldStyle"
            />
            <span className="text-danger fw-bold mt-2 d-block">
              {errors.password ? errors.password : ""}
            </span>
          </div>
          <div className="flex justify-center items-center mb-4 remember_me_box">
            <input
              type="checkbox"
              checked={newUser.remember}
              onChange={handleRemamberMe}
              className="Remember"
            />
            <label>Remember me</label>
          </div>
          <p className="mb-2 text-rose-600 h5">
            {errors.common ? errors.common : ""}
          </p>
          <button
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="bg-green-400 padded w-full text-white font-semibold py-3 rounded-lg h3"
          >
            Login
          </button>
        </div>
      </div>
      <div className="bottomImage">
        <img src="./Vector2.png" width={"100%"} />
      </div>
    </>
  );
}
