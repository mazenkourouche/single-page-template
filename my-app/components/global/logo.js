import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="h-8 aspect-square sm:h-10 xl:h-14 relative z-30">
        <Image
          src="/images/logo-site.png"
          alt="Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </Link>
  );
};
export default Logo;
