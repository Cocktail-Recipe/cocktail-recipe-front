import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    padding-bottom: 60px;
    background-color: #EFEFEF;
    min-height: 100%;
  }
  .scroll {
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyled />
      <Component {...pageProps} />
      <Head>
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      </Head>
    </RecoilRoot>
  );
}

export default MyApp;
