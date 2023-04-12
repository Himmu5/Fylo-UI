import { ComponentType, FC } from 'react'
import Button from '../Ui-Component/Button';
import Input from '../Ui-Component/Input';

type P = {
    name:string,
}

const SignUp: ComponentType<P> = ({ name }) => {
    return <div className='relative m-4 bg-blue-50 dark:bg-darkBlue max-w-5xl sm:mx-auto  p-4 sm:p-10  rounded-xl shadow-xl dark:text-white top-36' >
        <div className='relative flex flex-col text-center '>
            <h1 className=' text-xl sm:text-3xl font-bold '>Get early access today</h1>
            <p className=' text-lg p-8 '> It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <div className=' sm:flex-row flex flex-col gap-3 '>
                <Input inputClasses='px-4 py-4 w-full' />
                <Button mode='Primary' inputClasses=' p-4 w-full sm:w-1/3 '>Get Started For Free</Button>
            </div>
        </div>
    </div>
}
export default SignUp;