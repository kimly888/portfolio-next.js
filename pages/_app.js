import { Raleway } from "@next/font/google";
import Layout from "@/components/layouts/Layout";
import { StateContext } from "@/context/StateContext";

import "@/styles/globals.css";
import "@/styles/utilities.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={raleway.className}>
      <StateContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </div>
  );
}
