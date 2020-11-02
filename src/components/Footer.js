import Link from 'next/link';
import Newsletter from './Newsletter';

export default function Footer() {
  return (
    <>
      <Newsletter/>
      <svg className="wave" viewBox="-606.652 143.223 1905.641 147.109" xmlns="http://www.w3.org/2000/svg">
        <path  d="M 826.337 25.54 C 678.546 84.297 603.696 68.787 447.802 35.144 C 293.343 1.811 137.334 1.811 0 1.811 L 0 150 L 1920 150 L 1920 1.811 C 1739.535 -16.685 1566.81 182.718 1378.127 82.941 C 1189.444 -16.836 974.129 -33.218 826.337 25.54 Z" fill="#2B8275" transform="matrix(1, 0, 0, 1, -615.011647, 153.801998)"/>
      </svg>
      <footer className="footer text-sm bg-main text-white pb-6 py-3 px-3">
        <div className="wrapper flex pb-3 flex-wrap">
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
        <div className="pt-3 wrapper flex flex-wrap" style={{borderTop: '1px solid rgba(250, 250, 250, 0.45)'}}>
          <span className="mr-4 mt-2">The Front End Coach 2020</span>
          <span className="mt-2 flex">
            Built by James Robinson
            <a className="flex items-center" href="https://github.com/jrobind"><img className="ml-2" alt="GitHub icon" src="/images/github-icon.png" style={{ width: '18px', marginTop: '-4px'}}/></a>
          </span>
        </div>
      </footer>  
    </>
  )
}