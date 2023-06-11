import clsx from "clsx";
import Link from "next/link";
import React from "react";

const NavItem = ({ path, isActive, setIsMenuOpen, pathname, name }) => {
  const handleClick = () => {
    setIsMenuOpen(false);
  };

  const linkClassName = clsx(
    "transition-all text-white hover:text-gray-200 dark:hover:text-neutral-200 flex align-middle text-4xl",
    {
      "line-through": isActive,
    }
  );

  return (
    <Link
      onClick={handleClick}
      key={path}
      href={path}
      className={linkClassName}
    >
      <span className="relative py-[20px] px-[10px] my-auto">{name}</span>
    </Link>
  );
};

export default NavItem;
