import Image from "next/image";
import Button from "../elements/Button";

const Hero = () => {
  return (
    <section className="header-container">
      {/* <!-- Profile Image -->  */}
      <Image
        className="profile-image"
        src="/profile-image.jpg"
        width={150}
        height={150}
        alt="profile picture"
      />
      <h1>Hi!👋 I'm Kim, and I love</h1>

      <div className="content-text">
        <h2>Building digital experiences</h2>
        <p>
          I'm a Fullstack Developer with experience in end-to-end web
          application development.
        </p>
      </div>

      <Button path={"https://github.com/kimly888"} type="secondary" target>
        Dig into my universe
      </Button>
    </section>
  );
};

export default Hero;
