import moment from "moment"
import Image from "next/legacy/image"
import Link from "next/link"
import { useRouter } from "next/router"
import {  BiArrowFromLeft,BiDotsVertical } from "react-icons/bi"
import { MdKeyboardArrowLeft , MdKeyboardArrowRight, MdOutlineKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md"
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

function Home({posts}) {
    const router = useRouter()
    const reversedPost = posts.reverse().slice(0,10)
  return (
    <div className="px-[10px] md:px-[24px] lg:max-w-7xl m-auto">
        <div>
          <div className="hidden md:grid w-full h-[350px] mt-10 bg-gray-300 text-gray-800 capitalize font-bold text-center  place-content-center">
            Home page image
          </div>
            <h1 className="text-[#333] text-5xl xs:text-6xl font-bold py-5">Aliyu&apos;s Daily Blog</h1>
            <p className="font-semibold  font-poppins tracking-wide leading-6">Welcome To Daulolinmu Blog,the best blog to get the latest news and updates on Culture, Royalty, Language, Food, Marriage and Relationships.</p>
        </div>
        <div
    className='grid md:grid-cols-2 grid-flow-row-dense  lg:grid-cols-3 2xl:grid-cols-4 mx-auto  gap-8 '
  >
         {reversedPost.map(post => (
        <Link href={`/posts/${post.id}`} key={post.id}> 
        <div  className='pt-8' >
            {post.image ? <div className="relative w-full h-[220px]">
            <Image src={post.image} alt={post.title} layout="fill" className='' 
            />
            </div> : 
            <div className="w-full h-[220px] lg:h-[180px] bg-gray-300 text-gray-800 capitalize font-bold text-center grid place-content-center ">
                blog post image
            </div>
            }
            <div className="flex justify-between py-3">
            <div className="flex space-x-1 items-center text-xs">
             <p> {moment(post.date).format('dddd').slice(0,3)}</p>
             <p className="font-bold text-black">-</p>
            <p>{moment(post.date).fromNow()}</p>
            </div>
           <div className=""><BiDotsVertical className="w-5 h-5 text-gray-500" /></div>
            </div>
          <h3 className='text-3xl md:text-xl capitalize font-poppins'>{post.title}
          </h3>
        </div>
        </Link>
      ))}
      </div>

      <div className="flex justify-center items-center mt-14 space-x-6 xs:space-x-8 md:space-x-8 font-poppins ">
            <p><RxDoubleArrowLeft className="h-7 lg:h-7 w-5 text-gray-500 cursor-pointer hover:text-[#333] transition-all duration-400 ease-in"/></p>
            <p><SlArrowLeft className="h-7 lg:h-5 w-3 text-gray-500 cursor-pointer hover:text-[#333] transition-all duration-400 ease-in"/></p>
            <p className="cursor-pointer hover:text-gray-400 transition-all duration-400 ease-in">1</p>
            <p className="cursor-pointer hover:text-gray-400 transition-all duration-400 ease-in">2</p>
            <p className="cursor-pointer hover:text-gray-400 transition-all duration-400 ease-in">3</p>
            <p className="cursor-pointer hover:text-gray-400 transition-all duration-400 ease-in">4</p>
            <p className="cursor-pointer hover:text-gray-400 transition-all duration-400 ease-in">5</p>
            <p><SlArrowRight className="h-7 lg:h-5 w-3 text-gray-500 cursor-pointer hover:text-[#333] transition-all duration-400 ease-in"/></p>
            <p><RxDoubleArrowRight className="h-7 lg:h-7 w-5 text-gray-500 cursor-pointer hover:text-[#333] transition-all duration-400 ease-in"/></p>
      </div>
    </div>
  )
}

export default Home