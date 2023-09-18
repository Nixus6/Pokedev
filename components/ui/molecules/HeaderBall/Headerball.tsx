import tw from 'twin.macro'
// import styled from 'styled-components';

const Header = tw.div`w-full h-48 px-32 py-8 flex items-center justify-between relative bg-primaryRed border-b-4  border-dark`
const Contentball = tw.span`flex w-full justify-center relative top-4`
const Ball = tw.span`block bg-light w-80 h-40 rounded-t-full border-x-4 border-t-4 border-dark`
const Headerball = () => {
    return (
        <Header>
            <Contentball>
                <Ball></Ball>
            </Contentball>
        </Header>
    )
}

export default Headerball