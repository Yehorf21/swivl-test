import { useMediaQuery } from 'react-responsive';

export const useResponsiveValues = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 640 });

  const getResponsiveValue = (
    mobile: string,
    tablet: string,
    desktop: string,
  ) => {
    if (isDesktop) {
      return desktop;
    } else if (isTablet) {
      return tablet;
    }

    return mobile;
  };

  return { getResponsiveValue };
};
