import Image from "next/image";
import React from "react";

const BrandImage = ({ className, objectFit, alt, src, position }) => {
  return (
    <div
      className={`${className} ${
        position ?? "relative"
      } rounded-2xl overflow-hidden hover:shadow-lg transition-all`}
    >
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        style={{ objectFit: objectFit ?? "cover" }}
      />
    </div>
  );
};

export default BrandImage;
