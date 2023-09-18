import tw from 'twin.macro'
import styled from 'styled-components';
import React, { Children, FC } from 'react';
import CardBody from '@/components/ui/molecules/CardBody/CardBody';
import ResponsiveImage from '../../atoms/ResponsiveImage/ResponsiveImage';
import InputLogin from '../../atoms/Input/InputLogin';

interface Props {
    // imgSrc: string;
    // imgAlt: string;
    // size: 'large';
    // title: string;
    // linkPath: string;
}

const StyledCard = styled.div(
    tw`w-2/6 p-6 shadow-lg bg-greyConsole rounded-md border-2 border-dark `
);

const CardLogin: FC<Props> = ({}): JSX.Element => {
    return (
        <div className="flex justify-center items-center ">
            <StyledCard>
                <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i>Iniciar sesión </h1>
                <div className="mt-3">
                    <label className="block text-base mb-2">Correo</label>
                    {/* <input type="text" id="username" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username..." /> */}
                    <InputLogin type="text" />
                </div>
                <div className="mt-3">
                    <label className="block text-base mb-2">Contraseña</label>
                    {/* <input type="password" id="password" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." /> */}
                    <InputLogin type="password" />
                </div>

            </StyledCard>
        </div >
    );
};

export default CardLogin;