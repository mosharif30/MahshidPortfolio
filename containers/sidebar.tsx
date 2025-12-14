"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { blueHamburger, closeIcon, hamburger } from "../lib/icons";
import { navItems } from "lib/navigationItems";
import Link from "next/link";
import clsx from "clsx";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // قفل کردن اسکرول وقتی منو بازه (بدون تغییر استایل UI)
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((v) => !v);
  const handleClick = () => setIsMenuOpen(false);

  const linkClassName = (isActive: boolean) => {
    return clsx(
      `${
        pathname == "/about"
          ? "text-customBlue text-3xl"
          : pathname == "/project"
          ? "text-customBlue hover:text-white text-3xl"
          : "text-white text-3xl "
      }   hover:text-customGray  flex align-middle   `,
      {
        " text-4xl": isActive,
      }
    );
  };

  const buttonMotion = prefersReducedMotion
    ? {}
    : {
        whileHover: { scale: 1.06 },
        whileTap: { scale: 0.96, rotate: isMenuOpen ? -6 : 6 },
        transition: { type: "spring", stiffness: 500, damping: 30 },
      };

  const overlayVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.22 },
    },
    exit: {
      opacity: 0,
      transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.18 },
    },
  } as const;

  const panelVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 1 }
      : { opacity: 0, y: -10, filter: "blur(6px)" },
    show: prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { type: "spring", stiffness: 240, damping: 26 },
        },
    exit: prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 0,
          y: -6,
          filter: "blur(4px)",
          transition: { duration: 0.18 },
        },
  } as const;

  const navContainerVariants = {
    hidden: {},
    show: {
      transition: prefersReducedMotion
        ? { duration: 0 }
        : { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  } as const;

  const navItemVariants = {
    hidden: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14 },
    show: prefersReducedMotion
      ? { opacity: 1 }
      : {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 380, damping: 28 },
        },
  } as const;

  const iconSwap = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, rotate: -20, scale: 0.9 },
        animate: { opacity: 1, rotate: 0, scale: 1 },
        exit: { opacity: 0, rotate: 20, scale: 0.92 },
        transition: { type: "spring", stiffness: 500, damping: 32 },
      };

  return (
    <div className="relative " ref={menuRef}>
      <motion.button
        className="appearance-none  bg-none border-none cursor-pointer flex flex-col justify-center items-center p-2 fixed top-4 right-4 z-10 "
        onClick={toggleMenu}
        aria-label="Toggle menu"
        {...buttonMotion}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span key={isMenuOpen ? "close" : "hamburger"} {...iconSwap}>
            {isMenuOpen
              ? pathname == "/about"
                ? closeIcon("blue")
                : closeIcon("white")
              : pathname == "/about"
              ? hamburger("greyHover")
              : pathname == "/contact"
              ? blueHamburger()
              : hamburger()}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="hamburger_menu"
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <motion.aside
              className={`md:flex-shrink-0 md:mx-0 md:px-0 flex flex-col-reverse ${
                pathname == "/about"
                  ? "bg-white"
                  : pathname == "/project"
                  ? "bg-customGray"
                  : "bg-customBlue"
              } w-full h-full`}
              variants={panelVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <div className="flex flex-col">
                <div className="lg:sticky lg:top-20">
                  <nav
                    className="flex-col items-center relative pl-3 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                    id="nav"
                  >
                    <div className="flex flex-col space-x-0 items-center justify-center h-screen mx-auto w-full">
                      <motion.div
                        className="justify-start "
                        variants={navContainerVariants}
                        initial="hidden"
                        animate="show"
                      >
                        {Object.keys(navItems).map((path) => {
                          const { name } = navItems[path];
                          const isActive = path === pathname;

                          return (
                            <motion.div
                              key={path}
                              variants={navItemVariants}
                              whileHover={
                                prefersReducedMotion
                                  ? undefined
                                  : { x: 6, scale: isActive ? 1.01 : 1.02 }
                              }
                              whileTap={
                                prefersReducedMotion
                                  ? undefined
                                  : { scale: 0.99 }
                              }
                            >
                              <Link
                                onClick={handleClick}
                                href={path}
                                className={linkClassName(isActive)}
                              >
                                <motion.span
                                  className="relative py-[20px] px-[10px] my-auto"
                                  initial={false}
                                  animate={
                                    prefersReducedMotion
                                      ? undefined
                                      : { opacity: 1 }
                                  }
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 30,
                                  }}
                                >
                                  {name}
                                </motion.span>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </motion.div>
                    </div>
                  </nav>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
