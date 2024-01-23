import { ThemeContextProvider } from '../ThemeContext/ThemeContext';

type ContextWrapperType = {
  children: React.ReactNode;
};

export const GlobalContextProvider = ({ children }: ContextWrapperType) => {
  return (
    <>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </>
  );
};
