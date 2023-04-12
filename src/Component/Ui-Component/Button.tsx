import React,{ ButtonHTMLAttributes, FC, ReactNode} from 'react'
type P ={
    children:ReactNode,
    mode:string,
    inputClasses?:string
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button:FC<P>=({children , mode , inputClasses , ...rest})=>{
    let extraClasses ="";
    if(mode == 'Primary'){
        extraClasses = " bg-gradient-to-r from-cyan-500 hover:bg-cyan-600 to-blue-500 dark:text-white dark:hover:text-black rounded-full ";
    }

  return <button className={' font-bold  '+inputClasses+extraClasses} {...rest}  >{children}</button>
}
export default Button;