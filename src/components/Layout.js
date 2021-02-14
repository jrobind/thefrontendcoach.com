import Head from "next/head";
import Helmet from 'react-helmet';
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <link rel="prefetch" href="/images/logo-white.svg" as="image"/>
        <link rel="prefetch" href="/images/logo-black.svg" as="image"/>
        <link
          rel="preload"
          href="/fonts/karla-v15-latin-700.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/nunito-v14-latin-regular.woff"
          as="font"
          crossOrigin=""
        />
        <link rel="prefetch" href="/images/question.svg" as="image"/>
        <link rel="prefetch" href="/images/blog-home-blob-2.svg" as="image"/>
        <link rel="prefetch" href="/images/blog-home-blob.svg" as="image"/>
      </Head>
      <style jsx global>{`
        #__next {
          min-height: 100%;
          display: flex;
          justify-content: space-between;
          flex-direction: column;
        }
      `}
      </style>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
      <Helmet>
        <script type="text/javascript">
          {`
            document.body.classList.add('font-loading');
            document.fonts.onloadingdone = function (fontFaceSetEvent) {
              document.body.classList.remove('font-loading');
            };
          `}
        </script>
      </Helmet>
    </>
  );
}