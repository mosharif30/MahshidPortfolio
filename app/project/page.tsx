"use client";
import type { Metadata } from "next";

import { useIntersectionObserver } from "utils/useIntersectionObserver";
import { useRef } from "react";

export const metadata: Metadata = {
  title: "Project",
  description: "VP of Developer Experience at Vercel.",
};

export default function ProjectPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const ref2 = useRef<HTMLDivElement | null>(null);
  const entry2 = useIntersectionObserver(ref2, {});
  const isVisible2 = !!entry2?.isIntersecting;
  return (
    <>
      <div className="flex flex-row h-full overflow-hidden">
        <section className="w-full md:w-1/2 bg-customGray ml-auto overflow-y-scroll justify-center">
          <div className="grid  place-items-center mt-auto  p-5">
            <span className="px-5 text-white ">
              <div className=" my-5 " ref={ref}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 " ref={ref2}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
              <div className=" my-5 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit laboriosam accusamus perferendis iure id quidem quia
                at! Vero, autem laudantium aut ut deserunt cupiditate
                voluptatibus accusamus vel, impedit molestias inventore libero
                corporis recusandae eius animi delectus facere nostrum fugit
                ducimus beatae iure debitis dolor? Dicta corporis odit molestiae
                corrupti atque assumenda, repellendus, sed in quibusdam
                reprehenderit eveniet necessitatibus ut sequi aperiam non. Modi
                quibusdam adipisci eius harum est ipsam, saepe sint, maxime
                cumque blanditiis exercitationem magni totam iure tempore
                recusandae nihil laudantium necessitatibus a temporibus
                quisquam? Nemo amet fugiat earum nihil id recusandae sit ratione
                dolore, distinctio esse optio tempore.
              </div>
            </span>
          </div>
        </section>
        <section className="w-full md:w-1/2 bg-customBlue ml-auto h-full justify-center overflow-hidden">
          <div className="grid  place-items-center mt-auto h-full p-5">
            <span className="px-5">
              <span className="px-5">
                <h1 className=" text-5xl text-white py-5">Project</h1>
              </span>
              <span className="px-5">
                <h1 className=" text-3xl text-white py-5">Book Illustration</h1>
                <h1
                  className={`text-2xl text-white  pl-5 ${
                    isVisible && "line-through"
                  }`}
                >
                  zarrafe
                </h1>
                <h1
                  className={`text-2xl text-white  pl-5 ${
                    isVisible2 && "line-through"
                  }`}
                >
                  ye zarre erfan
                </h1>
                <a href="#12" className={``}>
                  <h1 className=" text-2xl text-white  pl-5">khayyam</h1>
                </a>
                <h1 className=" text-2xl text-white  pl-5">chichast</h1>
                <h1 className=" text-2xl text-white  pl-5">tabaghe sevom</h1>
              </span>
              <span className="px-5">
                <h1 className=" text-3xl text-white py-5">Graphic Design</h1>
              </span>
            </span>
          </div>
        </section>
      </div>
    </>
  );
}
