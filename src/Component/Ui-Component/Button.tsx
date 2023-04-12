import React,{ FC} from 'react'
type P ={
    children:string,
    mode:string,
    inputClasses:string
}

const Button:FC<P>=({children , mode , inputClasses})=>{
    let extraClasses ="";
    if(mode == 'Primary'){
        extraClasses = " bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full ";
    }

  return <button className={' font-bold text-white  hover:bg-cyan-600 '+inputClasses+extraClasses}>{children}</button>
}
export default Button;