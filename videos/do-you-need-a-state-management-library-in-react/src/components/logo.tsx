import { ComponentPropsWithoutRef } from 'react';

import { tw } from '@/lib/utils';

/* -------------------------------------------------------------------------------------------------
 * Logo
 * -----------------------------------------------------------------------------------------------*/

interface LogoProps extends ComponentPropsWithoutRef<'svg'> {
  color?: string;
}

const Logo = ({ color = tw.theme.colors.foreground, ...rest }: LogoProps) => {
  return (
    <svg
      viewBox='0 0 513 185'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...rest}
    >
      <path
        fill={color}
        d='M85.7308 93C85.7308 131.427 66.5608 162.578 42.9135 162.578C19.2661 162.578 0.0961914 131.427 0.0961914 93C0.0961914 54.573 19.2661 23.4219 42.9135 23.4219C66.5608 23.4219 85.7308 54.573 85.7308 93Z'
      />
      <path
        fill={color}
        d='M190.098 93C190.098 118.125 169.73 138.493 144.605 138.493C119.479 138.493 99.1112 118.125 99.1112 93C99.1112 67.8747 119.479 47.5066 144.605 47.5066C169.73 47.5066 190.098 67.8747 190.098 93Z'
      />
      <path
        fill={color}
        d='M307.845 93C307.845 118.125 284.482 138.493 255.662 138.493C226.842 138.493 203.478 118.125 203.478 93C203.478 67.8747 226.842 47.5066 255.662 47.5066C284.482 47.5066 307.845 67.8747 307.845 93Z'
      />
      <path
        fill={color}
        d='M406.86 93C406.86 131.427 387.69 162.578 364.043 162.578C340.396 162.578 321.226 131.427 321.226 93C321.226 54.573 340.396 23.4219 364.043 23.4219C387.69 23.4219 406.86 54.573 406.86 93Z'
      />
      <path
        fill={color}
        d='M511.228 93C511.228 118.125 490.859 138.493 465.734 138.493C440.609 138.493 420.241 118.125 420.241 93C420.241 67.8747 440.609 47.5066 465.734 47.5066C490.859 47.5066 511.228 67.8747 511.228 93Z'
      />
    </svg>
  );
};

Logo.displayName = 'Logo';

/* -----------------------------------------------------------------------------------------------*/

export { Logo };
export type { LogoProps };
