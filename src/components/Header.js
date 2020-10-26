export default function Header() {
  return (
    <>
      <header className="header z-3 px-3 w-full bg-main text-white">
        <div className="wrapper">
          <a className="header__logo bg-no-repeat bg-logo-white-small sm:bg-logo-white-large left-0 absolute" href="../"></a>
          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label className="menu-icon cursor-pointer right-0 absolute block select-none sm:hidden" htmlFor="menu-btn"><span className="nav-icon block relative bg-white"></span></label>
          <ul className="menu max-h-0 overflow-hidden sm:absolute sm:flex sm:right-0">
            <li className="menu__item">
              <a className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5" href="../about.html">About</a>
            </li>
            <li className="menu__item">
              <a className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5" href="/">Blog</a>
            </li>
            <li className="menu__item">
              <a className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5" href="../support.html">Support</a>
            </li>
            <li className="menu__item">
              <a className="block text-base sm:text-lg p-3 sm:px-3 sm:pb-5" href="../">Podcast</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}