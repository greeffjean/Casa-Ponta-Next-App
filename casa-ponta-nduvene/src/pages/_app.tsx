
import type { AppProps } from 'next/app';
import 'assets/styles/globals.css'
import { AppContext } from 'context/AppContext';
import { UserDeviceContext } from 'context/UserDeviceContext';
import { UseAppScrollState } from 'hooks/UseAppScrollState';


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserDeviceContext>
      <AppContext>
        <UseAppScrollState />
        <Component {...pageProps} />
      </AppContext>
    </UserDeviceContext>
  )

}

export default MyApp
