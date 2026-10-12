import React from 'react'
import Link from 'next/link'
export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className='hover:text-amber-800'>
        <Icon className="text-2xl"/>
        <p className='uppercase hidden'>{title}</p>
    </Link>
  )
}
