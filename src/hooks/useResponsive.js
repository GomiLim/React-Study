import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const Pc = ({ children }) => {
  const isPc = useMediaQuery({
    query: '(max-width : 767px)',
  });
  return <React.Fragment>{isPc && children}</React.Fragment>;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: '(max-width : 767px)',
  });
  return <React.Fragment>{isTablet && children}</React.Fragment>;
};

export const Mobile = (mobile) => {
  var mobileLen = Object.keys(mobile).length;
  const isMobile = useMediaQuery({
    query: '(max-width : 767px)',
  });
  // return <React.Fragment>{isMobile && <div>{mobile}</div>}</React.Fragment>;
  return isMobile && mobileLen !== 0 ? mobile.mobile : `<div></div>`;
};

export const WindowSize = () => {
  const onlyIsPc = useMediaQuery({
    query: '(max-width : 767px)',
  });
  const onlyIsTablet = useMediaQuery({
    query: '(max-width : 767px)',
  });
  const onlyIsMobile = useMediaQuery({
    query: '(max-width : 767px)',
  });

  return { onlyIsPc, onlyIsTablet, onlyIsMobile };
};
