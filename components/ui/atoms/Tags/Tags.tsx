import React, { FC } from 'react';
import { styled } from 'styled-components';
import tw from 'twin.macro';

interface Props {
    text: string;
}

const Tag = styled.span(tw`inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2`)
const Tags: FC<Props> = ({
     text
}): JSX.Element => {
    return (
        <Tag>
            {text}
        </Tag>)
};
export default Tags;

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
