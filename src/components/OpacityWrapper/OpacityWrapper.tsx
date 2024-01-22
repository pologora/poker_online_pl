import { LegacyRef, useEffect, useRef, useState } from 'react';

import style from './OpacityWrapper.module.css';

type OpacityWrapperProps = {
  children: React.ReactNode;
};

export const OpacityWrapper = ({ children }: OpacityWrapperProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref: LegacyRef<HTMLDivElement> = useRef(null);
  useEffect(() => {
    const delay = 800;
    setTimeout(() => {
      ref.current?.classList.add('visible');
      setIsVisible(true);
    }, delay);
  }, []);
  return (
    <div className={style.container} ref={ref}>
      {isVisible && children}
    </div>
  );
};
