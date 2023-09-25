import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import image5 from '../../img/image5.png';

const Page2 = () => {
  const menuTitle = ['High-end Car', 'MAINENANCE', 'TUNNING CAR', 'BODY PAINT'];

  const [menuIndex, setMenuIndex] = useState(0);

  return (
    <Outdiv>
      <Indiv>
        <Navbar>
          {menuTitle.map((title, idx) => (
            <NavText
              key={idx}
              className={`${
                menuIndex === idx
                  ? 'underline underline-offset-8 text-white'
                  : null
              }`}
              onClick={() => setMenuIndex(idx)}
            >
              {title}
            </NavText>
          ))}
        </Navbar>
        <UnderDiv>
          <Info>
            <InfoTitle>
              HIGH-END CAR
              <br />
              STORE
            </InfoTitle>
            <InfoContent>
              하이엔드 직수입, 구매부터 튜닝까지
              <br />
              고객의 요구에 맞춘 최상의 서비스를 제공합니다.
            </InfoContent>
            <InfoLink
              onClick={() => {
                window.open('https://github.com/dostiny/butter');
              }}
            >
              VIEW MORE
            </InfoLink>
          </Info>
          <Blank />
          <Photo style={{ backgroundImage: `url(${image5})` }} />
        </UnderDiv>
      </Indiv>
    </Outdiv>
  );
};

export default Page2;

const Outdiv = tw.div`h-screen w-full relative group bg-gray-700 flex items-center justify-center`;
const Indiv = tw.div`w-5/6 h-5/6 flex flex-col items-center`;
const Navbar = tw.div`w-5/6 flex justify-around`;
const NavText = tw.div`text-4xl text-gray-400 mx-auto mt-10 mb-40 cursor-pointer`;
const UnderDiv = tw.div`relative h-full w-full flex`;
const Info = tw.div`absolute h-full z-10 text-white grid grid-rows-12 whitespace-pre-wrap`;
const InfoTitle = tw.div`row-start-1 row-span-6 text-9xl font-thin`;
const InfoContent = tw.div`row-start-7 row-span-2 text-3xl`;
const InfoLink = tw.div`row-start-12 underline underline-offset-4 text-2xl cursor-pointer`;
const Blank = tw.div`w-1/4`;
const Photo = tw.div`h-full w-3/4 bg-center bg-cover`;
// test
