import { useMediaQuery } from 'react-responsive';

const useDesktopMediaQuery = () => useMediaQuery({ query: '(min-width: 1280px)' });

const useTabletMediaQuery = () => useMediaQuery({ query: '(minWidth: 768, maxWidth: 991)' });

const useMobileMediaQuery = () => useMediaQuery({ query: '(maxWidth: 767)' });

const useDefaultMediaQuery = () => useMediaQuery({ query: '(minWidth: 768)' });

export const Desktop = ({ children }) => {
  const isDesktop = useDesktopMediaQuery();

  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useTabletMediaQuery();

  return isTablet ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMobileMediaQuery();

  return isMobile ? children : null;
};

export const Default = ({ children }) => {
  const isDefault = useDefaultMediaQuery();

  return isDefault ? children : null;
};
