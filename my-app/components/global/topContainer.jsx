import React from "react";

const TopContainer = ({ children }) => {
  return (
    <div className="pt-[3.5em] sm:pt-[4em] xl:pt-[4.9em] w-full">
      {children}
    </div>
  );
};

export default TopContainer;
