import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import { 
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon 

} from '@heroicons/react/outline'

function header() {
    return (
       <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
           <div className="flex flex-grow justify-evenly max-w-2xl sm:mb-2 ">
               <HeaderItem title='HOME' Icon={HomeIcon } />
               <HeaderItem title='TRENDING' Icon={LightningBoltIcon } />
               <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon } />
               <HeaderItem title='COLLECTIONS' Icon={CollectionIcon } />
               <HeaderItem title='SEARCH' Icon={SearchIcon } />
               <HeaderItem title='ACCOUNT' Icon={UserIcon } />
           
           </div>
           <Image src="/images/hulu-logo.png" width={100} height={40}/>
       </header>
    )
}

export default header
