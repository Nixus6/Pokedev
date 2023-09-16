import tw from 'twin.macro'
import styled from '@emotion/styled';
import { ReactNode } from 'react';

type FooProps = {
    className: String
    children: ReactNode
}
const LayoutStyled = styled.div(
    tw`w-full h-full inline-block z-0 bg-light p-0`,
    // props => `${props.className}`
)

const Layout = (props: FooProps) => {
    return (
        <LayoutStyled className={`${props.className}`}>
            {props.children}
        </LayoutStyled>
        // <div className={`w-full h-full inline-block z-0 bg-light p-32 ${props.className}`}>
        // </div>
    )
}

export default Layout