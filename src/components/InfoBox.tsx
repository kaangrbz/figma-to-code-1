import { watchIcon, figmaIcon, adobeXDIcon, personImg } from '@/app/images'
import Image from 'next/image'
import React from 'react'

const InfoBox = () => {
  return (
    <section className='flex items-center justify-center w-full px-[10%] py-5'>
        <div className='w-1/2 py-[80px] flex flex-col'>
          <h1 className='text-[55px] text-slate-800 font-bold whitespace-nowrap'>We Design Impactful 
            <span className='flex flex-row items-center'>
              Digital <span className='text-[#706fe5] border-[5px] border-dashed  border-[#706fe5] rounded-lg  ml-3 py-1 px-4'>Products</span>
            </span>
          </h1>

          <p className='text-stone-600 text-lg max-w-lg my-10'>
            Help find solutions with intitutive and in accordance with client business goals we provide a high-quality services
          </p>
          <div className='flex gap-5'>
              <a href="#contact-us-in-info" className='px-8 py-3 bg-[#706fe5] rounded-lg text-white'>
                Contact Us
              </a>
              <a className='flex gap-3 items-center' href="#watch-video">
                <Image src={watchIcon} width={47} height={47} alt='watch icon' />
                <p className='text-stone-700 text-sm'>Watch our <br />intoduction video</p>
              </a>
          </div>
      </div>
      <div className='w-1/2'>
        <div className="flex justify-center">
            {/* <span className='rotate-x-12 p-5'>
              <Image src={adobeXDIcon} className='rounded-full' width={60} height={60} alt='icon' />
            </span>
            <span className='absolute'>
              <Image src={figmaIcon} width={80} height={50} alt='icon' />
            </span> */}
            <span className='flex justify-center relative '>
              <Image className='z-10 mix-blend-normal -translate-x-[25px]' src={personImg} width={300} height={400} alt='person' />
              <div className='absolute left-1/2 bottom-[20px] min-w-[350px] min-h-[350px] border-[10px] rounded-full bg-[#eaeafb] border-[#706fe5] -translate-x-1/2'></div>
              
              <div className='z-20 flex flex-col absolute left-1/2 bottom-[-10px] -translate-x-1/2 px-11 py-5  bg-white shadow-lg rounded-lg'>
                <span>Employees</span>
                <span className='whitespace-nowrap'>5.4 (9.2k Reviews)</span>
              </div>
            </span>

        </div>
      </div>
    </section>
  )
}

export default InfoBox