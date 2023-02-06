import Image from "next/image";

const Logo = () => {
  return (
    <>
      <h1 id="logo">
        <a href="https://github.com/CommunityPro/portfolio-html">
          <Image src="/logo.png" width={25} height={25} alt="Site Logo" />
        </a>
      </h1>
    </>
  );
};

export default Logo;
