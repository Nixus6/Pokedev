'use client'
import HomePage from "@/components/pages/HomePage/HomePage"
import usePagination from "@/hook/usePagination";
import { useFetchPokemonWithInfinityScroll } from "@/hook/usePokemos";
// import { FeaturePokeDex } from "@/core/Features/FeaturesHomeIn/FeaturePokeDex"
import React, { useEffect, useState } from 'react'

const HomeIn = () => {
    const { data, isSuccess, hasNextPage, fetchNextPage, isInitialLoading } = useFetchPokemonWithInfinityScroll();
    const { handleNextPage, currentPage} = usePagination ();
    // const [currentPage, setCurrentPage] = useState(0);
    
    // const previousPage = (prevPage: number) => {
    //     setCurrentPage((prevPage) => prevPage -1);
    // }
    // const handleNextPage = (nextPage: number) => {
    //     console.log('CurrentPage2:::',nextPage)
    //     setCurrentPage((nextPage) => nextPage + 1);
    // }

    if (isSuccess) {
        return (
            <HomePage pokemonList={data} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} handleNextPage={handleNextPage} currentPage={currentPage}/>
        )
    }
    return <></>;
}

export default HomeIn