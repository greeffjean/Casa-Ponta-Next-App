
import type { AppProps } from 'next/app';
import 'assets/styles/globals.css'
import { AppContext } from 'context/AppContext';


function MyApp({ Component, pageProps }: AppProps) {
  return <AppContext>
    <Component {...pageProps} />
  </AppContext>
}

export default MyApp
