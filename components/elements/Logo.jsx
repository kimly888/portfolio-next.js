import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <h1 id="logo">
        <Link href="/">
          <Image src="/logo.png" width={25} height={25} alt="Site Logo" />
        </Link>
      </h1>
    </>
  );
};

export default Logo;
