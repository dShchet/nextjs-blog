import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';


export default function FirstPost() {
    return (
        <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
            {/* <script src="https://connect.facebook.net/en_US/sdk.js" /> */}
        <Script
            src="https://connect.facebook.net/en_US/sdk.js"
            strategy="lazyOnload"
            onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
            }
        />
      <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </Layout>
    );
  }
  
