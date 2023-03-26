import Link from "next/link"
import { BsWhatsapp } from "react-icons/bs"
import { ImTwitter } from "react-icons/im"
import { RiFacebookFill } from "react-icons/ri"
import {  TfiEmail } from "react-icons/tfi"
import { TiArrowRight } from "react-icons/ti"
import { RxInstagramLogo } from "react-icons/rx"

function Footer() {
  return (
    <div className="relative left-0 bottom-0 bg-white  py-5 px-5   mt-16 shadow-xl min-h-full font-poppins text-gray-700">
    <div
    className='grid md:grid-cols-2 grid-flow-row-dense lg:grid-cols-4
  mx-auto m-2 gap-10 px-2 md:px-4 mt-12'
  >
    <div >
            <h3 className="capitalize text-2xl mb-3 text-gray-800">dualolinmu</h3>
                <div className="block">
                    <p className="pr-[60px] leading-6">
                    Welcome To Daulolinmu Blog,the best blog to get the latest news and updates on Culture, Royalty, Language, Food, Marriage and Relationships.
                    </p>

            </div>
    </div>

    <div >
            <h3 className="capitalize text-2xl text-gray-800 ">opportunity</h3>
         
            <div className="block mt-3">
            <Link href={'/'}>
                <p className="my-2 hover:text-gray-500 transition-all duration-500 linear">
                Share a topic
                </p>
               </Link>
            <Link href={'/'}>
                <p className="my-2 hover:text-gray-500 transition-all duration-500 linear">
                Become a writer
                </p>
                </Link>
            <Link href={'/'}>
                <p className="my-2 hover:text-gray-500 transition-all duration-500 linear">
                Share a food recepie
                </p>
                </Link>
            <Link href={'/'}>
                <p className="my-2 hover:text-gray-500 transition-all duration-500 linear">
                Donate to daulolinmu
                </p>
                </Link>
            </div>

    </div>

    <div >
            <h3 className="capitalize text-2xl text-gray-800">cateogories</h3>

            <div className="block mt-3 capitalize">
            <Link href={'/'}>
                <p className="my-2 hover:text-gray-500 transition-all duration-500 linear">
                food
                </p>
               </Link>
            <Link href={'/'}>
                <p className="my-2 hover:text-gray-500 transition-all duration-500 linear">
                curlture
                </p>
                </Link>
            <Link href={'/'}>
                <p className="my-2 hover:text-gray-500 transition-all duration-500 linear">
                royalty
                </p>
                </Link>
            <Link href={'/'}>
                <p className="my-2 hover:text-gray-500 transition-all duration-500 linear">
                relationships
                </p>
                </Link>
            <Link href={'/'}>
                <p className="my-2 hover:text-gray-500 transition-all duration-500 linear">
                marriage
                </p>
                </Link>
            </div>
    </div>

    <div >
            <h3 className="capitalize text-xl  text-gray-800">News Letter</h3>


            <div className="block mt-4">
               <div className="flex items-center justify-between">
                <div className="flex items-center">
                <p><TfiEmail className="w-6 h-5" /></p>
                <input type="email" required placeholder="Enter your email address" className=" border-none  outline-none  p-1 text-gray-700 flex-1" />
               </div>

                <div><TiArrowRight className="w-12 h-7 " /></div>
                </div>
            </div>
                    <div className="border-b-[1px] border-gray-400 w-full"></div>

                    <div className="my-5 flex justify-between">
                        <p className="rounded-full p-3 bg-gray-500 text-white cursor-pointer"><RiFacebookFill className="w-5 h-5"/></p>
                        <p className="rounded-full p-3 bg-gray-500 text-white cursor-pointer"><BsWhatsapp className="w-5 h-5"/></p>
                        <p className="rounded-full p-3 bg-gray-500 text-white cursor-pointer"><RxInstagramLogo className="w-5 h-5"/></p>
                        <p className="rounded-full p-3 bg-gray-500 text-white cursor-pointer"><ImTwitter className="w-5 h-5"/></p>
                    </div>
    </div>
                        

    </div>
                    <div className="h-[1px] w-full my-4 bg-gray-400"></div>
                    <p className=" px-1 text-center">Dualolinmu &#169; 2023 - All Rights Reserved</p>
    </div>
  )
}

export default Footer