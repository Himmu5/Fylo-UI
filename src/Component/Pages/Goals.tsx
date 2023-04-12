import React, { FC } from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'

type P = {}
const Goals: FC<P> = () => {
    return <div className='sm:flex items-center  gap-10 p-3 sm:px-10 pb-28 '>
        <div className='w-3/4'>
            <img src="https://fylo-kv.netlify.app/illustration-stay-productive.5e8cc0f8.png" alt="" />
        </div>
        <div className=' space-y-8 my-10 sm:my-0'>
            <h1 className='text-3xl font-bold '>Stay productive, wherever you are</h1>
            <p>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
            <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            <div className='group'>
                <div className='mb-2 flex gap-2 text-blue-400 items-center '>
                    <p className=''>See how Fylo works</p>
                    <BsFillArrowRightCircleFill />
                </div>
                <div className='group-hover:border w-44 transition delay-300 duration-300 '></div>
            </div>
        </div>
    </div>
}
export default Goals;