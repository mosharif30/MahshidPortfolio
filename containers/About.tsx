"use client";
import { about } from "lib/info";
import React from "react";

function About() {
  const handleDownload = () => {
    // Code to initiate the download
    const downloadLink = document.createElement("a");
    downloadLink.href = "/cv.pdf";
    downloadLink.download = "cv.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };
  return (
    <section className="w-full lg:w-1/2 overflow-y-auto bg-customBlue mr-auto h-max md:h-full justify-center ">
      <div className="grid  place-items-center mt-auto h-full p-5 ">
        <span className="px-5">
          <div className="flex justify-center mb-10 mt-5">
            <span
              onClick={handleDownload}
              className="inline-block rounded-md text-3xl text-white cursor-pointer hover:text-gray-200"
            >
              Download CV
            </span>
          </div>
          <div className="my-5 text-white dark:text-neutral-200 pt-2 pl-2">
            <h1 className=" text-3xl text-white mb-5">About Me</h1>
            <p>{about()}</p>
          </div>
        </span>
      </div>
    </section>
  );
}

export default About;
