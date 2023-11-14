import { mockHttpRequests } from "@/mocks/mockHttpRequests";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

mockHttpRequests();

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
