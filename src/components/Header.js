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
          <a aria-label="The Front End Coach logo" className={`header__logo ${isDefault ? 'bg-logo-white' : 'bg-logo-black'} bg-no-repeat left-0 absolute`} href="../"></a>
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
                  <a tabIndex={!active && width < 700 ? '-1' : ''} className="font-bold block text-sm sm:text-tiny py-3 sm:p-0 sm:mx-3 sm:mb-5 sm:mt-3">About</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/blog">
                  <a tabIndex={!active && width < 700 ? '-1' : ''} className="font-bold block text-sm sm:text-tiny py-3 sm:p-0 sm:mx-3 sm:mb-5 sm:mt-3">Blog</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/support">
                  <a tabIndex={!active && width < 700 ? '-1' : ''} className="font-bold block text-sm sm:text-tiny py-3 sm:p-0 sm:mx-3 sm:mb-5 sm:mt-3">Support</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/podcast">
                  <a tabIndex={!active && width < 700 ? '-1' : ''} className="font-bold block text-sm sm:text-tiny py-3 sm:p-0 sm:mx-3 sm:mr-1 sm:mb-5 sm:mt-3">Podcast</a>
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
