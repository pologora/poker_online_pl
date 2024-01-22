/* eslint-disable no-magic-numbers */
import { ButtonBgColor, TextColor } from './types';

export const buttonBgColorsVars = {
  primary: 'var(--primary)',
  error: 'var(--error)',
  secondary: 'var(--secondary)',
  important: 'var(--important)',
};

export function getCssVariableValue(variable: string) {
  return document.documentElement.style.getPropertyValue(variable);
}

export function getTextColorBasedOnBgColor(bgColor: string): TextColor {
  if (!bgColor) return 'var(--textDark)';

  if (bgColor.includes('var')) {
    bgColor = getCssVariableValue(bgColor);
  }
  // Remove the hash (#) if it's present
  const hexWithoutHash = bgColor.replace(/^#/, '');

  // Parse the hex color code into RGB components
  const bigint = parseInt(hexWithoutHash, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Calculate the relative luminance (perceived brightness)
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Determine the text color based on luminance
  return luminance > 128 ? 'var(--textDark)' : 'var(--textLight)';
}

export function getBackgroundColor(color: ButtonBgColor = 'primary', custom: string | undefined) {
  if (custom) return custom;
  switch (color) {
    case 'error':
      return buttonBgColorsVars.error;
    case 'primary':
      return buttonBgColorsVars.primary;
    case 'secondary':
      return buttonBgColorsVars.secondary;
    case 'important':
      return buttonBgColorsVars.important;

    default:
      return buttonBgColorsVars.primary;
  }
}
