import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { memberAPI } from '../../api/api';

const LoginModal = ({ onOpenModal, onSignModal }: any) => {
  // 로그인 폼
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // 오류메시지
  const [message, setMessage] = useState<string>('');

  // 유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);

  // 입력검사
  const onChangeId = (e: any) => {
    const currentID = e.target.value;
    setId(currentID);
    setIsId(true);
  };
  const onChangePassword = (e: any) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    setIsPassword(true);
  };

  const login = () => {
    if (isId && isPassword) {
      memberAPI
        .signin(id, password)
        .then((request) => {
          console.log(request.data);
          onOpenModal();
          window.alert('로그인이 되었습니다.');
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <OutDiv>
      <ModalDiv>
        <ModalHeader>
          <ModalTitle>Login</ModalTitle>
          <CancelDiv>
            <div className="cursor-pointer" onClick={() => onOpenModal()}>
              X
            </div>
          </CancelDiv>
        </ModalHeader>
        <ModalInput onChange={(e) => onChangeId(e)} />
        <ModalInput type="password" onChange={(e) => onChangePassword(e)} />
        <ModalBtnDIV>
          <ModalBtn onClick={() => login()}>Sign in</ModalBtn>
          <div className="mx-5 my-2 text-2xl text-gray-500">|</div>
          <ModalBtn
            onClick={() => {
              onSignModal();
              onOpenModal();
            }}
          >
            Sign up
          </ModalBtn>
        </ModalBtnDIV>
      </ModalDiv>
    </OutDiv>
  );
};

export default LoginModal;

const OutDiv = tw.div`top-0 left-0 fixed h-full w-full flex justify-center items-center bg-black bg-opacity-70 bg-cover text-center z-30`;
const ModalDiv = tw.div`bg-[#2D2D2D] rounded-sm w-[28rem] h-[20rem] flex flex-col items-center justify-center`;
const ModalHeader = tw.div`grid grid-cols-12 text-white`;
const ModalTitle = tw.div`col-start-5 col-span-4 text-5xl font-bold`;
const CancelDiv = tw.div`col-start-12 text-2xl select-none`;
const ModalInput = tw.input`w-80 h-10 m-1 p-2 rounded-md`;
const ModalBtnDIV = tw.div`flex select-none`;
const ModalBtn = tw.div`mx-5 my-2 text-2xl text-gray-500 hover:text-white font-bold cursor-pointer`;
