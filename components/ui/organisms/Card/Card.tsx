import tw from 'twin.macro'
import styled from 'styled-components';
import React, { FC } from 'react';
// import CardBody from '../../molecules/CardBody';
// import ResponsiveImage from '../../atoms/ResponsiveImage';
// import { styled, theme } from '@/stitches.config';

interface Props {
  imgSrc: string;
  imgAlt: string;
  size: 'large';
  title: string;
  linkPath: string;
}

// const StyledCard = styled('div', {
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'flex-start',
//   padding: 0,
//   width: '$w100',
//   height: '$cardHeight',
//   '& div': {
//     height: '$cardImgHeight',
//   },
//   '& div img': {
//     padding: '$4',
//   },
// });
const StyledCard = styled.div(({ }) => [
  tw`w-96 p-6 shadow-lg bg-greyConsole rounded-md border-2 border-dark `
]);

const Card = ({
  //  imgSrc, imgAlt, title, linkPath 
  }): JSX.Element => {
  return (
    <StyledCard>
      {/* <ResponsiveImage
        src={imgSrc}
        alt={imgAlt}
        imageBpWidths={[theme.sizes.cardImgWidthBp2.value]}
      /> */}
      {/* <CardBody title={title} linkText="Details →" linkPath={linkPath} /> */}
    </StyledCard>
  );
};

export default Card;