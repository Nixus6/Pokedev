import tw from 'twin.macro'
import styled from 'styled-components';
import React, { FC } from 'react';
import CardBody from '@/components/ui/molecules/CardBody/CardBody';
import ResponsiveImage from '../../atoms/ResponsiveImage/ResponsiveImage';
import { motion } from 'framer-motion'

interface Props {
  imgSrc: string;
  imgAlt: string;
  size: 'large';
  title: string;
  linkPath: string;
}

// const StyledCard = styled.div(
//   tw`w-full p-6 shadow-lg bg-greyConsole rounded-md border-2 border-dark `
// );

const Card: FC<Props> = ({
   imgSrc, imgAlt, title, linkPath 
  }): JSX.Element => {
  return (
    <motion.div className={`w-full p-6 shadow-lg bg-greyConsole rounded-md border-2 border-dark cursor-pointer`} whileHover={{ scale: 1.05 }}>
      <ResponsiveImage
        src={imgSrc}
        alt={imgAlt}
        // imageBpWidths={[theme.sizes.cardImgWidthBp2.value]}
      />
      <CardBody title={title} linkText="Details →" linkPath={linkPath} />
    </motion.div>
  );
};

export default Card;