import { AppProps } from 'next/app';
import { RecoilRoot, RecoilEnv } from 'recoil';
import { SessionProvider } from 'next-auth/react';
import { createGlobalStyle } from 'styled-components';
import { Session } from 'next-auth';

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

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session} refetchInterval={0} refetchOnWindowFocus={false}>
      <RecoilRoot>
        <GlobalStyled />
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>
  );
}

export default MyApp;
