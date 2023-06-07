import clsx from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function NavItem({ path, isActive, setIsMenuOpen, pathname, name }) {
  return (
    <Link
      key={path}
      href={path}
      className={clsx(
        "transition-all  hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-4xl",
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
  );
}

export default NavItem;
