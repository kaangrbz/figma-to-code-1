import React from 'react';
import Image from 'next/image';
import { formImg, icon1, icon2, icon3, icon4, product1 } from '@/app/images';

const HelpSection = () => {
    return (
        <section className="my-10 flex flex-col gap-10 px-[10%] xl:flex-row">
            <div className="flex w-full flex-col items-center xl:items-start">
                <div className="text-[2.5rem] font-extrabold text-[#03014C]">
                    How We Can Help You
                </div>

                <p className="mb-10 mt-5 text-[20px] text-[#1B1D21]">
                    Follow our newsletter. We will regulary update <br /> our
                    latest project and availability.
                </p>

                <div>
                    <Image src={formImg} alt="form" />
                </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-[70px] items-center xl:items-start">
                <div className='flex gap-2 flex-col items-start'>
                    <div className="rounded-xl bg-[#eae9fb] p-3">
                        <Image src={icon1} style={{width: '24px', height: '24px'}} alt={'icon'} />
                    </div>
                    <div className='font-bold text-xl text-[#1E1F4B]'>UI/UX Design</div>
                    <p className='text-[#2E3E5C] text-[16px]'>Sometimes features require a short description</p>
                </div>
                <div className='flex gap-2 flex-col items-start'>
                    <div className="rounded-xl bg-[#eae9fb] p-3">
                        <Image src={icon2} style={{width: '24px', height: '24px'}} alt={'icon'} />
                    </div>
                    <div className='font-bold text-xl text-[#1E1F4B]'>Logo Branding</div>
                    <p className='text-[#2E3E5C] text-[16px]'>Sometimes features require a short description</p>
                </div>
                <div className='flex gap-2 flex-col items-start'>
                    <div className="rounded-xl bg-[#eae9fb] p-3">
                        <Image src={icon3} style={{width: '24px', height: '24px'}} alt={'icon'} />
                    </div>
                    <div className='font-bold text-xl text-[#1E1F4B]'>App Design</div>
                    <p className='text-[#2E3E5C] text-[16px]'>Sometimes features require a short description</p>
                </div>
                <div className='flex gap-2 flex-col items-start'>
                    <div className="rounded-xl bg-[#eae9fb] p-3">
                        <Image src={icon4} style={{width: '24px', height: '24px'}} alt={'icon'} />
                    </div>
                    <div className='font-bold text-xl text-[#1E1F4B]'>Web Design</div>
                    <p className='text-[#2E3E5C] text-[16px]'>Sometimes features require a short description</p>
                </div>
            </div>
        </section>
    );
};

export default HelpSection;
