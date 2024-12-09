import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Free from '../components/free'

const CartPage = () => {
    return (
        <>
                    {/* Header Section */}
      <header className="contact h-32 bg-slate-100 flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">Check Out</h1>
      </header>
            <div className="flex flex-col lg:flex-row lg:h-[525px] items-center lg:justify-around">
                <div className="flex flex-col w-full lg:w-auto">
                    <nav className="h-[55px] w-full lg:w-[817px] bg-[#FBEBB5] flex items-center justify-around list-none text-sm lg:text-base">
                        <li>Product</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Subtotal</li>
                    </nav>
                    <div className="mt-6 lg:mt-14 flex items-center justify-around flex-wrap gap-4">
                        <Image
                            src={require("../../../img/Asgaard sofa.png")}
                            alt="sofas"
                            width={108}
                            height={105}
                            className="w-[72px] lg:w-[108px] h-auto"
                        />
                        <span className="text-sm lg:text-base">Asgaard sofa</span>
                        <span className="text-sm lg:text-base">Rs. 250,000.00</span>
                        <div className="h-[32px] w-[32px] rounded-md border border-black flex items-center justify-center">
                            1
                        </div>
                        <span className="text-sm lg:text-base">Rs. 250,000.00</span>
                        <Image
                            src={require("../../../img/delete.png")}
                            alt="delete"
                            width={28}
                            height={28}
                            className="w-[20px] lg:w-[28px] h-auto"
                        />
                    </div>
                </div>
                <div className="bg-[#FBEBB5] w-full lg:w-[393px] h-auto lg:h-[390px] mt-8 lg:mt-0 p-6 rounded-lg flex flex-col items-center justify-center">
                    <h1 className="text-center text-[24px] lg:text-[32px] font-semibold mb-6">
                        Cart Totals
                    </h1>
                    <div className="flex items-center justify-between mb-4 w-full px-4 lg:px-0">
                        <h3 className="text-sm lg:text-base">Subtotal</h3>
                        <span className="text-sm lg:text-base">Rs. 250,000.00</span>
                    </div>
                    <div className="flex items-center justify-between mb-6 w-full px-4 lg:px-0">
                        <h3 className="text-sm lg:text-base">Total</h3>
                        <span className="text-sm lg:text-base text-black">Rs. 250,000.00</span>
                    </div>
                    <Link href={"/check"}>
                        <button className="border border-black w-full lg:w-[222px] h-[48px] lg:h-[58.95px] rounded-2xl text-[18px] lg:text-[20px]">
                            Check Out
                        </button>
                    </Link>
                </div>

            </div>
<Free/>
        </>

    )
}

export default CartPage