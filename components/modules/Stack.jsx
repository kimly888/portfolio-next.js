import techStackData from "../data/tech-stack.json";

const Stack = () => {
  return (
    <section id="stack" className="stack-container">
      <div className="division"></div>
      <div className="content-text">
        <h2>Tech Stack</h2>
        <p>
          I'm Fullstack Developer with experience in end-to-end web application
          development. Here are what I use:
        </p>
      </div>

      <article className="tech-stack slider">
        <div className="slide-track">
          {techStackData?.map((tech, index) => {
            return (
              <div className="slide">
                <img key={index} src={tech.background} alt={tech.title} />
              </div>
            );
          })}
          {techStackData?.map((tech, index) => {
            return (
              <div className="slide">
                <img key={index} src={tech.background} alt={tech.title} />
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};
export default Stack;
