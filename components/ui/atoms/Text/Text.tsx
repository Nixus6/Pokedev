import React, { FC } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface Props {
    typeButton: string;
    text: string;

}

const TextSmall = styled.p(tw`text-gray-700 text-base`)
const Title = styled.div(tw`font-bold text-xl mb-2`)
const Text: FC<Props> = ({
    typeButton, text
}): JSX.Element => {
    if (typeButton === 'title') {
        return (
            <Title>
                {text}
            </Title>)
    }
    if (typeButton === 'textSmall') {
        return (
            <TextSmall>
                {text}
            </TextSmall>)
    }
    return <></>;
};
export default Text;
// const Text = styled('p', {
//   variants: {
//     textStyle: {
//       textLead: {
//         fontSize: '$4',
//         fontWeight: '$2',
//         letterSpacing: 0,
//         lineHeight: 0,
//       },
//       textParagraph: {
//         fontSize: '$3',
//         fontWeight: '$2',
//         letterSpacing: 0,
//         lineHeight: 0,
//       },
//       textParagraphSemibold: {
//         fontSize: '$3',
//         fontWeight: '$3',
//         letterSpacing: 0,
//         lineHeight: 0,
//       },
//       textSmall: {
//         fontSize: '$2',
//         fontWeight: '$2',
//         letterSpacing: 0,
//         lineHeight: '$6',
//       },
//       textSmallSemibold: {
//         fontSize: '$2',
//         fontWeight: '$3',
//         letterSpacing: 0,
//         lineHeight: 0,
//       },
//       textTiny: {
//         fontSize: '12px',
//         fontWeight: '$2',
//         letterSpacing: 0,
//         lineHeight: 0,
//       },
//       buttonLowercase: {
//         fontSize: '$3',
//         fontWeight: '$3',
//         letterSpacing: 0,
//         lineHeight: 0,
//       },
//     },
//   },
// });

// export default Text;
