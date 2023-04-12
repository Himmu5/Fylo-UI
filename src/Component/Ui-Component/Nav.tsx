import React, { FC } from 'react'
import { NavOptions } from '../Ui-Data/Nav'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import withMode from '../Context/withMode'
import Button from './Button'
import { Link } from 'react-scroll'

type P = {
    setMode: (s: string) => void,
    mode: string
}

const Nav: FC<P> = ({ setMode, mode }) => {
console.log("🚀 ~ file: Nav.tsx:14 ~ mode:", mode)



    return <div className='flex flex-col sm:flex-row gap-8 sm:justify-between items-center sticky  p-6'>

        <div>
            <p className='text-4xl h-10 w-32 font-bold'>Faylo</p>
        </div>

        <div className='flex gap-6 items-center '>
            {
                NavOptions.map((option, index) => {
                    return <Link activeClass="active" to={option} smooth duration={500} key={index} className="hover:text-blue-400">{option}</Link>
                })
            }
            {
                mode === 'dark' ? <Button mode='Primary' inputClasses=' text-black bg-none hover:bg-white p-2 hover:text-black ' onClick={()=>setMode("light")}> <BsSunFill /> </Button> : <Button mode='Primary' inputClasses=' text-black bg-none hover:bg-white  p-2 hover:text-black 'onClick={()=>setMode("dark")}> <BsMoonFill /> </Button>
            }


        </div>


    </div>
}
export default withMode(Nav);