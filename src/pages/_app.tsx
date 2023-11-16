import "@/styles/globals.css";
import type { AppProps } from "next/app";

import("../mocks/mockHttpRequests").then(({ mockHttpRequests }) => {
  mockHttpRequests();
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
