import React from 'react'
import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

export default function Header() {
  return (
    <div className='flex justify-between py-2 px-4 bg-amber-50 text-red-950'>
      <div className='flex gap-3'>
        <MenuItem title='Menú de formas' address='/' Icon={AiFillHome}/>
        <MenuItem title='Créditos' address='/about' Icon={BsFillInfoCircleFill}/>
      </div>
      <div className='flex gap-4'>
        <DarkModeSwitch />
      <Link href={'/'} className='flex gap-1 items-center'>
        <span> 'logo' </span>
        <span className='text-xl hidden sm:inline'>ConjugacionShiken</span>
      </Link>
      </div>
    </div>
  )
}
