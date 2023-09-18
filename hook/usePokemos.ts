// import ApiGetPokemonList from "@/core/Api/ApiHomeIn/ApiGetPokemonList";
import PokemonList, { Result } from "@/lib/types";
import mapListResults from "@/utils/mapPokemonForPage";
import api from "./pokemon";
import { useInfiniteQuery } from "@tanstack/react-query";

const FETCH_LIMIT = 9;
// export const FeaturePokeDex = () => {

    const fetchPokemon = async (offset: number) => {
        const { data } = await api.get<PokemonList>(
            `/pokemon?limit=${FETCH_LIMIT}&offset=${offset}`
        );
        data.results = mapListResults(data.results as Result[]);
        console.log("dataHook::::: ",data.results)
        return data;
    };
    
    export const useFetchPokemonWithInfinityScroll = () => {
        return useInfiniteQuery({
            queryKey: ["activity"],
            queryFn: ({ pageParam = 0 }) => fetchPokemon(pageParam),
            getNextPageParam: (lastPage) => {
                console.log("lastPageHooks::: ", lastPage);
                console.log("lastPage.Next::: ", lastPage.next);
                if (lastPage.next) {
                    const url = new URL(lastPage.next!);
                    console.log("url::: ", url);
                    console.log("urlSearch::: ", url.searchParams.get('offset'));
                    return url.searchParams.get('offset');
                }
                return undefined;
            }
            // {'prueba'},
            // queryFn:({ pageParam = 0 }) => fetchPokemon(pageParam),
            // initialPageParam: 1,
            // {
            //     getNextPageParam: (lastPage) => {
            //         if (lastPage.next) {
            //             const url = new URL(lastPage.next!);
            //             return url.searchParams.get('offset');
            //         }
            //         return undefined;
            //     },
            // }
        });
    };
    // export async function getPokemonList() {
    //     const response = await fetch(POKEMON_API + "pokemon?limit=151&offset=0");
    //     const data = await response.json();
    //     return data.results;
    // }
    // return { useFetchPokemonWithInfinityScroll }
// }