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
}

const GridContainer = styled.div(tw`flex w-full grid-cols-3 gap-6 justify-center p-0.5`);
// ('div', {
//     width: '$w100',
//     display: 'grid',
//     gridTemplateColumns: `repeat(auto-fit, minmax($cardWidthBp1, $cardWidthBp3))`,
//     gap: '$6',
//     justifyItems: 'center',
//     justifyContent: 'center',
//     padding: '0 $4',
//   })
  ;

const ItemList = ({
    // list,
    // imgSrcKey,
    // titleKey,
    // imgAltKey,
    // linkPathKey,
}) => {
    return (
        <GridContainer>
            {/* {list.pages.map((page) =>
                (page.results as GenericItem[]).map((item) => ( */}
                    <Card
                        // key={item[titleKey]}
                        // size={'large'}
                        // imgSrc={item[imgSrcKey]}
                        // imgAlt={item[imgAltKey]}
                        // title={item[titleKey]}
                        // linkPath={item[linkPathKey]}
                    />
                {/* )) */}
            {/* )} */}
        </GridContainer>
    );
};

export default ItemList;