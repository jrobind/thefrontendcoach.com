
import App from 'next/app';
import Layout from '../components/Layout';
import { DefaultSeo } from 'next-seo';

import '../styles/index.css';


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Layout>
        <DefaultSeo 
          title="The Front End Coach"
          openGraph = {{
            type: 'website',
            url: 'https://thefrontendcoach.com',
            site_name: 'The Front End Coach',
          }}
        />
        <Component {...pageProps} />
      </Layout>
    )
  }
}