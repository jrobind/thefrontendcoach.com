export default function Footer({ env }) {
  return (
    <>
      <svg className="wave" viewBox="-606.652 143.223 1905.641 147.109" xmlns="http://www.w3.org/2000/svg">
        <path  d="M 826.337 25.54 C 678.546 84.297 603.696 68.787 447.802 35.144 C 293.343 1.811 137.334 1.811 0 1.811 L 0 150 L 1920 150 L 1920 1.811 C 1739.535 -16.685 1566.81 182.718 1378.127 82.941 C 1189.444 -16.836 974.129 -33.218 826.337 25.54 Z" fill="#2B8275" transform="matrix(1, 0, 0, 1, -615.011647, 153.801998)"/>
      </svg>
      <footer className="footer u-bg--main u-c--white u-pb--xlarge u-pr--medium u-pl--medium">
        <div className="footer__upper wrapper u-d--flex u-pb--medium">
          <div className="u-mr--medium">
            <ul>
              <li className="footer__item u-mr--small u-mb--small u-mt--small"><a href="../about.html">About</a></li>
              <li className="footer__item u-mr--small u-mb--small u-mt--small"><a href="../support.html">Support</a></li>
            </ul>
          </div>
          <div className="u-mr--medium">
            <ul>
              <li className="footer__item u-m--small"><a href="/">Blog</a></li>
              <li className="footer__item u-m--small"><a href="../">Podcast</a></li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="footer__item u-m--small"><a href="/">Contact</a></li>
              <li className="footer__item u-m--small"><a href="/">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer__lower u-pt--medium wrapper u-d--flex">
          <span className="u-mr--large u-mt--small footer__item">The Front End Coach 2020</span>
          <span className="u-mt--small footer__item">
            Built by James Robinson
            <a href="https://github.com/jrobind"><img className="footer__icon u-ml--small" alt="GitHub icon" src={`${env === 'prod' ? '../images/github-icon.png' : '/blog/github-icon.png'}`}/></a>
          </span>
        </div>
      </footer>  
    </>
  )
}
