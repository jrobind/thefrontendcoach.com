import Head from "next/head";
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
      </Head>
      <main>
        <Header/>
        <div>{children}</div>
      </main>
      <Footer/>
    </>
  );
}