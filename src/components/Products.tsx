import React from 'react'
import Image from 'next/image';
import { product1 } from '@/app/images';

const Products = () => {
  return (
    <section className='px-[10%] py-5'>
      <div className='flex flex-col py-5'>
        <span className='text-[36px] font-bold'>We create world-class digital products</span>
        <span className='text-[18px] text-stone-600'>By information about design the world to the best instructors, heatc helping By information</span>
      </div>

      <div className='flex gap-7'>
        <span className='w-1/2 flex flex-col gap-3'>
          <Image src={product1} alt='ürün 1' />
          <span className='text-[16px] text-stone-600'>App Design - June 20, 2022</span>
          <span className='text-[30px] font-bold'>App Redesign</span>
          <span className='text-[18px] text-stone-600'>By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</span>
        </span>
        
        
        <span className='w-1/2 flex flex-wrap justify-between gap-2'>
          <div className='w-full w-max-1/2 flex flex-col gap-3'>
            <Image src={product1} alt='ürün 1' />
            <span className='text-[16px] text-stone-600'>App Design - June 20, 2022</span>
            <span className='text-[30px] font-bold'>App Redesign</span>
            <span className='text-[18px] text-stone-600'>By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</span>
          </div>
          <div className='w-full w-max-1/2 flex flex-col gap-3'>
            <Image src={product1} alt='ürün 1' />
            <span className='text-[16px] text-stone-600'>App Design - June 20, 2022</span>
            <span className='text-[30px] font-bold'>App Redesign</span>
            <span className='text-[18px] text-stone-600'>By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</span>
          </div>
          <div className='w-full w-max-1/2 flex flex-col gap-3'>
            <Image src={product1} alt='ürün 1' />   
            <span className='text-[16px] text-stone-600'>App Design - June 20, 2022</span>
            <span className='text-[30px] font-bold'>App Redesign</span>
            <span className='text-[18px] text-stone-600'>By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</span>
          </div>
          <div className='w-full w-max-1/2 flex flex-col gap-3'>
            <Image src={product1} alt='ürün 1' />
            <span className='text-[16px] text-stone-600'>App Design - June 20, 2022</span>
            <span className='text-[30px] font-bold'>App Redesign</span>
            <span className='text-[18px] text-stone-600'>By information about design the world to the best instructors, heatc helping By information about design the world to the best instructors, heatc helping</span>
          </div>
        </span>
      </div>
    </section>
  )
}

export default Products