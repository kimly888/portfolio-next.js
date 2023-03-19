import Image from "next/image";

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <a href="mailto:kimly.dev@gmail.com">kimly.dev@gmail.com</a>
        {/* <!-- Social links --> */}
        <div className="social">
          {/* <a href="#" target="_blank">
            <Image
              src="/facebook-icon.svg"
              width={20}
              height={20}
              alt="Facebook"
            />
          </a> */}
          {/* <a href="#" target="_blank">
            <Image
              src="/twitter-icon.svg"
              width={20}
              height={20}
              alt="Twitter"
            />
          </a> */}
          <a
            href="https://www.linkedin.com/in/kimly888/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/linkedin-icon.svg"
              width={20}
              height={20}
              alt="Linkedin"
            />
          </a>
          <a
            href="https://github.com/kimly888"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/github-icon.svg" width={20} height={20} alt="GitHub" />
          </a>
          {/* <a href="#" target="_blank">
            <Image
              src="/hashnode-icon.svg"
              width={20}
              height={20}
              alt="Hashnode"
            />
          </a> */}
        </div>
        {/* <!-- Attribution --> */}
        <div className="attribution">
          <a
            href="https://github.com/CommunityPro/portfolio-html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://user-images.githubusercontent.com/62628408/157202263-9174da24-b19a-4017-9b7c-a1d26ae8f014.svg"
              width={150}
              height={20}
              alt="attribution"
            />
          </a>
        </div>
        <p>
          Copyright &copy; Communitypro <span>{new Date().getFullYear()}</span>,
          All rights reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
