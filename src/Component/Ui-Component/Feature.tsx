import React, { FC } from 'react'
type P = {
    Feat :  {
        heading: string;
        para: string;
        imgUrl: string;
    }
}
const Feature: FC<P> = ({Feat}) => {
    return <div className='flex flex-col items-center gap-3 text-center '>
        <img src={Feat.imgUrl} className='h-20 w-20' alt="" />
        <h1 className='font-bold sm:text-xl'>{Feat.heading}</h1>
        <p className='text-sm '>{Feat.para}</p>
    </div>
}
export default Feature;