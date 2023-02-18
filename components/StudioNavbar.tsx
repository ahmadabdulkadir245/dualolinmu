"use client"
import Link from 'next/link'
import {ArrowUturnLeftIcon} from '@heroicons/react/24/solid'
function StudioNavbar(props: any) {
  return (
    <div>
      <div className='flex items-center justify-between p-5'>
        <Link href={"/"} className="flex items-center text-[#f7ab0a] capitalize">
          <ArrowUturnLeftIcon className='text-[#f7ab0a] flex items-center '/>
          go to website
        </Link>
      </div>
    <>{props.renderDefault(props)}</>

    </div>

  )
}

export default StudioNavbar