import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`max-w-7xl w-full mx-6 sm:mx-6 lg:mx-16 bg-transparent ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
