import React from 'react';
import tw from 'tailwind-styled-components';

const CenterText = () => {
  return (
    <Outdiv>
      <Textdiv>For the high-end</Textdiv>
    </Outdiv>
  );
};

export default CenterText;

const Outdiv = tw.div`h-5/6 w-auto flex items-center justify-center`;
const Textdiv = tw.div`mt-96 text-10xl text-white -rotate-6 font-[signature]`;
