import React from "react";

const SiteContainer = ({ children }) => {
  return (
    <main className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 sm:pt-24">
      {children}
    </main>
  );
};

export default SiteContainer;
