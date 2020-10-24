import Head from 'next/head'
import Header from './Header'

export default function Layout({ children, pageTitle, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Front End Coach</title>
        <meta name="description" content="the front end coach is a dedicated support and learning system those who wish to start a career as a front end developer."/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>{pageTitle}</title>
      </Head>
      <section className="blog">
        <div className="content">{children}</div>
      </section>
      <footer className="u-mb--giant u-p--huge">Built by me!</footer>
    </>
  )
}