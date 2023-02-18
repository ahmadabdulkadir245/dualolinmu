"use client"
import Link from "next/link"
function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold  py-3 lg:py-5 ">
        <div>
        <Link href={"/"}>
        <h2 className="text-2xl ;lg:text-4xl uppercase">daulolinmu</h2>
        </Link>
        </div>
        
        <div>
            <Link href="/" className="px-5 py-3 text-sm md:text-base bg-gray-900  text-[#f7ab0a] flex items-center rounded-full capitalize">
                sign up  <span className="hidden md:flex">to daulolinmu</span>
            </Link>
        </div>
    </header>
  )
}

export default Header