import React, { FC } from 'react'
import Logo from '../../../public/logo.svg'
import { TiSocialTwitterCircular } from 'react-icons/ti'
import { IoMdCall, IoLogoInstagram } from 'react-icons/io'
import { CiFacebook } from 'react-icons/ci'
import { MdLocationOn } from 'react-icons/md'
import FooterSaction from '../Ui-Component/FooterSaction'
import { HiOutlineMail } from 'react-icons/hi'

type P = {}
const Footer: FC<P> = () => {
  return <div className='mt-10 bg-darkBlue text-white p-3 pt-40 pb-20  '>
    <img src={Logo} alt="" className='  sm:px-6' />

    <div className="sm:flex justify-between space-y-6 mt-3">
    
      <FooterSaction Icon={MdLocationOn} para='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
      <div className='flex flex-col '>
        <FooterSaction Icon={IoMdCall} para='+15455454989' />
        <FooterSaction Icon={HiOutlineMail} para='example@fylo.com' />
      </div>


      <div className="flex flex-col gap-2 mt-10 text-lg">
        <p >About Us</p>
        <p className=''>jobs</p>
        <p className=''>Press</p>
        <p className=''>Blog</p>
      </div>
      <div className="flex flex-col gap-2  mt-10 text-lg ">
        <p>Contact Us</p>
        <p className=''>Terms</p>
        <p className=''>Privacy</p>
      </div>
      <div className="flex flex-row text-5xl  gap-2  mt-10 ">
        <CiFacebook />
        <TiSocialTwitterCircular />
        <IoLogoInstagram />
      </div>

    </div>


  </div>
}
export default Footer;
