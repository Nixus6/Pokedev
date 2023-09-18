import tw from 'twin.macro'
import styled from 'styled-components';
import React, { FC } from 'react';
import CardBody from '@/components/ui/molecules/CardBody/CardBody';
import ResponsiveImage from '../../atoms/ResponsiveImage/ResponsiveImage';

interface Props {
  imgSrc: string;
  imgAlt: string;
  size: 'large';
  title: string;
  linkPath: string;
}

const StyledCard = styled.div(
  tw`w-full p-6 shadow-lg bg-greyConsole rounded-md border-2 border-dark `
);

const Card: FC<Props> = ({
   imgSrc, imgAlt, title, linkPath 
  }): JSX.Element => {
  return (
    <StyledCard>
      <ResponsiveImage
        src={imgSrc}
        alt={imgAlt}
        // imageBpWidths={[theme.sizes.cardImgWidthBp2.value]}
      />
      <CardBody title={title} linkText="Details →" linkPath={linkPath} />
    </StyledCard>
  );
};

export default Card;