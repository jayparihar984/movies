"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
export default function HomePage() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
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
    axios
      .post("/api/signup", newUser)
      .then(function (response) {
        console.log(response);
        router.push("/");
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        setIsSubmitting(false);
        setErrors({ ...errors, common: error.response.data.error });
      });
  };

  const validate = () => {
    let errors = {};
    if (!newUser.name) {
      errors.name = "Name is required.";
    }
    if (!newUser.email) {
      errors.email = "Email is required.";
    }
    if (!newUser.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  return (
    <div className="min-h-[calc(100vh-7rem)] flex justify-center items-center">
      <div className="sigUpForm">
        <header className="flex justify-center my-3">
          <h1 className="text-5xl">Signup</h1>
        </header>
        <div className="my-4">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={newUser.name}
            autoFocus
            className="border-2 w-full p-4 rounded-lg InputFieldStyle"
          />
          <span className="text-danger fw-bold mt-2 d-block">
            {errors.name ? errors.name : ""}
          </span>
        </div>
        <div className="my-4">
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={newUser.email}
            autoFocus
            className="border-2 w-full p-4 rounded-lg InputFieldStyle"
          />
          <span className="text-danger fw-bold mt-2 d-block">
            {errors.email ? errors.email: ""}
          </span>
        </div>
        <div className="my-4">
          <input
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
        <p className="mb-2 text-rose-600 h5">
          {errors.common ? errors.common : ""}
        </p>
        <div className="flex items-center justify-center">
          <button
            disabled={isSubmitting}
            onClick={handleSubmit}
            className="bg-green-400 text-white font-semibold px-8 py-2 rounded-lg h3"
          >
          {isSubmitting==true?"Loading...":"Signup"}  
          </button>
        </div>
      </div>
      <div className="bottomImage">
          <img src="./Vector2.png" width={"100%"} />
        </div>
    </div>
  );
}
