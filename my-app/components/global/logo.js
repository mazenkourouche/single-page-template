import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="h-8 aspect-square sm:h-10 xl:h-14 relative">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </Link>
  );
};
export default Logo;
