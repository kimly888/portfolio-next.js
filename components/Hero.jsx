const Hero = () => {
  return (
    <section className="header-container">
      <img className="profile-image" src="/profile-image.svg" alt="" />
      <h1>Hi I'm Franklin</h1>

      <div className="content-text">
        <h2>Building digital</h2>
        <h2>products, brands, and experience.</h2>

        <p>
          A Frontend Developer and Visual Designer with experience in web
          design, brand identity and product design.
        </p>
      </div>
      <a
        href="https://github.com/CommunityPro/portfolio-html"
        className="btn btn-secondary"
        target="_blank"
      >
        Connect With Me
      </a>
    </section>
  );
};

export default Hero;
