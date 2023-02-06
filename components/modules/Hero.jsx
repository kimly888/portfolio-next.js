import Image from "next/image";
import Button from "../elements/Button";

const Hero = () => {
  return (
    <section className="header-container">
      {/* <!-- Profile Image -->  */}
      <Image
        className="profile-image"
        src="/profile-image.svg"
        width={150}
        height={150}
        alt="profile picture"
      />
      <h1>Hi I'm Jessica</h1>

      <div className="content-text">
        <h2>Building digital</h2>
        <h2>products, brands, and experience.</h2>
        <p>
          A Frontend Developer and Visual Designer with experience in web
          design, brand identity and product design.
        </p>
      </div>

      <Button
        path={"https://github.com/CommunityPro/portfolio-html"}
        type="secondary"
        target
      >
        Connect With Me
      </Button>
    </section>
  );
};

export default Hero;
