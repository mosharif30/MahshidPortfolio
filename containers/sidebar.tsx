"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { closeIcon, hamburger } from "../lib/icons";
import { navItems } from "lib/navigationItems";
import Link from "next/link";
import clsx from "clsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleClick = () => {
    setIsMenuOpen(false);
  };

  const linkClassName = (isActive: boolean) => {
    return clsx(
      `${
        pathname == "/about" ? "text-customBlue" : "text-white"
      } transition-all  hover:text-gray-200 dark:hover:text-neutral-200 flex align-middle text-4xl`,
      {
        "mr-4": isActive,
      }
    );
  };

  return (
    <div className="relative " ref={menuRef}>
      <button
        className="appearance-none bg-none border-none cursor-pointer flex flex-col justify-center items-center p-2 fixed top-4 right-4 z-10"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen
          ? pathname == "/about"
            ? closeIcon("blue")
            : closeIcon("white")
          : hamburger()}
      </button>

      {isMenuOpen && (
        <div className="hamburger_menu">
          <aside
            className={`md:flex-shrink-0 md:mx-0 md:px-0 ${
              pathname == "/about" ? "bg-white" : "bg-customBlue"
            } w-full h-full`}
          >
            <div className="lg:sticky lg:top-20">
              <nav
                className="flex-col items-center relative pl-3 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                id="nav"
              >
                <div className="flex flex-col space-x-0 items-center justify-center h-screen mx-auto w-full">
                  <div className="justify-start ">
                    {Object.keys(navItems).map((path) => {
                      const { name } = navItems[path];
                      const isActive = path === pathname;
                      return (
                        <Link
                          onClick={handleClick}
                          key={path}
                          href={path}
                          className={linkClassName(isActive)}
                        >
                          <span className="relative py-[20px] px-[10px] my-auto">
                            {name}
                          </span>
                        </Link>
                      );
                    })}
                    <span className="flex  rounded-md text-sm  text-white ">
                      mahshidasoudekhah@gmail.com
                    </span>
                  </div>
                </div>
              </nav>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
