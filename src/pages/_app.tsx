import "@/styles/globals.css";
import type { AppProps } from "next/app";

// import("../mocks/setupMocks").then(({ setupMocks }) => setupMocks());

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
