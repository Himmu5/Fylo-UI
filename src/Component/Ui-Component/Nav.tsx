import React, { FC } from 'react'
import Logo from '../../../public/logo.svg'
import { NavOptions } from '../Ui-Data/Nav'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

type P = {}
const Nav: FC<P> = () => {
    return <div className='flex flex-col sm:flex-row gap-8 sm:justify-between items-center sticky  p-6'>

            <div>
                <img src={Logo} className="text-black h-10 w-32 " alt="" />
            </div>

            <div className='flex gap-6 items-center'>
                {
                    NavOptions.map((option, index) => {
                        return <div key={index} className="hover:text-blue-400">{option}</div>
                    })
                }
                <BsSunFill />
                <BsMoonFill />
            </div>


    </div>
}
export default Nav;