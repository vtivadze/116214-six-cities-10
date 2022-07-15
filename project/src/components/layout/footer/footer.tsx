import Logo from '../../logo/logo';
import { footerLogoConfig } from '../../../constants';

function Footer(): JSX.Element {
  return (
    <footer className="footer container">
      <Logo config={footerLogoConfig} />
    </footer>
  );
}

export default Footer;
