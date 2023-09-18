import { useState } from 'react';

const usePagination = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = (nextPage: number) => {
        setTimeout(() => {
            setCurrentPage((nextPage) => nextPage + 1);
        }, 1000);
    }

    const previousPage = (prevPage: number) => {
        setTimeout(() => {
            setCurrentPage((prevPage) => prevPage - 1);
        }, 1000);
    }

    return { currentPage, handleNextPage, previousPage };
};

export default usePagination;