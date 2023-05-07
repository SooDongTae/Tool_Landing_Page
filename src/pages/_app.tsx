import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";
export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return <Component {...pageProps} />;
}
