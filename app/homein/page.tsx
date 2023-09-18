'use client'
import HomePage from "@/components/pages/HomePage/HomePage"
import usePagination from "@/hook/usePagination";
import { useFetchPokemonWithInfinityScroll } from "@/hook/usePokemos";
// import { FeaturePokeDex } from "@/core/Features/FeaturesHomeIn/FeaturePokeDex"
import React, { useEffect, useState } from 'react'

const HomeIn = () => {
    const { data, isSuccess, hasNextPage, fetchNextPage, isInitialLoading } = useFetchPokemonWithInfinityScroll();
    const { handleNextPage, handlePreviousPage, currentPage} = usePagination ();
    
    if (isSuccess) {
        return (
            <HomePage pokemonList={data} hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} handleNextPage={handleNextPage} currentPage={currentPage} handlePreviousPage={handlePreviousPage}/>
        )
    }
    return <></>;
}

export default HomeIn