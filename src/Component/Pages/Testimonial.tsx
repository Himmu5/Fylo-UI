import React, { FC } from 'react'
import Message from '../Ui-Component/Message';
import { dummyTest } from '../Ui-Data/Testimonial';
import { BsQuote } from 'react-icons/bs'

type P = {}

const Testimonial: FC<P> = () => {
  return <div className=''>
    <div className=' absolute left-6  text-blue-500 -z-10 '>
      <BsQuote size={90} />
    </div>
    <div className=' top-16 pb-10 mx-5 sm:mx-16 space-y-4 sm:space-y-0 sm:flex gap-4'>
      {
        dummyTest.map((data) => <Message TestDetail={data} />)
      }

    </div>
  </div>
}
export default Testimonial;