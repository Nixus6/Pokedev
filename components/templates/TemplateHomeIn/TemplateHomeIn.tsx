'use client'
import Card from '@/components/ui/organisms/Card/Card'
import Footer from '@/components/ui/molecules/Footer/Footer'
import Header from '@/components/ui/molecules/Header/Header'
import Layout from '@/components/ui/Layout'
// import { FeaturePokeDex } from '@/core/Features/FeaturesHomeIn/FeaturePokeDex'
import React, { FC, useEffect } from 'react'
import ItemList from '@/components/ui/organisms/ItemList/ItemList'

interface Props {
    children?: React.ReactNode;
}

const TemplateHomeIn: FC<Props> = ({ children }): JSX.Element => {
    // const { getPokemonList } = FeaturePokeDex();
    // useEffect(() => {
    //     getPokemonList();
    // }, [])
    return (
        <>
            <Header />
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className={'pt-16'}>
                    {children}
                </Layout>
            </main>
            <Footer />
        </>
    )
}

export default TemplateHomeIn