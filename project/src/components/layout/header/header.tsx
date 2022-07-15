import Nav from '../../nav/nav';
import Logo from '../../logo/logo';
import { headerLogoConfig } from '../../../constants';

type HeaderProps = {
  currentElementName: string;
};

function Header(props: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo config={headerLogoConfig} />
          </div>
          {
            //TODO: Replace by useState for isLogin
            props.currentElementName !== 'login' && <Nav />
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
