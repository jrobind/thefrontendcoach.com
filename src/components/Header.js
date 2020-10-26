import Link from "next/link";
import { withRouter } from 'next/router';

function Header({ router }) {
  const isRoot = router.pathname === '/';

  return (
    <>
      <header className={`header z-3 px-3 w-full ${isRoot ? 'bg-main text-white' : 'bg-white text-black'}`}>
        <div className="wrapper">
          <a className={`header__logo ${isRoot ? 'bg-logo-white-small sm:bg-logo-white-large' : 'bg-logo-black-small sm:bg-logo-black-large'} bg-no-repeat left-0 absolute`} href="../"></a>
          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label className="menu-icon cursor-pointer right-0 absolute block select-none sm:hidden" htmlFor="menu-btn"><span className={`nav-icon ${isRoot ? 'bg-white white' : 'bg-black black'} block relative`}></span></label>
          <ul className="menu max-h-0 overflow-hidden sm:absolute sm:flex sm:right-0">
            <li className="menu__item">
              <Link href="/about">
                <a className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5">About</a>
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/blog">
                <a className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5">Blog</a>
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/support">
                <a className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5">Support</a>
              </Link>
            </li>
            <li className="menu__item">
              <Link href="/podcast">
                <a className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5">Podcast</a>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}

export default withRouter(Header);
