import { useMediaQuery } from 'react-responsive';

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1279 });
  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  return isTablet ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};

  export const Retina = ({ children }) => {
    const isRetina = useMediaQuery({ minResolution: '2dppx' });
    return isRetina ? children : null;
  } 
  export const NotRetina = ({ children }) => {
    const isRetina = useMediaQuery({ maxResolution: '2dppx' });
    return isRetina ? children : null;
  }



//   Example 
{/* <Default><FcQuestions size="144px" /></Default> */}