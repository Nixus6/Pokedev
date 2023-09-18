import { SvgComponent } from '@/components/Icons/Icons';
import Logo from '@/public/Image/Header/logo.png'
import Image from 'next/image';
import tw from 'twin.macro'

const HeaderStyle = tw.div`w-full  px-32 py-8 flex items-center justify-between relative bg-primaryRed border-b-2  border-dark`

const Header = () => {
    return (
            <HeaderStyle>
                <Image src={Logo} alt='logo' className='w-48'></Image>
                <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"></img>
            </HeaderStyle>
    );
}
export default Header