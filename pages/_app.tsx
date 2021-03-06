/* eslint-disable */
import { AppProps } from 'next/app';
import '../libs'
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
