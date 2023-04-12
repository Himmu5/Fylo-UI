import React, { FC, InputHTMLAttributes } from 'react'
type P = {
    inputClasses: string
} & InputHTMLAttributes<HTMLInputElement>
const Input: FC<P> = ({ inputClasses }) => {
    return <input className={' rounded-full border-2 focus:outline-none focus:border-blue-400 ' + inputClasses} placeholder='example@gmail.com' />
}
export default Input;