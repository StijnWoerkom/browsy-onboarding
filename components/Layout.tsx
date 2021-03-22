import React, { ReactNode } from "react";
import Image from "next/image";
import Head from "next/head";

import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({
  children,
  title = "This is the default title",
}: Props): JSX.Element => (
  <div className="browsy-app container flex flex-col mx-auto h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="flex justify-center py-10">
      <Image src="/images/logo.svg" alt="Browsy logo" width={143} height={48} />
    </header>
    <main className="grid grid-cols-1 md:grid-cols-4 flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

export default Layout;
