import logo from '../../assets/logo_svg.svg';

import style from './Logo.module.css';

type LogoProps = {
  style?: React.CSSProperties;
  className?: string;
};

export const Logo = ({ className, style: customStyle }: LogoProps) => {
  return <img alt='Logo' className={`${style.img} ${className}`} src={logo} style={customStyle} />;
};
