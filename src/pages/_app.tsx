import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function App({ Component, pageProps }: AppProps) {
  const { initialState } = pageProps;

  return (
    <Provider>
      <ToastContainer />
      <Component {...pageProps} />
    </Provider>
  );
}
