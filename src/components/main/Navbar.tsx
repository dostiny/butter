import React from 'react';
import tw from 'tailwind-styled-components';
import { AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <Navdiv>
      <Login>RESERVTION</Login>
      <Logo>BUTTER</Logo>
      <Buger>
        <AiOutlineMenu size="50" color="FFFFFF" />
      </Buger>
    </Navdiv>
  );
};

export default Navbar;

const Navdiv = tw.div`h-auto w-auto mx-10 my-7 grid grid-cols-3 gap-3`;
const Login = tw.div`text-white underline underline-offset-8 text-2xl font-bold flex items-center`;
const Logo = tw.div`text-white text-9xl font-bold flex items-center justify-center`;
const Buger = tw.div`flex items-center justify-end`;
