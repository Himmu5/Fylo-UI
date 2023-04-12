import React, { FC } from 'react'
import { IconBaseProps, IconType } from 'react-icons'
type P = {
    Icon:IconType,
    para :string
}
const FooterSaction: FC<P> = ({ Icon  , para }) => {
    return <div className="flex gap-2 items-center mt-2 sm:w-1/3">
            <Icon size={45} className='sm:w-1/4 '/>
            <p className='w-full text-sm sm:text-base sm:w-1/2 flex'>{para}</p>
        </div>
}
export default FooterSaction;