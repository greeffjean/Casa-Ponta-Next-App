
import type { AppProps } from 'next/app';
import 'assets/styles/globals.css'
import { AppContext } from 'context/AppContext';
import { UseAppScrollState } from 'hooks/UseAppScrollState';


function MyApp({ Component, pageProps }: AppProps) {

  return <AppContext>
    <UseAppScrollState />
    <Component {...pageProps} />
  </AppContext>
}

export default MyApp
