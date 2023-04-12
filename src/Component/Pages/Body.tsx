import React, { FC } from 'react'
import MainImage from '../../../public/illustration-intro.png'
import Button from '../Ui-Component/Button'
type P = {}
const Body: FC<P> = () => {
    return <div className='p-4 my-16 max-w-4xl mx-auto flex flex-col items-center'>
        <img src={MainImage} alt="" />
        <div className='flex flex-col gap-10 text-center'>
            <h1 className='text-3xl md:text-4xl  text-center font-bold'>
                All your files in one secure location, accessible anywhere.
            </h1>
            <p>Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>

            <Button mode='Primary' inputClasses='md:self-center px-24 hover:bg-cyan-500 py-4 '>Get Started</Button>

        </div>
    </div>
}
export default Body;