import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className='bg-rose-950 font-nastaliq px-16 mt-8'>
        <ul className='flex justify-between items-center h-14'>
            <li className='flex justify-between items-center gap-24 text-xl text-orange-50'>
                <span> پښتونخوا</span>
                <span>بلوچستان</span>
            </li>
            <li>
                <span></span>
            </li>
            <li className='flex justify-between items-center gap-24 text-xl text-orange-50'>
                <span>پنجاب</span>
                <span>سنڌ</span>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
