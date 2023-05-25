import { watchIcon, figmaIcon, adobeXDIcon, personImg } from '@/app/images';
import Image from 'next/image';
import React from 'react';

const InfoBox = () => {
  return (
    <section className="flex w-full flex-col items-center justify-center px-0 py-5 lg:flex-row lg:px-[10%]">
      <div className="flex w-full flex-col items-start px-[50px] md:py-[80px] pt-[10px] pb-7 lg:w-1/2 lg:px-0">
        <h1 className="flex flex-col whitespace-normal md:whitespace-nowrap text-[3.5em] font-bold text-slate-800">
          <span className="flex flex-col md:flex-row">We Design Impactful</span>
          <span className="flex flex-col md:flex-row items-start gap-2">
            Digital
            <span className="inline-block rounded-lg border-[5px] border-dashed border-[#706fe5]  px-4 py-1 text-[#706fe5]">
              Products
            </span>
          </span>
        </h1>

        <p className="my-10 max-w-lg text-lg text-stone-600">
          Help find solutions with intitutive and in accordance with client
          business goals we provide a high-quality services
        </p>
        <div className="flex gap-5">
          <a
            href="#contact-us-in-info"
            className="rounded-lg bg-[#706fe5] px-8 py-3 text-white"
          >
            Contact Us
          </a>
          <a className="flex items-center gap-3" href="#watch-video">
            <Image src={watchIcon} width={47} height={47} alt="watch icon" />
            <p className="text-sm text-stone-700">
              Watch our <br />
              intoduction video
            </p>
          </a>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-center">
          {/* <span className='rotate-x-12 p-5'>
              <Image src={adobeXDIcon} className='rounded-full' width={60} height={60} alt='icon' />
            </span>
            <span className='absolute'>
              <Image src={figmaIcon} width={80} height={50} alt='icon' />
            </span> */}
          <span className="relative flex justify-center ">
            <Image
              className="z-10 -translate-x-[25px] mix-blend-normal"
              src={personImg}
              width={300}
              height={400}
              alt="person"
            />
            <div className="absolute bottom-[20px] left-1/2 min-h-[350px] min-w-[350px] -translate-x-1/2 rounded-full border-[10px] border-[#706fe5] bg-[#eaeafb]"></div>

            <div className="absolute bottom-[-10px] left-1/2 z-20 flex -translate-x-1/2 flex-col rounded-lg bg-white  px-11 py-5 shadow-lg">
              <span>Employees</span>
              <span className="whitespace-nowrap">5.4 (9.2k Reviews)</span>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
};

export default InfoBox;
