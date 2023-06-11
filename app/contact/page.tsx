"use client";

import type { Metadata } from "next";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

// export const metadata: Metadata = {
//   title: "About",
//   description: "VP of Developer Experience at Vercel.",
// };
type FormValues = {
  name: string;
  email: string;
  message: string;
};

export default function AboutPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);

    axios
      .post("https://formbold.com/s/oJpPE", data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <section className="w-full md:w-1/2 bg-white ml-auto h-full justify-center">
      <div className="container mx-auto h-full mt-auto">
        <div className="max-w-lg mx-auto my-10 bg-white p-5 ">
          <div className="flex justify-between mb-10">
            <span className="inline-block  rounded-md text-xl  text-customBlue  ">
              Instagram
            </span>
            <span className="inline-block  rounded-md text-xl  text-customGray  ">
              FaceBook
            </span>
          </div>
          <h2 className="text-2xl font-bold mb-5">Contact Me</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row justify-between">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 rounded-md border-b-2 ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 rounded-md border-b-2  ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email"
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
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                className={`w-full px-4 py-2 rounded-md border-b-2  ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                rows={2}
                placeholder="Enter your message"
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
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
          <span className="inline-block  rounded-md text-3xl  text-customBlue mt-10 ">
            mahshidasoudekhah@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
