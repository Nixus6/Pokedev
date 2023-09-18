import { FC } from "react";
import TemplateHomeIn from '@/components/templates/TemplateHomeIn/TemplateHomeIn';
import CardLogin from "@/components/ui/organisms/CardLogin/CardLogin";
interface Props {
    // pokemonList: InfiniteData<PokemonList>;
    // hasNextPage: boolean | undefined;
    // fetchNextPage: (options?: FetchNextPageOptions | undefined) => Promise<InfiniteQueryObserverResult<PokemonList, unknown>>;
    // handleNextPage: (page: number) => void;
    // handlePreviousPage: (page: number) => void;
    // currentPage: number;
}

const HomeLogin: FC<Props> = (): JSX.Element => {
    return (
        <TemplateHomeIn>
            <CardLogin/>
        </TemplateHomeIn>
    );
};

export default HomeLogin;