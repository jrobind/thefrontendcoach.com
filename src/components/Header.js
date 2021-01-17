import { useState } from 'react';
import { useWindowSize } from '../lib/hooks'; 
import Link from "next/link";
import Router, { withRouter } from 'next/router';
import classname from 'classnames';

function Header({ router }) {
  const isDefault = ['/', '/podcast'].includes(router.pathname);
  const { width } = useWindowSize();
  const [active, toggleActive] = useState(false);

  const handleMenuToggle = (e) => {
    toggleActive((prevState) => !prevState);
  }

  Router.events.on('routeChangeComplete', () => toggleActive(false));

  return (
    <>
      <header className={`header z-3 px-3 w-full ${isDefault ? 'bg-main text-white' : 'bg-white text-black'}`}>
        <div 
          className={classname({
            'active': active,
            'wrapper': true,
          })}
        >
          <a aria-label="The Front End Coach logo" className={`header__logo ${isDefault ? 'bg-logo-white-small sm:bg-logo-white-large' : 'bg-logo-black-small sm:bg-logo-black-large'} bg-no-repeat left-0 absolute`} href="../"></a>
          <span hidden id="menu-label">Menu</span>
          <button
            onClick={handleMenuToggle}
            id="menu-toggle"
            aria-expanded={active}
            aria-label="menu"
            aria-labelledby="menu"
            className="menu-icon cursor-pointer right-0 absolute block select-none sm:hidden">
            <span className={`nav-icon ${isDefault ? 'bg-white white' : 'bg-black black'} block relative`}></span>
          </button>
          <nav
            id="menu"
            aria-labelledby="menu"
            className="menu"
          >
            <ul className="max-h-0 overflow-hidden sm:absolute sm:flex sm:right-0">
              <li className="menu__item">
                <Link href="/about">
                  <a tabIndex={!active && width < 700 ? '-1' : '0'} className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5">About</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/blog">
                  <a tabIndex={!active && width < 700 ? '-1' : '0'} className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5">Blog</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/support">
                  <a tabIndex={!active && width < 700 ? '-1' : '0'} className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5">Support</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/podcast">
                  <a tabIndex={!active && width < 700 ? '-1' : '0'} className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5">Podcast</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default withRouter(Header);
