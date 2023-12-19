"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { blueHamburger, closeIcon, hamburger } from "../lib/icons";
import { navItems } from "lib/navigationItems";
import Link from "next/link";
import clsx from "clsx";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = () => {
    setIsMenuOpen(false);
    setIsModalOpen(false);
  };

  const linkClassName = (isActive: boolean) => {
    return clsx(
      `${
        pathname == "/about"
          ? "text-customBlue text-3xl"
          : pathname.startsWith("/project")
          ? "text-customBlue hover:text-white text-3xl"
          : "text-white text-3xl "
      }   hover:text-customGray  flex align-middle   `,
      {
        " text-4xl": isActive,
      }
    );
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  return (
    <div className="relative " ref={menuRef}>
      <button
        className="appearance-none  bg-none border-none cursor-pointer flex flex-col justify-center items-center p-2 fixed top-4 right-4 z-10 "
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen
          ? pathname == "/about"
            ? closeIcon("blue")
            : closeIcon("white")
          : pathname == "/about"
          ? hamburger("greyHover")
          : pathname == "/contact"
          ? blueHamburger()
          : hamburger()}
      </button>

      {isMenuOpen && (
        <div className="hamburger_menu">
          <aside
            className={`md:flex-shrink-0 md:mx-0 md:px-0 flex flex-col-reverse ${
              pathname == "/about"
                ? "bg-white"
                : pathname.startsWith("/project")
                ? "bg-customGray"
                : "bg-customBlue"
            } w-full h-full`}
          >
            <div className="flex flex-col">
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

                        if (path === "/project") {
                          return (
                            <a key={path} className={linkClassName(isActive)}>
                              <span
                                className="relative py-[20px] px-[10px] my-auto cursor-pointer"
                                onClick={() => setIsModalOpen(true)}
                              >
                                {name}
                              </span>
                            </a>
                          );
                        } else {
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
                        }
                      })}
                    </div>
                  </div>
                </nav>
              </div>

              {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                  <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link
                      onClick={handleClick}
                      href={"/project/Illustration"}
                      className="modal-button"
                    >
                      Illustration
                    </Link>
                    <Link
                      onClick={handleClick}
                      href={"/project/GraphicDesign"}
                      className="modal-button"
                    >
                      Graphic Design
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
