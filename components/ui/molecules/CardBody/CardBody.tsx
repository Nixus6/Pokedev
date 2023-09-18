import React, { FC } from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import Text from '../../atoms/Text/Text';
import Tags from '../../atoms/Tags/Tags';
// import { styled, theme, css } from '@/stitches.config';
// import Title from "../../atoms/Title/Title";

interface Props {
    title: string;
    linkText: string;
    linkPath: string;
    description?: string;
};
const StyledCardBody = styled.div(
    tw`w-full flex flex-col p-6 gap-5 space-x-4 `
);

const CardBody: FC<Props> = ({ title, description, linkText, linkPath }) => {
    return (
        <StyledCardBody>
            <div>
                <Text typeButton={'title'} text={title} />
            </div>
            <div className='px-6 pt-4 pb-2'>
                <Tags text=''/>
                <Tags text=''/>
                <Tags text=''/>
            </div>
        </StyledCardBody>
    );
};
export default CardBody;