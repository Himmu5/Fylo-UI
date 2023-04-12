import React, { FC } from 'react'
type P = {
  TestDetail: {
    message: string;
    pic: string;
    name: string;
    position: string;
  }
}

const Message: FC<P> = ({ TestDetail }) => {
  return <div className=' py-5 px-6 rounded-md shadow-md space-y-3 bg-blue-50 dark:bg-darkBluePlue'>
    <h1 className='text-lg '>{TestDetail.message}</h1>
    <div className='flex gap-1 text-sm'>
      <img className='h-10 w-10 rounded-full ' src={TestDetail.pic} alt="" />
      <div>
        <h1 className='font-bold '>{TestDetail.name}</h1>
        <p>{TestDetail.position}</p>
      </div>
    </div>
  </div>
}
export default Message;