import { useNavigate } from 'react-router-dom';

import { OpacityWrapper } from '../OpacityWrapper/OpacityWrapper';

import style from './Navigation.module.css';

type NavigationItemProps = {
  color: string;
  title: string;
  route: string;
  isActive: boolean;
  children?: React.ReactNode;
};

export const NavigationItem = ({
  children,
  color,
  isActive,
  route,
  title,
}: NavigationItemProps) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(route);
  };

  const visibleStyle = !isActive ? style.visible : '';

  return (
    <div
      className={`${style.navItem} ${isActive ? style.active : ''}`}
      style={{ backgroundColor: color }}
      onClick={!isActive ? handleOnClick : undefined}
    >
      <p className={`${style.title} ${visibleStyle}`}>{title}</p>
      {isActive && <OpacityWrapper>{children}</OpacityWrapper>}
    </div>
  );
};
