const Button = ({ className, path, type, children, target = false }) => {
  return (
    <>
      <a
        href={path}
        className={`${className} btn btn-${type}`}
        target={target ? "_blank" : "_self"}
        rel={"noreferrer"}
      >
        {children}
      </a>
    </>
  );
};
export default Button;
