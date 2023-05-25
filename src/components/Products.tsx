import React from 'react';
import Image from 'next/image';
import { product1, product2, product3, product4, product5 } from '@/app/images';

const Products = () => {
    return (
        <section className="px-[10%] py-5">
            <div className="flex flex-col py-5">
                <h2 className="text-[36px] font-bold">
                    We create world-class digital products
                </h2>
                <h4 className="text-[18px] text-stone-600">
                    By information about design the world to the best
                    instructors, heatc helping By information
                </h4>
            </div>

            <div className="flex flex-col gap-7 2xl:flex-row">
                {/* //* left div  */}
                <div className="flex w-full flex-col gap-3">
                    <Image src={product1} alt="ürün 1" />
                    <span className="text-[16px] text-stone-600">
                        App Design - June 20, 2022
                    </span>
                    <span className="text-[30px] font-bold">App Redesign</span>
                    <span className="text-[18px] text-stone-600">
                        By information about design the world to the best
                        instructors, heatc helping By information about design
                        the world to the best instructors, heatc helping
                    </span>
                </div>

                {/* right divs */}
                <div className="grid w-full grid-cols-2 gap-4">
                    <div className="w-max-1/2 flex w-full flex-col gap-3">
                        <Image src={product2} alt="ürün 1" />
                        <span className="text-[16px] text-stone-600">
                            App Design - June 20, 2022
                        </span>
                        <span className="text-[25px] font-bold">
                            Redesign channel website landng page
                        </span>
                    </div>
                    <div className="w-max-1/2 flex w-full flex-col gap-3">
                        <Image src={product3} alt="ürün 1" />
                        <span className="text-[16px] text-stone-600">
                            App Design - June 20, 2022
                        </span>
                        <span className="text-[25px] font-bold">
                            New Locator App For a New Company
                        </span>
                    </div>
                    <div className="w-max-1/2 flex w-full flex-col gap-3">
                        <Image src={product4} alt="ürün 1" />
                        <span className="text-[16px] text-stone-600">
                            App Design - June 20, 2022
                        </span>
                        <span className="text-[25px] font-bold">
                            Rental Rooms Web App Platform
                        </span>
                    </div>
                    <div className="w-max-1/2 flex w-full flex-col gap-3">
                        <Image src={product5} alt="ürün 1" />
                        <span className="text-[16px] text-stone-600">
                            App Design - June 20, 2022
                        </span>
                        <span className="text-[25px] font-bold">
                            Calendar App for Big SASS Company
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;
