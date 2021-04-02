import '../styles/globals.css';
import type { AppProps /* , AppContext */ } from 'next/app';
import { Provider } from 'react-redux';
import store from '../lib/state/store';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  );
}

export default MyApp;
