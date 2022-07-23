import Nav from '../nav/nav';

function Header(): JSX.Element {
  const isLogin = true;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active" href="/">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a>
          </div>
          {isLogin && <Nav />}
        </div>
      </div>
    </header>
  );
}

export default Header;
