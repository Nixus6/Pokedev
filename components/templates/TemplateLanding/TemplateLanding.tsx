'use client'
import Layout from '@/components/ui/Layout'
import React, { FC, useEffect } from 'react'
import Headerball from '@/components/ui/molecules/HeaderBall/Headerball'
import Footerball from '@/components/ui/molecules/FooterBall/Footerball'


interface Props {
    children?: React.ReactNode;
}

const TemplateLanding: FC<Props> = ({ children }): JSX.Element => {

    return (
        <>
            <Headerball />
            <main className='flex w-full flex-col items-center justify-center '>
                <Layout className={'pt-16'}>
                    {children}
                </Layout>
            </main>
            <Footerball />
        </>
    )
}

export default TemplateLanding