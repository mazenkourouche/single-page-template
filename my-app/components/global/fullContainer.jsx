import React from "react";

const FullContainer = ({ children, className }) => {
  return (
    <div className={`w-full flex justify-center ${className} py-12`}>
      {children}
    </div>
  );
};

export default FullContainer;
