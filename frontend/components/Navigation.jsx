import {RiUser3Line} from 'react-icons/ri'
import {BiSearchAlt} from 'react-icons/bi'
import {HiOutlineMenuAlt3} from 'react-icons/hi'
import { MdClear } from "react-icons/md";
import SideBar from "./SideBar"
import {  AiOutlineShoppingCart} from "react-icons/ai";
import Link from 'next/link';
import { useContext, useState } from 'react';
import router from 'next/router'
import { useRecoilState } from 'recoil';
import { navState } from '../atoms/navHandler';
import { useDispatch, useSelector } from "react-redux"
import { selectedcartItems } from '../slices/cartSlice';
import { addSearchedWord } from '../slices/searchSlice';
import MobileNav from './MobileNav';
import { AuthContext } from "../context/authContext";
import axios from 'axios';


const items = []
function Navigation() {
  const dispatch = useDispatch();
  const [openSideBar, setOpenSideBar] = useRecoilState(navState);
  const [searchWord, setSearchWord] = useState("");
  const sideBarHandler = () => {
      setOpenSideBar(true);
    };
    const closeNavHandler = () => {
      setOpenSideBar(false);
    };
  const [showSearch, setShowSearch] = useState(false);

  const showSearchHandler = () => {
      setShowSearch(!showSearch)
  }

  dispatch(addSearchedWord(searchWord));

  const searchHandler = (e) => {
    const word = e.target.value;
    setSearchWord(word);
  };

  const clearSearchHandler = (e) => {
    setSearchWord('');
  };


  const pressToSearchHandler = (suggesstion) => {
    if(suggesstion) {
      return router.push(`/search/${suggesstion}`)
    }
    router.push(`/search/${searchWord}`)
  }
  const productInCart = useSelector(selectedcartItems)

  // context
  const {currentUser, logout} = useContext(AuthContext)
  const logoutHandler = async () => {
      await logout()
  }

  return (
<div>
{/* sidebar menu */}
<SideBar openSideBar={openSideBar} showSearch={showSearch} />
    {/* navigation */}
  <nav className={`flex items-center justify-between flex-wrap bg-gray-50 py-4 ${showSearch ? '': 'shadow-sm'}  lg:shadow-md px-[10px] lg:px-[50px] `}>
  
    {/* Logo */}
    <div className="flex items-center space-x-2">
      <div className="">
      {openSideBar ? (
                  <MdClear
                    className='w-6 h-6 text-gray-700 lg:hidden transition-transform duration-500 ease-in-out'
                    onClick={closeNavHandler}
                  />
                ) : (
                  <HiOutlineMenuAlt3 className='w-6 h-6 text-gray-700 lg:hidden' onClick={sideBarHandler}/>
                )}
      
      </div>
      <div className="text-xl lg:text-2xl font-changa text-gray-800 uppercase cursor-pointer" onClick={() => router.push("/")}>
      Daulo<span className='hover:text-gray-400 transition-all duration-500 ease-in'>linmu</span>
      </div>
      
      </div>

     {/* category for Desktop */}
              <div className='hidden lg:flex items-center  capitalize space-x-20'>
                <Link href='/'>
              <p className='hover:text-gray-400 transition-all duration-500 linear'>food</p>
                </Link>
                <Link href='/'>
              <p className='hover:text-gray-400 transition-all duration-500 linear'>culture</p>
                </Link>
                <Link href='/'>
              <p className='hover:text-gray-400 transition-all duration-500 linear'>royalty</p>
                </Link>
                <Link href='/'>
              <p className='hover:text-gray-400 transition-all duration-500 linear'>relationships</p>
                </Link>
                <Link href='/'>
              <p className='hover:text-gray-400 transition-all duration-500 linear'>marriage</p>
                </Link>
              </div>

                 {/*  Right*/}
                 <div className='flex text-gray-500 text-xs  space-x-2 lg:space-x-6  whitespace-nowrap  lg:px-'>
                <div className='flex space-x space-x-4 items-center'>
                  <BiSearchAlt
                    className={`  lg:hidden w-6 h-6 lg:w-7 lg:h-7 ${showSearch ? 'hidden': ''}`}
                // onClick={showSearchHandler}
                  />
                  {currentUser ?  
                   <button className='hover:bg-gray-500  w-[80px] h-[36px] rounded-md text-white bg-gray-800  transition-all duration-500 linear text-sm' onClick={logoutHandler}>
                    logout
                  </button>
                   :
                   <Link href={'/login'}>
                     <button className='w-[80px] h-[36px] rounded-md text-white bg-gray-800 hover:bg-gray-600 transition-all duration-500 linear text-sm' >
                    Login
                  </button>
                  </Link>
                  }    
                </div>
                {currentUser ?
                 ""
                  : 
                <Link href={'/signup'}>
                     <button className='hidden md:inline-block  w-[80px] h-[36px] rounded-md text-white bg-gray-800  hover:bg-gray-600 transition-all duration-500 linear text-sm' >
                    Sign up
                  </button>
                  </Link>}
                
              </div>
              </nav>
                 {/* search for mobile */}
                  <MobileNav showSearch={showSearch} searchHandler={searchHandler} searchWord={searchWord} pressToSearchHandler={pressToSearchHandler}  />

                  {/* Suggesstions */}
                 {/* <SearchSuggesstions searchWord={searchWord} pressToSearchHandler={pressToSearchHandler} /> */}
</div>
  )
  };

export default Navigation;
