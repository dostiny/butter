import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { memberAPI } from '../../api/api';

import LoginModal from '../login/LoginModal';
import SignModal from '../login/SignModal';

const Navbar = () => {
  const [openModal, setOpenModal] = useState<Boolean>(false);
  const onModal = () => {
    setOpenModal(!openModal);
  };
  const [openSignModal, setOpenSignModal] = useState<Boolean>(false);
  const onSignModal = () => {
    setOpenSignModal(!openSignModal);
  };

  const logout = () => {
    memberAPI
      .signout()
      .then((request) => console.log(request.data))
      .catch((err) => console.log(err));
  };

  return (
    <Navdiv>
      {openModal && (
        <LoginModal onOpenModal={onModal} onSignModal={onSignModal} />
      )}
      {openSignModal && <SignModal onSignModal={onSignModal} />}
      <Login>
        <LoginText onClick={() => onModal()}>RESERVTION</LoginText>
      </Login>
      <Logo onClick={() => logout()}>BUTTER</Logo>
      <Buger>
        <AiOutlineMenu size="60" color="FFFFFF" />
      </Buger>
    </Navdiv>
  );
};

export default Navbar;

const Navdiv = tw.div`h-auto w-auto mx-10 my-7 grid grid-cols-9`;
const Login = tw.div`col-start-1 col-span-1 row-start-1 flex items-center`;
const LoginText = tw.div`text-white underline underline-offset-8 text-3xl font-bold cursor-pointer select-none`;
const Logo = tw.div`col-start-4 col-span-3 row-start-1 flex items-center justify-center text-white text-9xl font-bold`;
const Buger = tw.div`col-start-9 row-start-1 flex items-center justify-end`;
