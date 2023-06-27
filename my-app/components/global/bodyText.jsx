import React from "react";

const BodyText = ({ content, className }) => {
  // ();
  const paragraphs = content.split("\n");
  // (paragraphs.length);
  return (
    <div className={` leading-6 flex flex-col space-y-3 ${className ?? ""}`}>
      {paragraphs.map((i, index) => (
        <p key={index}>{i}</p>
      ))}
    </div>
  );
};

export default BodyText;
