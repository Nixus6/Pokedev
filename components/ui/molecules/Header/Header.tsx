import { SvgComponent } from '@/components/Icons/Icons';
import Logo from '@/public/Image/Header/logo.png'
import Image from 'next/image';
import tw from 'twin.macro'

const HeaderStyle = tw.div`w-full  px-32 py-8 flex items-center justify-between relative bg-primaryRed border-b-2  border-dark`

const Header = () => {
    return (
        <HeaderStyle>
            <Image src={Logo} alt='logo' className='w-48'></Image>
            {/* <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
                <img  className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt="Bordered avatar"></img>
            </button> */}
            <div className="">

                <div className="dropdown inline-block relative">
                    <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span className="mr-1">Dropdown</span>
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                        <li className=""><a className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                        <li className=""><a className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                        <li className=""><a className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                    </ul>
                </div>

            </div>
        </HeaderStyle>
    );
}
export default Header