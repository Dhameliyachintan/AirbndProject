import React from 'react'
import {BiSearch} from "react-icons/bi"

export default function Search() {
  return (
    <div className='border-[1px] w-full md:w-auto py-2  rounded-full hover:shadow-md transition cursor-pointer'>
       <div className='flex flex-row items-center justify-between'>
             <div className='text-sm font-semibold px-6'>
                Anywhere
             </div>
             <div className='hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center'>
                Any Week
             </div>
             <div className='hidden sm:block mr-2'>
                Any Guest
             </div>
             <div className='p-2 bg-rose-500 rounded-full text-white mr-2'>
                <BiSearch size={18}/>
             </div>
       </div>
    </div>
  )
}
