import Link from "next/link";
import React from "react";

const BrandButton = ({ children, style, href, onClick }) => {
  const StyledItem = () => {
    return (
      <div
        className={`${background(style)} ${text(style)} ${border(
          style
        )} rounded-full px-6 py-2 `}
      >
        {children}
      </div>
    );
  };
  return (
    <div className="hover:scale-105 transition-all hover:shadow-md rounded-full">
      {href ? (
        <Link href={href}>{StyledItem()}</Link>
      ) : (
        <button onClick={onClick}>{StyledItem()}</button>
      )}
    </div>
  );
};

export default BrandButton;

const background = (style) => {
  switch (style) {
    case "primary":
      return "bg-brand-red";
    case "secondary":
      return "bg-brand-navy";
    default:
      return "bg-white";
  }
};

const text = (style) => {
  switch (style) {
    case "primary":
      return "text-white";
    case "secondary":
      return "text-white";
    default:
      return "text-brand-navy";
  }
};

const border = (style) => {
  switch (style) {
    case "primary":
      return "";
    case "secondary":
      return "";
    default:
      return "ring-1 ring-brand-light";
  }
};
