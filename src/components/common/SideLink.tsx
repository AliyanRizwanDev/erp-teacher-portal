import React, { useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

interface SideLinksProps {
  text: string;
  src: string | ReactNode;
  path: string;
  children?: { text: string; path: string }[];
  isImage?: boolean;
}

export const SideLink = ({
  text,
  src,
  path,
  isImage,
  children,
}: SideLinksProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const hasChildren = children && children.length > 0;

  // Check if any child route is active to highlight parent
  const isChildActive =
    hasChildren &&
    children.some((child) => location.pathname.includes(child.path));

  const toggleDropdown = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault();
      e.stopPropagation();
      setIsOpen(!isOpen);
    }
  };

  // For items with no path (like Requisitions), we use a div instead of NavLink

  return (
    <div className="w-full mb-3">
      <div className="flex items-center w-full">
        {path ? (
          <NavLink
            to={path}
            className={({ isActive }: { isActive: boolean }) =>
              `flex items-center w-full px-3 py-2 gap-2 rounded-lg cursor-pointer justify-between ${
                isActive || isChildActive
                  ? "bg-secondaryBgColor text-white"
                  : "bg-white text-primaryParaColor hover:bg-primaryBgColor"
              }`
            }
          >
            <div className="flex items-center gap-2">
              {isImage ? (
                <img
                  src={src as string}
                  alt="icon"
                  className={`filter cursor-pointer ${
                    (path && location.pathname === path) || isChildActive
                      ? "invert brightness-0 saturate-100"
                      : ""
                  }`}
                  onClick={
                    hasChildren
                      ? (e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsOpen(!isOpen);
                        }
                      : undefined
                  }
                />
              ) : (
                <div
                  onClick={
                    hasChildren
                      ? (e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setIsOpen(!isOpen);
                        }
                      : undefined
                  }
                  className="cursor-pointer"
                >
                  {src}
                </div>
              )}
              <h1 className="bg-transparent select-none roboto-font flex-grow roboto-font">
                {text}
              </h1>
            </div>
            {hasChildren && (
              <div
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            )}
          </NavLink>
        ) : (
          <div
            className={`flex items-center w-full px-3 py-2 gap-2 rounded-lg cursor-pointer justify-between ${
              isChildActive
                ? "bg-secondaryBgColor text-white"
                : "bg-white text-primaryParaColor hover:bg-primaryBgColor"
            }`}
            onClick={hasChildren ? toggleDropdown : undefined}
          >
            <div className="flex items-center gap-2">
              {isImage ? (
                <img
                  src={src as string}
                  alt="icon"
                  className={`filter ${
                    isChildActive ? "invert brightness-0 saturate-100" : ""
                  }`}
                />
              ) : (
                <>{src}</>
              )}
              <h1 className="bg-transparent select-none roboto-font flex-grow roboto-font">
                {text}
              </h1>
            </div>
            {hasChildren && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(!isOpen);
                }}
              >
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            )}
          </div>
        )}
      </div>

      {hasChildren && isOpen && (
        <div className="mt-1 flex flex-col gap-1">
          {children.map((child) => (
            <NavLink
              key={child.text}
              to={child.path}
              className={({ isActive }) =>
                `flex items-center w-full px-3 py-2 rounded-lg pl-11 cursor-pointer text-base ${
                  isActive
                    ? "bg-[#bfdbef] text-primaryParaColor"
                    : "bg-white text-primaryParaColor hover:bg-primaryBgColor"
                }`
              }
            >
              {child.text}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};
