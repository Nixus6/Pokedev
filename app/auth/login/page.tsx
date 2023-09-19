'use client'
import Card from '@/components/ui/organisms/Card/Card'
import Footer from '@/components/ui/molecules/Footer/Footer'
import Header from '@/components/ui/molecules/Header/Header'
import InputLogin from '@/components/ui/atoms/Input/InputLogin'
import React, { useEffect } from 'react'
import HomeLogin from '@/components/pages/HomeLogin/HomeLogin'
import getDataUser from '@/hook/useLogin'
import { useRouter } from 'next/navigation'

const Login = () => {
    const { LoginUser, messageAmbos, messageEmail, enter } = getDataUser();
    const router = useRouter();
    useEffect(() => {
        console.log("enter::: ",enter)
        if (enter) {
            router.push("/homein")
        }
    }, [enter])

    return (
        <>
            <HomeLogin LoginUser={LoginUser} messageAmbos={messageAmbos} messageEmail={messageEmail} />
        </>
    )
}

export default Login