import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import { memberAPI } from '../../api/api';

const SignModal = ({ onSignModal }: any) => {
  // 회원가입 폼
  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [reEnter, setReEnter] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');

  // 오류메시지
  const [message, setMessage] = useState<string>('');

  // 유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isReName, setIsReName] = useState<boolean>(false);
  const [isname, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // 입력검사
  const onChangeId = (e: any) => {
    const currentID = e.target.value;
    setId(currentID);
    const isRegExp = /^[a-zA-z0-9]{6,15}$/;
    if (!isRegExp.test(currentID)) {
      setMessage('4-12사이 대소문자 또는 숫자만 입력해 주세요!');
      setIsId(false);
    } else {
      setMessage('사용가능한 아이디 입니다');
      setIsId(true);
    }
  };
  const onChangePassword = (e: any) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setMessage('영문자+숫자 조합으로 8자리 이상 입력해주세요!');
      setIsPassword(false);
    } else {
      setMessage('안전한 비밀번호 입니다.');
      setIsPassword(true);
    }
  };
  const onChangePasswordConfirm = (e: any) => {
    const currentPasswordConfirm = e.target.value;
    setReEnter(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setMessage('비밀번호가 일치하지 않습니다');
      setIsReName(false);
    } else {
      setMessage('비밀번호가 일치합니다.');
      setIsReName(true);
    }
  };
  const onChangeName = (e: any) => {
    const currentName = e.target.value;
    setName(currentName);
    setIsName(true);
    setMessage('');
  };
  const onChangeEmail = (e: any) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z.]{1,5}$/;

    if (!emailRegExp.test(currentEmail)) {
      setMessage('이메일의 형식이 올바르지 않습니다!');
      setIsEmail(false);
    } else {
      setMessage('사용 가능한 이메일 입니다.');
      setIsEmail(true);
    }
  };
  const onChangeMobile = (e: any) => {
    const currentPhone = e;
    setMobile(currentPhone);
    // const phoneRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    setIsMobile(true);
    setMessage('');
  };
  const onSignup = () => {
    if (isId && isPassword && isReName && isname && isEmail && isMobile) {
      memberAPI
        .signup(id, password, name, email, mobile)
        .then((request) => {
          console.log(request.data);
          onSignModal();
          window.alert('회원가입이 되었습니다.');
        })
        .catch((err) => console.log(err));
    } else {
      setMessage('입력을 확인해 주세요');
    }
  };

  return (
    <OutDiv>
      <ModalDiv>
        <ModalHeader>
          <ModalTitle>Sign up</ModalTitle>
          <CancelDiv>
            <div className="cursor-pointer" onClick={() => onSignModal()}>
              X
            </div>
          </CancelDiv>
        </ModalHeader>
        <InputDiv>
          <InputText>ID</InputText>
          <ModalInput type="text" onChange={(e) => onChangeId(e)} />
        </InputDiv>
        <InputDiv>
          <InputText>Password</InputText>
          <ModalInput type="password" onChange={(e) => onChangePassword(e)} />
        </InputDiv>
        <InputDiv>
          <InputText>Re-Enter</InputText>
          <ModalInput
            type="password"
            onChange={(e) => onChangePasswordConfirm(e)}
          />
        </InputDiv>
        <InputDiv>
          <InputText>Name</InputText>
          <ModalInput type="text" onChange={(e) => onChangeName(e)} />
        </InputDiv>
        <InputDiv>
          <InputText>E-mail</InputText>
          <ModalInput type="text" onChange={(e) => onChangeEmail(e)} />
        </InputDiv>
        <InputDiv>
          <InputText>Mobile</InputText>
          <ModalInput type="text" onChange={(e) => onChangeMobile(e)} />
        </InputDiv>
        <MessageDiv>{message}</MessageDiv>
        <ModalBtn onClick={() => onSignup()}>Join Us</ModalBtn>
      </ModalDiv>
    </OutDiv>
  );
};

export default SignModal;

const OutDiv = tw.div`top-0 left-0 fixed h-full w-full flex justify-center items-center bg-black bg-opacity-70 bg-cover text-center z-30`;
const ModalDiv = tw.div`bg-[#2D2D2D] rounded-sm w-[28rem] h-[32rem] flex flex-col items-center justify-center`;
const ModalHeader = tw.div`grid grid-cols-12 text-white`;
const ModalTitle = tw.div`col-start-4 col-span-6 text-5xl font-bold`;
const CancelDiv = tw.div`col-start-12 text-2xl select-none`;
const InputDiv = tw.div`flex flex-row justify-between w-96`;
const InputText = tw.div`text-2xl text-white font-bold`;
const ModalInput = tw.input`w-52 h-10 m-1 p-2 rounded-md`;
const MessageDiv = tw.div`my-3 h-8 text-xl text-red-600`;
const ModalBtn = tw.div`mx-5 px-4 py-2 rounded-xl text-2xl text-white bg-[#74778C] hover:bg-gray-700 font-bold cursor-pointer`;
