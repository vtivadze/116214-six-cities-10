type LogoProps = {
  config: {
    destination: string;
    isActive: boolean;
    width: string;
    height: string;
  }
}

function Logo({config}: LogoProps): JSX.Element {
  let className = `${config.destination}__logo-link`;
  if (config.isActive) {
    className += ` ${className}--active`;
  }

  return (
    <a className={className} href="/">
      <img
        className={`${config.destination}__logo`}
        src="img/logo.svg"
        alt="6 cities logo"
        width={config.width}
        height={config.height}
      />
    </a>
  );
}

export default Logo;
