"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutGroup, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import { closeIcon } from "./icons";
const navItems = {
  "/": {
    name: "Home",
    subs: [],
  },
  "/about": {
    name: "About",
    subs: [],
  },
  "/project": {
    name: "Project",
    subs: [],
  },
  "/contact": {
    name: "Contact",
    subs: [],
  },
  // "/Illustration": {
  //   name: "Illustration",
  //   subs: [
  //     { url: "/Illustration/book", name: "book" },
  //     { url: "/Illustration/practical", name: "practical" },
  //   ],
  // },
  // "/GraphicDesign": {
  //   name: "Graphic Design",
  //   subs: [],
  // },
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  let pathname = usePathname() || "/";
  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <div className="relative  " ref={menuRef}>
      {isMenuOpen ? (
        <button
          className={styles.hamburger_menu_btn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {closeIcon()}
        </button>
      ) : (
        <>
          {pathname == "/about" ? (
            <button
              className={styles.hamburger_menu_btn}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={styles.hamburger_line_white} />
              <span className={styles.hamburger_line_white} />
              <span className={styles.hamburger_line_white} />
            </button>
          ) : (
            <button
              className={styles.hamburger_menu_btn}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span className={styles.hamburger_line} />
              <span className={styles.hamburger_line} />
              <span className={styles.hamburger_line} />
            </button>
          )}
        </>
      )}

      {isMenuOpen && (
        <div className={styles.hamburger_menu}>
          <aside className=" md:flex-shrink-0  md:mx-0 md:px-0  bg-customBlue  w-full h-full ">
            <div className="lg:sticky lg:top-20">
              {/* <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
                <Logo />
              </div> */}
              <LayoutGroup>
                <nav
                  className="flex-col items-center relative pl-3 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                  id="nav"
                >
                  <div className="flex flex-col space-x-0    items-center justify-center h-screen mx-auto text-4xl w-full">
                    <div className="justify-start">
                      {Object.entries(navItems).map(
                        ([path, { name, subs }]) => {
                          const isActive = path === pathname;
                          if (subs.length) {
                            return (
                              <div key={path}>
                                <Link
                                  href={path}
                                  className={clsx(
                                    "transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle ",
                                    {
                                      "text-white": !isActive,
                                      "font-bold": isActive,
                                    }
                                  )}
                                >
                                  <span className="relative py-[10px] px-[20px] ">
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
                                {pathname.includes(path) && (
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
                                                "text-white": !isActive,
                                                "font-bold": isActive,
                                              }
                                            )}
                                          >
                                            <span
                                              onClick={() => {
                                                setIsMenuOpen(false);
                                              }}
                                              className="relative py-[10px] px-[20px] ml-5"
                                            >
                                              {item.name}
                                              {item.url === pathname ? (
                                                <motion.div
                                                  className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1] "
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
                                )}
                              </div>
                            );
                          } else {
                            return (
                              <>
                                <Link
                                  key={path}
                                  href={path}
                                  className={clsx(
                                    "transition-all  hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle",
                                    {
                                      "text-white": !isActive,
                                      "font-bold": isActive,
                                    }
                                  )}
                                >
                                  <span
                                    onClick={() => {
                                      setIsMenuOpen(false);
                                    }}
                                    className="relative py-[20px] px-[10px] my-auto "
                                  >
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
                        }
                      )}
                    </div>
                  </div>
                </nav>
              </LayoutGroup>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
