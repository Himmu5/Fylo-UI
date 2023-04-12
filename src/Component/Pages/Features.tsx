import React, { FC } from 'react'
import Feature from '../Ui-Component/Feature';
import { FeatuesDetail } from '../Ui-Data/Featues';

type P = {}
const Features: FC<P> = () => {
    return <div className='space-y-16 sm:space-y-0 p-8 sm:grid grid-cols-2 gap-20 max-w-6xl mx-auto sm:my-28'>
        { 
            FeatuesDetail.map((option)=><Feature Feat={option} />)
        }
    </div>
}
export default Features;