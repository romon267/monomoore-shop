import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => (
  <div>
    <Head>
      <title>monomoore</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Navbar />
    {children}
  </div>
);

export default Layout;
