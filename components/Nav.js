import { useRouter } from 'next/router'
import React from 'react'
import request from '../utils/request'


function Nav() {
    const router = useRouter();
    return (
        <nav className="relative">
            <div className="flex scrollbar-hide px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll">{Object.entries(request).map(([key,{title,url}]) =>{
                return (
                    <h2 key={key} onClick={()=> router.push(`/?genre=${key}`)} className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 last:pr-12">{title}</h2>
                )
            } )}</div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] h-10 w-1/12"></div>
            
        </nav>
    )
}

export default Nav