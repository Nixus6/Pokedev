import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import PokemonList from '@/lib/types';
import { FC } from "react";
import AnimatedText from "@/components/ui/atoms/AnimatedText/AmitedText";
import TemplateLanding from "@/components/templates/TemplateLanding/TemplateLanding";
import Button from '@/components/ui/atoms/Button/Button';
interface Props {
    // pokemonList: InfiniteData<PokemonList>;
    // hasNextPage: boolean | undefined;
    // fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<PokemonList, unknown>>;
    // handleNextPage: (page: number) => void;
    // handlePreviousPage: (page: number) => void;
    // currentPage: number;
}

const HomeLanding: FC<Props> = (): JSX.Element => {
    return (
        <TemplateLanding>
            <AnimatedText text={'¡Bienvenido a Pokedev!'} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
            <p className='my-4 text-base font-medium text-center'>¡Ingresa y usa la búsqueda avanzado para encontrar Pokemón por su tipo, debilidad, habilidad y demas datos!.</p>
            <Button text='¡Sorprendeme!' link='auth/login' />
        </TemplateLanding>
    );
};

export default HomeLanding;