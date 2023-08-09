import React from 'react';

export const GradleIcon =  ({
  className = '',
  title = 'Gradle',
  variant = 'dark',
  elephantColor = variant === 'dark' ? '#02303a' : '#fff',
  ...props
}) =>  (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox="0 0 90 66.06"
    {...props}
  >
    <title>{title}</title>
    <path
      d="M85.11 4.18a14.27 14.27 0 0 0-19.83-.34 1.38 1.38 0 0 0 0 2L67 7.6a1.36 1.36 0 0 0 1.78.12A8.18 8.18 0 0 1 79.5 20.06C68.17 31.38 53.05-.36 18.73 16a4.65 4.65 0 0 0-2 6.54l5.89 10.17a4.64 4.64 0 0 0 6.3 1.73l.14-.08-.11.08L31.53 33a60.29 60.29 0 0 0 8.22-6.13 1.44 1.44 0 0 1 1.87-.06 1.34 1.34 0 0 1 .06 2A61.61 61.61 0 0 1 33 35.34h-.09L30.3 36.8a7.34 7.34 0 0 1-3.61.94 7.45 7.45 0 0 1-6.47-3.71l-5.57-9.61C4 32-2.54 46.56 1 65a1.36 1.36 0 0 0 1.33 1.11h6.28A1.36 1.36 0 0 0 10 64.87a9.29 9.29 0 0 1 18.42 0 1.35 1.35 0 0 0 1.34 1.19h6.14a1.36 1.36 0 0 0 1.34-1.19 9.29 9.29 0 0 1 18.42 0A1.36 1.36 0 0 0 57 66.06h6.1a1.36 1.36 0 0 0 1.36-1.34c.14-8.6 2.46-18.48 9.07-23.43C96.43 24.16 90.41 9.48 85.11 4.18ZM61.76 30.05l-4.37-2.19a2.74 2.74 0 1 1 4.37 2.2Z"
      fill={elephantColor}
    />
  </svg>
);
