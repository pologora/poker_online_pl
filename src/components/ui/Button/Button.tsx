import { getBackgroundColor, getTextColorBasedOnBgColor } from './helpers';
import { ButtonBgColor } from './types';

import style from './Buttton.module.css';

type ButtonProps = {
  type?: 'text' | 'outlined' | 'contained';
  color?: ButtonBgColor;
  label: string;
  className?: string;
  style?: React.CSSProperties;
};

export const Button = ({ className, color, label, style: customStyles, type }: ButtonProps) => {
  const border = type === 'outlined' ? '1px solid black' : '';
  const bgColorCustom = customStyles?.backgroundColor;
  const bgColor = type === 'contained' ? getBackgroundColor(color, bgColorCustom) : '';
  const textColor = getTextColorBasedOnBgColor(bgColor);

  return (
    <button
      className={`${style.button} ${className}`}
      style={{ ...customStyles, border: border, backgroundColor: bgColor, color: textColor }}
    >
      {label}
    </button>
  );
};
