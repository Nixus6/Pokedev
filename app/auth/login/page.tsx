'use client'
import Card from '@/components/ui/organisms/Card/Card'
import Footer from '@/components/ui/molecules/Footer/Footer'
import Header from '@/components/ui/molecules/Header/Header'
import InputLogin from '@/components/ui/InputLogin'
import React from 'react'

const Login = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center items-center mt-28 mb-24">
                <Card>
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
                    <div className="mt-5">
                        <button type="submit" className="border-2 border-greenConsole bg-greenConsole text-white py-1 pr-1 rounded-md hover:bg-transparent hover:text-greenConsole font-semibold"><i className="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Ingresar</button>
                    </div>
                </Card>
            </div>
            <Footer />
        </>
    )
}

export default Login