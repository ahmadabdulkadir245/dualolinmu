import { AiOutlineShop } from 'react-icons/ai'
import { RiUser3Line } from 'react-icons/ri'
import { CiShoppingCart } from 'react-icons/ci'
import { GiConcreteBag, GiOpeningShell, GiWoodBeam } from 'react-icons/gi'
import SideBarLink from './SideBarLink'
import { MdAdminPanelSettings, MdConstruction } from 'react-icons/md'
import {  AiOutlineShoppingCart} from "react-icons/ai";
import { BsBricks } from 'react-icons/bs'
import { useRecoilState } from 'recoil'
import { navState } from '../atoms/navHandler'
import { useRouter } from 'next/navigation'

function SideBarLinks() {
  const [openSideBar, setOpenSideBar] = useRecoilState(navState);
  const router = useRouter()
  const closeNav = (path) => {
    setOpenSideBar(false)
    router.push(`${path}`)
  }
  return (
    <div className='px-[10px] py-[6px] pb-8 text-gray-500 capitalize text-md h-full overflow-y-scroll'>

        <SideBarLink Icon={RiUser3Line} title={'my account'} path={'/'}/>
        <SideBarLink Icon={AiOutlineShop} title={'food'} path={'/checkout'}/>
        <SideBarLink Icon={AiOutlineShoppingCart} title={'culture'} path={'/cart'}/>
        <SideBarLink Icon={GiWoodBeam} title={'royalty'} path={'/'}/>
        <SideBarLink Icon={MdConstruction} title={'relationships'} path={'/'}/>
        <SideBarLink Icon={GiConcreteBag} title={'marriage'} path={'/'}/>
        <SideBarLink Icon={GiConcreteBag} title={'add posts'} path={'/admin/add-post'}/>
    </div>
  )
}

export default SideBarLinks