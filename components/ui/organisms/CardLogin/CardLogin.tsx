import tw from 'twin.macro'
import styled from 'styled-components';
import React, { Children, FC, useEffect } from 'react';
import InputLogin from '../../atoms/Input/InputLogin';
import ButtonLogin from '../../atoms/Button/ButtonLogin';
import { messageErrors } from '@/lib/types';

interface LoginType {
    email: string;
    password: string;
}

interface Props {
    LoginUser: (data: LoginType) => void;
    messageAmbos: String;
    messageEmail: String;
}
interface Props { }

const StyledCard = styled.div(
    tw`w-2/6 p-6 shadow-lg bg-greyConsole rounded-md border-2 border-dark `
);

const CardLogin: FC<Props> = ({ LoginUser, messageAmbos, messageEmail }): JSX.Element => {
    // useEffect(() => {+
    //     console.log("mesage::: ",message);
    // }, [])

    const [loginData, setLoginData] = React.useState<LoginType>({
        email: "",
        password: "",
    });

    const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        LoginUser(loginData);
        // console.log("loginData::: ", loginData);            
        // LoginValidate.validate(loginData)
        //   .then(() => {
        //     getSuccess(JSON.stringify(loginData));
        //   })
        //   .catch((error) => {
        //     getError(error.message);
        //   });
    };
    return (
        <div className="flex justify-center items-center ">
            <StyledCard>
                <form onSubmit={handleSubmit} autoComplete='off'>
                    <h1 className="text-3xl block text-center font-semibold"><i className="fa-solid fa-user"></i>Iniciar sesión </h1>
                    <div className="mt-3">
                        <label className="block text-base mb-2">Correo</label>
                        <InputLogin name="email" type="text" onChange={dataLogin} />
                        <div className='text-primaryRed'>
                            {messageEmail}
                        </div>
                    </div>
                    <div className="mt-3">
                        <label className="block text-base mb-2">Contraseña</label>
                        <InputLogin name="password" type="password" onChange={dataLogin} />
                    </div>
                    <div className='flex justify-center text-primaryRed'>
                        {messageAmbos}
                    </div>
                    <ButtonLogin text='Ingresar' />
                </form>
            </StyledCard>
        </div >
    );
};

export default CardLogin;