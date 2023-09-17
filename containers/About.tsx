"use client";
import { about } from "lib/info";
import React from "react";
import { name } from "lib/info";

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
    <div className="w-full flex flex-row h-max md:h-full">
      <section className="hidden md:flex md:w-1/2 bg-customGray h-max md:h-full justify-end  flex-col-reverse md:flex-col">
        <div className="">
          <section className="flex items-center justify-center h-screen">
            <div className="flex justify-center flex-col text-center">
              <h1 className="text-3xl md:text-5xl text-customBlue">{name}</h1>
              <h1 className="text-2xl md:text-2xl text-customBlue mt-4">
                Graphic designer and Illustrator
              </h1>
            </div>
          </section>
          {/* <span
            onClick={handleDownload}
            className="inline-block rounded-md text-3xl text-customBlue cursor-pointer hover:text-gray-200 mb-5 ml-5"
          >
            Download CV
          </span> */}
        </div>
      </section>
      <section className="w-full md:w-1/2 overflow-y-auto bg-customBlue ml-auto justify-center h-max md:h-full">
        <div className="grid place-items-center mt-auto h-full p-5">
          <span className="px-5">
            <div className="my-5 text-white dark:text-neutral-200 pt-2 pl-2">
              <div className="">
                <span
                  onClick={handleDownload}
                  className="md:hidden inline-block rounded-md text-3xl text-white cursor-pointer hover:text-gray-200 "
                >
                  Download CV
                </span>
              </div>
              <h1 className="text-3xl text-white mb-5">about me</h1>
              <p>{about()}</p>
            </div>
          </span>
        </div>
      </section>
    </div>
  );
}

export default About;
