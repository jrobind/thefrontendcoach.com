import Link from 'next/link';
import Router, { withRouter } from 'next/router';
import Newsletter from './Newsletter';
import Wave from './Wave';

function Footer({ router }) {
  const isNewsletterPage = router.pathname === '/newsletter';

  return (
    <>
      <Newsletter newsletterPage={isNewsletterPage}/>
      <Wave alignment="top"/>
      <footer className="footer text-sm bg-main text-white pb-6 py-3 px-3">
        <div className="wrapper">
          <div className="flex flex-wrap items-start">
            <div className="mr-3">
              <ul>
                <li className="mr-2 mb-2 mt-2">
                  <Link href="/about">
                    <a className="p-1">About</a>
                  </Link>
                </li>
                <li className="mr-2 mb-2 mt-2">
                  <Link href="/support">
                    <a className="p-1">Support</a>
                  </Link>
                </li>
                <li className="mb-2 mt-2">
                  <Link href="/newsletter">
                    <a className="p-1">Newsletter</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mr-3">
              <ul>
                <li className="mr-2 mb-2 mt-2">
                  <Link href="/blog">
                    <a className="p-1">Blog</a>
                  </Link>
                </li>
                <li className="mr-2 mb-2 mt-2">
                  <Link href="/podcast">
                    <a className="p-1">Podcast</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mr-2 p-1 mt-1">james@thefrontendcoach.com</li>
                <li className="mr-2 mb-2 p-1">
                  <Link href="https://www.iubenda.com/privacy-policy/79995354">
                    <a className="iubenda-white iubenda-embed" title="Privacy Policy">Privacy Policy</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center pt-2 pb-4">
            <a href="https://github.com/jrobind" className="mr-3 pl-1">
              <img alt="GitHub icon" src="/images/github-icon.png" width="18" height="18" style={{ marginTop: '-4px'}}/>
            </a>
            <a href="https://twitter.com/FrontEndCoach">
              <img alt="Twitter icon" src="/images/twitter-icon.svg" width="18" height="18" style={{ marginTop: '-4px'}}/>
            </a>
          </div>
          <div className="pt-3 wrapper flex flex-wrap" style={{borderTop: '1px solid rgba(250, 250, 250, 0.45)'}}>
            <span className="mr-4 mt-2">The Front End Coach 2020</span>
            <span className="mt-2">Built by James Robinson</span>
          </div>
        </div>
      </footer>  
    </>
  )
}

export default withRouter(Footer);
