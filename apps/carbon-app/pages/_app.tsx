import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
// import 'carbon-components/scss/globals/scss/styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to carbon-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
