import React, { FC } from 'react'
import { InfiniteData } from '@tanstack/react-query';
import PokemonList, { GenericItem } from '@/lib/types';
import styled from 'styled-components';
import Card from '../Card/Card';
import tw from 'twin.macro';

interface Props {
    list: InfiniteData<PokemonList>;
    titleKey: keyof GenericItem;
    imgSrcKey: keyof GenericItem;
    imgAltKey: keyof GenericItem;
    linkPathKey: keyof GenericItem;
    currentPage: number;
}

const GridContainer = styled.div(
    tw`w-full grid grid-cols-3 gap-8 justify-center px-4`
);

const ItemList: FC<Props> = ({
    list,
    imgSrcKey,
    titleKey,
    imgAltKey,
    linkPathKey,
    currentPage
}) => {
    // const { currentPage } = usePagination();
    console.log("list:::: ", list)
    console.log("currentPage:::: ", currentPage)
    return (
        <GridContainer>
            {
                // list.pages.map((page) =>
                (list.pages[currentPage].results as GenericItem[]).map((item) => (
                    <Card
                        key={item[titleKey]}
                        size={'large'}
                        imgSrc={item[imgSrcKey]}
                        imgAlt={item[imgAltKey]}
                        title={item[titleKey]}
                        linkPath={item[linkPathKey]}
                    />
                ))
                // )
            }

        </GridContainer>
    );
};

export default ItemList;