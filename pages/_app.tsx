import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import "../styles/globals.css";
import "../styles/app.css";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
