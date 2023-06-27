import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot, RecoilEnv } from 'recoil';

import { createGlobalStyle } from 'styled-components';

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

const GlobalStyled = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    padding-bottom: 60px;
    background-color: #141414;;
    min-height: 100%;
    color: #ffffff;
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
