
import { chancenlogo } from '@/lib/web/images'
import { headerLinks } from '@/lib/web/navLinks'
import Image from 'next/image'
import React from 'react'
const Nav = () => {
  return (
    <section className='flex items-center justify-between'>
        <div>
            <Image alt='' src={chancenlogo} width={200} height={200}/>
        </div>
        <ul className="flex items-center gap-4">
            {
                headerLinks.map((linkObj) => {
                    return (
                        <li key={linkObj.name} className='hover:bg-primary hover:text-white'>
                            <a href={linkObj.route}>{linkObj.name}</a>
                        </li>
                    )
                })
            }
        </ul>
    </section>
  )
}

export default Nav