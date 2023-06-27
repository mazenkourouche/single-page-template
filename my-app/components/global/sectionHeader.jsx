import React from "react";

const SectionHeader = ({ caption, title, className }) => {
  return (
    <div
      className={`${className ?? "text-brand-navy"} flex flex-col space-y-3`}
    >
      <p className="uppercase font-medium">{caption}</p>
      <p className="text-5xl font-light">{title}</p>
    </div>
  );
};

export default SectionHeader;
