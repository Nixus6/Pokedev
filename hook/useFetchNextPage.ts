import {
    FetchNextPageOptions,
    InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import PokemonList, { Result } from '../lib/types';
import mapListResults from '@/utils/mapPokemonForPage';
import usePagination from './usePagination';

const useFetchNextPage = async (
    event: React.MouseEvent<HTMLButtonElement>,
    hasNextPage: boolean | undefined,
    callBack: (
        options?: FetchNextPageOptions | undefined
    ) => Promise<InfiniteQueryObserverResult<PokemonList, unknown>>
) => {
    
    event.preventDefault();
    console.log('event::: ', event);
    console.log('callback::: ', callBack);
    console.log('hasNextPage::: ', hasNextPage);
    if (hasNextPage) {
        const data = await callBack();
        console.log("datainfinite::: ", data)
        return true;
        // data.results = mapListResults(data.results as Result[]);
    }
    return false;
    // useEffect(() => {
    //     const handleScroll = async (e: any) => {
    //     };
    //   let fetching = false;
    //   const handleScroll = async (e: any) => {
    //     const { scrollHeight, scrollTop, clientHeight } =
    //       e.target.scrollingElement;
    //     if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.2) {
    //       fetching = true;
    //       if (hasNextPage) await callBack();
    //       fetching = false;
    //     }
    //   };
    //   document.addEventListener('scroll', handleScroll);
    //   return () => {
    //     document.removeEventListener('scroll', handleScroll);
    //   };
    // }, [callBack, hasNextPage]);
};

export default useFetchNextPage;
