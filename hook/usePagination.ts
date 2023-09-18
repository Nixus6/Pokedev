import {  useState } from 'react';

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = (nextPage: number) => {
        setCurrentPage((nextPage) => nextPage + 1);
    }

    const previousPage = (prevPage: number) => {
        setCurrentPage((prevPage) => prevPage -1);
    }

    return {  currentPage, handleNextPage, previousPage };
};

export default usePagination;