/** @jsxImportSource @emotion/react **/
import tw from 'twin.macro';

export const NavWrapper = tw.nav`
    shadow-md py-2 bg-white 
    relative flex 
    items-center w-full 
    justify-between
`;

export const NavMenuWrapper = tw.div`
    px-6 w-full flex flex-wrap 
    items-center justify-between
`;

export const NavbarCollapsible = tw.div`
    collapse grow items-center
`;

export const NavList = tw.ul`
    mr-auto lg:flex lg:flex-row
`;

export const NavItem = tw.li``;

export const NavLink = tw.a`
    block pr-2 lg:px-2 py-2 
    text-gray-600 hover:text-gray-700 
    focus:text-gray-700 transition 
    duration-150 ease-in-out
`;

export const HeroBtn = tw.button`
      border-0 py-3
      lg:hidden leading-none text-xl
      bg-transparent text-gray-600
      hover:text-gray-700 focus:text-gray-700
    transition-shadow duration-150
    ease-in-out mr-2
`;

export const ContainerCenter = tw.div`
    flex items-center lg:ml-auto
`;

export const LoginBtn = tw.button`
    inline-block px-6 py-2.5 mr-2 
    bg-transparent text-blue-600 
    font-medium text-xs leading-tight 
    uppercase rounded hover:text-blue-700 
    hover:bg-gray-100 focus:bg-gray-100 
    focus:outline-none focus:ring-0 
    active:bg-gray-200 transition 
    duration-150 ease-in-out
`;

export const SignUpBtn = tw.button`
    inline-block px-6 py-2.5 bg-blue-600 
    text-white font-medium text-xs 
    leading-tight uppercase rounded 
    shadow-md hover:bg-blue-700 
    hover:shadow-lg focus:bg-blue-700 
    focus:shadow-lg focus:outline-none 
    focus:ring-0 active:bg-blue-800 
    active:shadow-lg transition 
    duration-150 ease-in-out
`;

export const LogoLink = tw.a`
  text-blue-600
`;