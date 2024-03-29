"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { FormStatus, FormValues } from "Interfaces";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: "",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setStatus({ loading: true, success: false, error: "" });

    try {
      const response = await axios.post("https://formbold.com/s/oJpPE", data);

      if (response.status === 201) {
        setStatus({ loading: false, success: true, error: "" });
        reset(); // Reset the form inputs
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: "An error occurred. Please try again later.",
      });
    }
  };
  return (
    <section className="w-full md:w-1/2 bg-white mr-auto h-full justify-center  ">
      <div className="container mx-auto max-h-screen mt-auto">
        <div className="max-w-lg mx-auto my-7 bg-white p-5">
          <div className="flex justify-between mb-10">
            <a
              href="https://www.instagram.com/mahshid.asoudehkhah/"
              target="_blank" // This opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security reasons
              className="inline-block rounded-md text-xl text-customBlue"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/your-facebook-account/"
              target="_blank" // This opens the link in a new tab
              rel="noopener noreferrer" // Recommended for security reasons
              className="inline-block rounded-md text-xl text-customGray"
            >
              Facebook
            </a>
          </div>
          <h2 className="text-xl  mb-5">Contact Me</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700  mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-4 py-2 placeholder:text-xs border-b-2 ${
                  errors.name ? "border-red-500" : "border-0"
                } focus:outline-none focus:border-customBlue`}
                // placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700  mb-1 ">
                Email
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-4 py-2 placeholder:text-xs border-b-2 ${
                  errors.email ? "border-red-500" : "border-0"
                } focus:outline-none focus:border-customBlue`}
                // placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700  mb-1">
                Message
              </label>
              <textarea
                id="message"
                className={`w-full px-4 py-2  placeholder:text-xs border-b-2 ${
                  errors.message ? "border-red-500" : "border-0"
                } focus:outline-none focus:border-customBlue`}
                rows={2}
                // placeholder="Enter your message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <span className="text-red-500 text-sm">
                  {errors.message.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className={`text-customBlue font-bold pt-4   rounded-md ${
                status.loading ? "text-customGray" : "text-customBlue"
              }`}
            >
              {status.loading ? "Submitting..." : "Submit"}
            </button>
            {status.success && (
              <p className="text-customGray mt-2">Submission Successful</p>
            )}
            {status.error && (
              <p className="text-red-500 mt-2">{status.error}</p>
            )}
          </form>
          <span className="flex justify-end rounded-md text-sm ml-auto text-customBlue mt-10">
            info@mahshidasoudekhah.com
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
