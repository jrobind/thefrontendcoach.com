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
        <link rel="preconnect" href="https://cdn.iubenda.com/" crossOrigin=""/>
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
          {`(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);`}
        </script>
      </Helmet>
    </>
  );
}