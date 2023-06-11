"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./sidebar.module.css";
import { closeIcon } from "../../components/icons";
import NavItem from "components/NavItem";
import { navItems } from "components/navigationItems";

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

  const hamburgerLineClassName =
    pathname === "/about" || pathname === "/project"
      ? styles.hamburger_line_white
      : styles.hamburger_line;

  return (
    <div className="relative" ref={menuRef}>
      {isMenuOpen ? (
        <button
          className={styles.hamburger_menu_btn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {closeIcon()}
        </button>
      ) : (
        <button
          className={styles.hamburger_menu_btn}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {[1, 2, 3].map((index) => (
            <span key={index} className={hamburgerLineClassName} />
          ))}
        </button>
      )}

      {isMenuOpen && (
        <div className={styles.hamburger_menu}>
          <aside className="md:flex-shrink-0 md:mx-0 md:px-0 bg-customBlue w-full h-full">
            <div className="lg:sticky lg:top-20">
              <nav
                className="flex-col items-center relative pl-3 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
                id="nav"
              >
                <div className="flex flex-col space-x-0 items-center justify-center h-screen mx-auto w-full">
                  <div className="justify-start">
                    {Object.entries(navItems).map(([path, { name, subs }]) => {
                      const isActive = path === pathname;
                      return (
                        <NavItem
                          key={path}
                          path={path}
                          name={name}
                          isActive={isActive}
                          setIsMenuOpen={setIsMenuOpen}
                          pathname={pathname}
                        />
                      );
                    })}
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
