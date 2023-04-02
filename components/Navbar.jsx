import React from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <p className='logo'>
        <Link href='/'>Macha Collection</Link>
      </p>

      <buttton type='button' className='cart-icon' onClick="">
        <AiOutlineShopping />
        <span className='cart-item-qty'>1</span>
      </buttton>
    </div>
  )
}

export default Navbar