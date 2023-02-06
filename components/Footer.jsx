const Footer = () => {
  return (
    <div id="footer">
      <div class="container">
        <a href="mailto:communitypro47@gmail.com">communitypro47@gmail.com</a>
        {/* <!-- Social links --> */}
        <div class="social">
          <a href="#" target="_blank">
            <img src="/facebook-icon.svg" alt="Facebook" />
          </a>
          <a href="#" target="_blank">
            <img src="/twitter-icon.svg" alt="Twitter" />
          </a>
          <a href="#" target="_blank">
            <img src="/linkedin-icon.svg" alt="Linkedin" />
          </a>
          <a href="#" target="_blank">
            <img src="/github-icon.svg" alt="GitHub" />
          </a>
          <a href="#" target="_blank">
            <img src="/hashnode-icon.svg" alt="Hashnode" />
          </a>
        </div>
        {/* <!-- Attribution --> */}
        <div class="attribution">
          <a
            href="https://github.com/CommunityPro/portfolio-html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://user-images.githubusercontent.com/62628408/157202263-9174da24-b19a-4017-9b7c-a1d26ae8f014.svg"
              alt="attribution"
              width="150px"
            />
          </a>
        </div>
        <p>
          Copyright &copy; Communitypro <span id="datee"></span>, All rights
          reserved
        </p>
      </div>
    </div>
  );
};
export default Footer;
