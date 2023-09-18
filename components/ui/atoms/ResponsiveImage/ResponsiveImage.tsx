import React, { FC } from 'react';
// import Image from 'next/image';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
    src: string;
    alt?: string;
}

const ImageWrapper = styled.div(
    tw`relative w-full rounded-2xl text-center`
);

const StyledImage = styled.img(
    tw`relative w-full rounded-2xl text-center h-60`
);


const ResponsiveImage: FC<Props> = ({ src, alt = '' }) => {
    return (
        <ImageWrapper>
        <StyledImage
          src={src}
          alt={alt}
          loading="lazy"

          sizes='400'     
        />
      </ImageWrapper>

    );
  };
  
  export default ResponsiveImage;
  
