export default function Header({ env }) {
  console.log(env)
  return (
    <>
      <header className="header u-w--100 u-c--black u-bg--white">
        <div className="wrapper">
          <a className="header__logo dark-dev u-fs--xlarge u-fw--700" href="../"></a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn"><span className="nav-icon dark-dev u-bg--white"></span></label>
          <ul className="menu u-fs--small">
            <li className="menu__item">
              <a className="u-pt--medium u-pr--big u-pb--medium" href="../about.html">About</a>
            </li>
            <li className="menu__item">
              <a className="u-pt--medium u-pr--big u-pb--medium" href="/">Blog</a>
            </li>
            <li className="menu__item">
              <a className="u-pt--medium u-pr--big u-pb--medium" href="../support.html">Support</a>
            </li>
            <li className="menu__item">
              <a className="u-pt--medium u-pr--medium u-pb--medium" href="../">Podcast</a>
            </li>
          </ul>
        </div>
      </header>
      {env === 'dev' && <style jsx>
      {`
        @font-face {
          font-family: 'Nunito';
          font-style: normal;
          font-weight: 400;
          src: local('Nunito Regular'), local('Nunito-Regular'),
              url('blog/nunito-v14-latin-regular.woff2') format('woff2'),
              url('blog/nunito-v14-latin-regular.woff') format('woff');
        }

        .header__logo.dark-dev {
          background-image: url(/blog/logo-black-small.png);
        }
        
        @media only screen and (min-width: 700px) {
          .header__logo.dark-dev {
            background-image: url(/blog/logo-black-large.png);
          }
        }
      `}
    </style>}
    </>
  )
}
