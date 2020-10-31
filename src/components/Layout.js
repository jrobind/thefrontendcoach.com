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
        <title>The Front End Coach</title>
        <meta name="description" content="the front end coach is a dedicated support and learning system those who wish to start a career as a front end developer."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header/>
        <div>{children}</div>
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