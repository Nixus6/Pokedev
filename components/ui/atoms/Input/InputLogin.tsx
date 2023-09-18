import styled from '@emotion/styled/macro'
import tw from 'twin.macro'

const InputLogin = styled.input(({ type, placeholder }) => [
    tw`bg-greyB text-light border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600`,
    { type: type },
]);

export default InputLogin