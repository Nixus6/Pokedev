import Link from 'next/link';
import React, { FC } from 'react';
// import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
    text: String;
}


const ButtonLogin: FC<Props> = ({  text }) => {
    return (
        <div className="flex flex-col items-center mt-4">
            <button type='submit' className='border-2 border-greenConsole bg-greenConsole text-white py-1 pr-1 rounded-md hover:bg-transparent hover:text-greenConsole font-semibold '><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;{text}</button>
        </div>
    );
};

export default ButtonLogin;

