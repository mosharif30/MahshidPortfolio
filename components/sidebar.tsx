"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";

const navItems = {
  "/": {
    name: "home",
    subs: [],
  },
  "/about": {
    name: "about",
    subs: [],
  },
  "/Illustration": {
    name: "Illustration",
    subs: [
      { url: "/Illustration/book", name: "book" },
      { url: "/Illustration/practical", name: "practical" },
    ],
  },
  "/GraphicDesign": {
    name: "Graphic Design",
    subs: [],
  },
};

function Logo() {
  return (
    <Link aria-label="Lee Robinson" href="/">
      <motion.svg
        className="text-black dark:text-white h-[25px] md:h-[37px]"
        width="55"
        height="55"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 50,
          }}
          d="M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z"
          fill="currentColor"
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <aside className="md:w-[200px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
              {Object.entries(navItems).map(([path, { name, subs }]) => {
                const isActive = path === pathname;
                if (subs.length) {
                  return (
                    <>
                      <Link
                        key={path}
                        href={path}
                        className={clsx(
                          "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle ",
                          {
                            "text-neutral-500": !isActive,
                            "font-bold": isActive,
                          }
                        )}
                      >
                        <span className="relative py-[5px] px-[10px] ">
                          {name}
                          {path === pathname ? (
                            <motion.div
                              className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                              layoutId="sidebar"
                              transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 30,
                              }}
                            />
                          ) : null}
                        </span>
                      </Link>

                      <>
                        {subs.map((item) => {
                          return (
                            <>
                              <Link
                                key={item.url}
                                href={item.url}
                                className={clsx(
                                  "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                                  {
                                    "text-neutral-500": !isActive,
                                    "font-bold": isActive,
                                  }
                                )}
                              >
                                <span className="relative py-[5px] px-[10px] ml-5">
                                  {item.name}
                                  {item.url === pathname ? (
                                    <motion.div
                                      className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                                      layoutId="sidebar"
                                      transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 30,
                                      }}
                                    />
                                  ) : null}
                                </span>
                              </Link>
                            </>
                          );
                        })}
                      </>
                    </>
                  );
                } else {
                  return (
                    <>
                      <Link
                        key={path}
                        href={path}
                        className={clsx(
                          "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                          {
                            "text-neutral-500": !isActive,
                            "font-bold": isActive,
                          }
                        )}
                      >
                        <span className="relative py-[5px] px-[10px]">
                          {name}
                          {path === pathname ? (
                            <motion.div
                              className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                              layoutId="sidebar"
                              transition={{
                                type: "spring",
                                stiffness: 350,
                                damping: 30,
                              }}
                            />
                          ) : null}
                        </span>
                      </Link>
                    </>
                  );
                }
              })}
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  );
}
