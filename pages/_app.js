import { Layout } from "@/components";

import "@/styles/globals.css";
import "@/styles/utilities.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
