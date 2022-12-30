import React from "react";

const PageHeader = ({ title, children }) => {
  return (
    <div className="flex items-baseline justify-between pb-6">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default PageHeader;
