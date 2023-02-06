import Head from "next/head";
import Footer from "../modules/Footer";
import Navbar from "../modules/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!-- Primary Meta Tags --> */}
        <title>Portfolio Template - Open source</title>
        <meta name="title" content="Portfolio Template - Open source" />
        <meta
          name="description"
          content="Build or customize your portfolio website using this super easy template. Free to use if you are a member of the community or a contributor to this project"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://github.com/CommunityPro/portfolio-html"
        />
        <meta property="og:title" content="Portfolio Template - Open source" />
        <meta
          property="og:description"
          content="Build or customize your portfolio website using this super easy template. Free to use if you are a member of the community or a contributor to this project"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/62628408/150613011-b78a7f5a-0af1-4312-aab0-0022e7258693.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://github.com/CommunityPro/portfolio-html"
        />
        <meta
          property="twitter:title"
          content="Portfolio Template - Open source"
        />
        <meta
          property="twitter:description"
          content="Build or customize your portfolio website using this super easy template. Free to use if you are a member of the community or a contributor to this project"
        />
        <meta
          property="twitter:image"
          content="https://user-images.githubusercontent.com/62628408/150613011-b78a7f5a-0af1-4312-aab0-0022e7258693.png"
        />

        {/* <!-- Link --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>

      <header id="hero">
        <Navbar />
      </header>

      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </>
  );
};
export default Layout;
