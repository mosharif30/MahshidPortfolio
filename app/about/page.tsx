"use client";
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "About",
//   description: "About Mahshid Asoudehkhah",
// };

export default function AboutPage() {
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
    <section className="w-full md:w-1/2 bg-customBlue ml-auto h-full justify-center">
      <div className="grid  place-items-center mt-auto h-full p-5">
        <span className="px-5">
          <h1 className=" text-3xl text-white ">About</h1>
          <p className="my-5 text-white dark:text-neutral-200">
            2023 “A bit Theosophy”, Mehrab-e-Qalam Publication
            <br /> 2022 “Secret of the Chichast`s Monster”, Nardeban Publication
            <br /> 2021 “Staircase Village”, Institute for the Intellectual
            Development of Children & Young Adults
            <br /> 2021 “A Giraffe That Dose Not Eat Breakfast”, Mehrab-e-Qalam
            Publication <br />
            2020 “The Bicycle Thinks of Us Two”, Institute for the Intellectual
            Development of Children & Young Adults <br />
            2019 “The Third floor”, Nazar Art publication <br />
            2018 “I Look and don`t See”, Nazar Art publication
          </p>
          <div className="flex justify-between mb-10">
            <span
              onClick={handleDownload}
              className="inline-block rounded-md text-xl text-white cursor-pointer hover:text-gray-200"
            >
              Download CV
            </span>
          </div>
        </span>
      </div>
    </section>
  );
}
