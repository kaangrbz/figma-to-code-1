import { dotsIcon, quoteIcon, user1, user2, user3, user4, user5 } from '@/app/images';
import React from 'react';
import Image from 'next/image';

const TextSection = () => {
    return (
        <div className='mt-5 mb-[100px]'>
            <section className="relative my-10 flex flex-col items-center px-[10%]">
                {/* dots */}
                <span>
                    <span className="absolute left-[20%] top-10">
                        <Image src={dotsIcon} width={75} alt="icon" />
                    </span>
                </span>

                {/* dots */}
                <span>
                    <span className="absolute -bottom-[80px] right-[20%] rotate-180">
                        <Image src={dotsIcon} width={75} alt="icon" />
                    </span>
                </span>

                {/* title */}
                <div className="my-[80px] flex flex-col text-[2.2rem] font-extrabold text-[#03014C]">
                    <span>Let&apos;s Hear</span>
                    <span>What They Says</span>
                </div>

                {/* text */}
                <div className="relative">
                    <span className="absolute -top-10 left-0">
                        <Image src={quoteIcon} width={55} alt="icon" />
                    </span>
                    <span className="block max-w-[900px] px-[100px] leading-[50px] text-[#03014C] text-opacity-75">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Risus vel lobortis tincidunt fames quisque mauris at diam.
                        Nullam morbi ipsum turpis amet id posuere torto quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore.
                    </span>
                    <span className="absolute -top-5 right-0 rotate-180">
                        <Image src={quoteIcon} width={55} alt="icon" />
                    </span>
                </div>

                {/* users */}
                <div className="flex flex-row gap-[5%] w-full justify-center mt-10 items-center">
                    <span>
                        <Image src={user1} alt="user" />
                    </span>
                    <span>
                        <Image src={user2} alt="user" />
                    </span>
                    <span className='border-[7px] p-1 border-[#706FE5] rounded-full'>
                        <Image src={user5} alt="user" />
                    </span>
                    <span>
                        <Image src={user3} alt="user" />
                    </span>
                    <span>
                        <Image src={user4} alt="user" />
                    </span>
                </div>

                {/* founder title */}
                <div className='flex flex-col items-center mt-5'>
                    <span className='text-[2rem] font-extrabold text-[#1E1F4B]'>Ricky Aprilia</span>
                    <span className='text-[1.8rem] font-normal text-[#2E3E5C]'>Founder of Varibo</span>
                </div>
            </section>
        </div>
    );
};

export default TextSection;
