import { useState } from 'react';
import  { FC } from 'react'
import { InfiniteData } from '@tanstack/react-query';
import PokemonList from '@/lib/types';
// interface Props {
//     list: InfiniteData<PokemonList>;
// }
const usePagination=() => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = (nextPage: number) => {
        setTimeout(() => {
            setCurrentPage((nextPage) => nextPage + 1);
        }, 1000);
    }

    const handlePreviousPage = (prevPage: number) => {
            setCurrentPage((prevPage) => prevPage - 1);
    }

    return { currentPage, handleNextPage, handlePreviousPage };
};

export default usePagination;