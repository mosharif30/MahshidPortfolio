import clsx from "clsx";
import Link from "next/link";
import React from "react";

function NavItem({ path, isActive, setIsMenuOpen, pathname, name }) {
  return (
    <Link
      key={path}
      href={path}
      className={clsx(
        "transition-all text-white  hover:text-gray-200 dark:hover:text-neutral-200 flex align-middle text-4xl",
        {
          " line-through": isActive,
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
      </span>
    </Link>
  );
}

export default NavItem;
