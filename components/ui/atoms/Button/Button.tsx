import Link from 'next/link';
import React, { FC } from 'react';
// import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
    text: string;
    link: string;
}

const StyledButton = styled.button(({  }) =>[
    tw`border-2 border-greenConsole bg-greenConsole text-white py-1 pr-1 rounded-md hover:bg-transparent hover:text-greenConsole font-semibold`
]);


const Button: FC<Props> = ({ text, link  }) => {
    return (
        <div className="flex flex-col  items-center mt-12">
            <Link href={link} className='border-2 border-greenConsole bg-greenConsole text-white py-1 pr-1 rounded-md hover:bg-transparent hover:text-greenConsole font-semibold '><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;{text}</Link>
        </div>
    );
};

export default Button;

