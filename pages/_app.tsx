import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { NextPageWithLayout } from "./page";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;

  // Use the layout defined at page level if possible
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
