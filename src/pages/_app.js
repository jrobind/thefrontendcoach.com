
import App from 'next/app';
import Layout from '../components/Layout';
import { AppWrapper } from '../lib/context';
import { DefaultSeo } from 'next-seo';

import '../styles/index.css';


export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppWrapper>
        <Layout>
          <DefaultSeo 
            title= "The Front End Coach | Get help acquiring the skills you need"
            openGraph = {{
              type: 'website',
              url: 'https://thefrontendcoach.com',
              site_name: 'The Front End Coach',
              locale: 'en_GB',
              images: [
                {
                  url: 'https://www.thefrontendcoach.com/images/james-robinson.jpeg',
                  width: 800,
                  height: 600,
                  alt: 'Photo of James Robinson on a mountain',
                },
              ],
            }}
          />
          <Component {...pageProps} />
        </Layout>
      </AppWrapper>
    )
  }
}
