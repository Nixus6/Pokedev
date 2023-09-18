import TemplateHomeIn from "@/components/templates/TemplateHomeIn/TemplateHomeIn";
import ItemList from "@/components/ui/organisms/ItemList/ItemList";
import { FetchNextPageOptions, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import PokemonList from '@/lib/types';
import { FC } from "react";
import {
  IMG_ALT_KEY,
  IMG_URL_KEY,
  LINK_PATH_KEY,
} from '@/utils/mapPokemonForPage';
import AnimatedText from "@/components/ui/atoms/AnimatedText/AmitedText";
import Pagination from "@/components/ui/molecules/Pagination/Pagination";
interface Props {
  pokemonList: InfiniteData<PokemonList>;
  hasNextPage: boolean | undefined;
  fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<PokemonList, unknown>>;
  handleNextPage: (page: number) => void;
  handlePreviousPage: (page: number) => void;
  currentPage: number;
}

const HomePage: FC<Props> = ({ pokemonList, hasNextPage, fetchNextPage, currentPage, handleNextPage, handlePreviousPage }): JSX.Element => {
  return (
    <TemplateHomeIn >
      <AnimatedText text={'¡Bienvenido a Pokedev!'} className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
      <p className='my-4 text-base font-medium text-center'>As a semi-senior full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my skills and experience using my front end and back end development skills.</p>
      <ItemList
        list={pokemonList}
        titleKey="name"
        imgSrcKey={IMG_URL_KEY}
        imgAltKey={IMG_ALT_KEY}
        linkPathKey={LINK_PATH_KEY}
        currentPage={currentPage}
      />
      <Pagination hasNextPage={hasNextPage} fetchNextPage={fetchNextPage} handleNextPage={handleNextPage} currentPage={currentPage} handlePreviousPage={handlePreviousPage}/>
    </TemplateHomeIn>
  );
};

export default HomePage;