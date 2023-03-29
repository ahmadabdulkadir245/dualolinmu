import axios from "axios"
import moment from "moment"
import Link from "next/link"
import { BiDotsVertical } from "react-icons/bi"
import { BsWhatsapp } from "react-icons/bs"
import { ImTwitter } from "react-icons/im"
import { RiFacebookFill } from "react-icons/ri"
import { RxInstagramLogo } from "react-icons/rx"
import { SlSocialInstagram } from "react-icons/sl"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Image from 'next/legacy/image'



function Post({post, posts}) {
  return (
    <>
  <Header/>
  <div className="px-[10px] md:px-[24px] lg:px-[50px] m-auto ">
  <div className="flex justify-between items-center py-4">
  <div className="flex space-x-1 items-center text-xs font-semibold">
         <p> {moment(post.date).format('dddd').slice(0,3)}</p>
         <p className="font-bold text-black">-</p>
        <p> {moment(post.date).fromNow()}</p>
  </div>
  <div>
      <BiDotsVertical className="w-5 h-5 text-gray-500 cursor-pointer hover:text-[#333] transition-all duration-400 ease-in" />
    </div>
  </div>

  <div>
  <h3 className='text-3xl lg:text-4xl capitalize font-poppins'>{post.title}</h3>
  <div  className='pt-8' >
        {post.image ?
         <div className="relative w-full h-[400px] shadow-md">
        <Image src={post.image} alt={post.title} layout="fill" objectFit="cover"
        />
        </div> 
        : 
        <div className="w-full h-[250px] md:h-[350px] bg-gray-300 text-gray-800 capitalize font-bold text-center grid place-content-center">
            blog post main image
        </div>
        }
        </div>
  </div>

  <div className="flex justify-between mt-10">
    <div className="hidden lg:block">
      <Link href="/">
    <p className="rounded-full p-3 bg-white text-gray-600 shadow-md mb-4 hover:bg-gray-100 transition-all duration-500 ease-in">
      <RiFacebookFill className="w-5 h-5"/></p>
      </Link>
      <Link href="/">
      <p className="rounded-full p-3 bg-white text-gray-600 shadow-md mb-4 hover:bg-gray-100 transition-all duration-500 ease-in"><BsWhatsapp className="w-5 h-5"/></p>
      </Link>
      <Link href="/">
      <p className="rounded-full p-3 bg-white text-gray-600 shadow-md mb-4 hover:bg-gray-100 transition-all duration-500 ease-in"><SlSocialInstagram className="w-5 h-5"/></p>
      </Link>
      <Link href="/">
      <p className="rounded-full p-3 bg-white text-gray-600 shadow-md mb-4 hover:bg-gray-100 transition-all duration-500 ease-in"><ImTwitter className="w-5 h-5"/></p>
      </Link>
    </div>
    <div className="lg:px-[50px] font-poppins text-gray-700 tracking-wide leading-7 w-full">
      <article className="prose prose-h1:text-3xl   prose-h1:font-semibold prose-h2:text-2xl  prose-h2:font-semibold prose-h2:mt-[0px] 
      prose-h2:mb-[24px] prose-headings:capitalize prose-a:text-blue-500 hover:prose-a:text-blue-800 font-poppins" dangerouslySetInnerHTML={{ __html: post.desc }} />
     <br />
            </div>
      <div className="hidden lg:block w-[500px] mx-auto">
      {posts.slice(0,3).map(post => (
      <Link href={`/posts/${post.id}`} key={post.id}>
        <div className="hover-group">
        <h3 className="text-xl text-center font-poppins capitalize ">similar interesting posts</h3>
        <div className="my-6">
          <div className="">
          <div className="w-full h-[150px] bg-gray-300 rounded-md font-semibold text-center grid place-content-center capitalize hover:shadow-md hover:bg-gray-200 transition-all duration-500 ease-in">blog post image</div>
          <p className="font-poppins capitalize mt-3">{post.title}</p>
          </div>
        </div>
        </div>
      </Link>
      ))}
    </div>
  </div>
</div>  
    <Footer/>
</>
  )
}

export default Post

export const getServerSideProps = async (context) => {
    const {postId} = context.query
    const res = await axios.get(process.env.NEXT_PUBLIC_POST_URL + `/${postId}`)
    const post =  await res.data

    const resPosts = await axios.get(process.env.NEXT_PUBLIC_POST_URL)
  const posts = await resPosts.data
    return {
        props: {
            post: post,
            posts: posts
        }
    }
}