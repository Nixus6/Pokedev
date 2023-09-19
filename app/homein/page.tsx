'use client'
import HomePage from "@/components/pages/HomePage/HomePage"
import usePagination from "@/hook/usePagination";
import { useFetchPokemonWithInfinityScroll } from "@/hook/usePokemos";
import React from 'react'
import { useRouter } from 'next/navigation'

const HomeIn = () => {
    const { data, isSuccess, hasNextPage, fetchNextPage, isInitialLoading } = useFetchPokemonWithInfinityScroll();
    const { handleNextPage, handlePreviousPage, currentPage } = usePagination();
    const router = useRouter();
    if (localStorage.getItem('JWToken') === null) {
        router.push("/auth/login")
    }
    console.log("JWT:;;;: ", localStorage.getItem('JWToken'))
    if (isSuccess) {
        return (
            <HomePage pokemonList={data} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} handleNextPage={handleNextPage} currentPage={currentPage} handlePreviousPage={handlePreviousPage} />
        )
    }
    return <></>;
}

export default HomeIn