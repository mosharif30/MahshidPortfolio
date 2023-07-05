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
            <p>
              I was born on a hot summer day in Rasht which is called the city
              of rain. That is why I love rain and the smell of rain-soaked
              soil. The people of Rasht have an interesting custom: When a
              baby's first tooth comes out, they place some tools in front of
              her and they believe that whatever she picks up will become the
              main tool of her career in the future. As evidenced by a photo, by
              picking up a pink marker, I chose my part in the world from
              childhood. I became an illustrator and graphic designer to share
              my world with children and sometimes adults. In 2001, I was
              accepted into the graphic design department at the Art &
              architectural Azad University and from the very beginning I
              realized that I loved my field of study that became my path of my
              life and my way of seeing and exploring. In 2006, I was accepted
              into the master's degree and continued my studies. Despite the
              fact that I would work over all the years of study and had
              mastered various software, after finishing university, I gradually
              felt that manual work is more attractive to me than the digital
              world. My passion for drawing increased Little by little. I took
              my habit of scribbling on paper more seriously, improved it and
              gradually entered the world of illustration; a world in which I
              find my lost past, and I picture a colorful future. And this is
              how I became both a graphic designer and an illustrator. Both
              paths help me follow my dreams; the dreams full of light, color
              and image. In the city where I grew up, I always saw trees and
              colorful fruits everywhere I looked. The sky was blue and each
              cloud had its own story. I used to wake up with the rooster`s
              crowing and the crickets chirp was my lullaby. I'm still looking
              for the woodpecker that knocks on the tree next to our house. I do
              not fantasize, I illustrate everything that I have actually seen.
            </p>
          </div>
        </span>
      </div>
    </section>
  );
}
