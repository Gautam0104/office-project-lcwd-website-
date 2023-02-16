import React from 'react'
import { useState } from 'react';

import NavLink from 'next/link';

const Navbar = () => {
  const [Show, setShow] = useState(false);

  const showMenu = () =>{
    setShow(true);
  }
  const hideMenu = () =>{
    setShow(false);
  }
  return (
    <>
    <div className="z-50 fixed top-0 left-0 right-0 backdrop-blur-lg bg-neutral-300/20">
      <div className="flex flex-row justify-between px-2 py-1 h-16 ">
        <div className="flex flex-col justify-center">
          <a className="flex flex-row" href="/">
            <img alt="LCWD Logo"
            className="h-12 w-12 mr-2 my-auto"
              src="/Imgs/lcwd_logo.png"
             


            />
            <h1 className="ml-5 my-auto font-semibold text-[2rem] text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 "> LCWD </h1>
          </a>
        </div>
       
        <div className="lg:hidden flex flex-col justify-center"    onClick={showMenu} 
                 >
          <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
          </svg>
        </div>
        <div className="hidden lg:flex flex-row cursor-default text-lg  font-semibold mr-12">
<NavLink className="mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1" href="/home">Home</NavLink>
<NavLink className=" h-fit my-auto transition-all ease-linear hover:text-primary-dark " href="/blogs">
<h1 className="mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1">Blogs</h1>
</NavLink>
<NavLink className="mr-5 h-fit my-auto text-red-600 transition-all ease-linear hover:text-primary-dark hover:-translate-y-1" target="_blank" href="https://courses.learncodewithdurgesh.com/learn">Premium Courses</NavLink>
<h1 className="mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1">Free Courses</h1>
<NavLink className="h-fit my-auto transition-all ease-linear hover:text-primary-dark " href="/about">
<h1 className="mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1">About</h1>
</NavLink>
<NavLink className=" h-fit my-auto transition-all ease-linear hover:text-primary-dark " href="/contact">
<h1 className="mr-5 h-fit my-auto transition-all ease-linear hover:text-primary-dark hover:-translate-y-1">Contact</h1></NavLink>
<NavLink className="h-fit my-auto text-red-600 flex flex-row transition-all ease-linear hover:-translate-y-1" target="_blank" href="https://www.youtube.com/learncodewithdurgesh">
<img src="/Imgs/youtube.png" className='h-6 w-6 mr-2 my-auto' />
<p>Youtube</p>
</NavLink>
</div>
      </div>
     
    </div>
    <div className={Show === true ? "block" : "hidden"} >
    <div id='link2' class="absolute lg:invisible">
<div className="z-50 fixed top-0 left-0 right-0 backdrop-blur-lg bg-neutral-300/20">
<div className="flex flex-row justify-between px-2 py-1 h-16 ">
<div className="flex flex-col justify-center">
  
<a className="flex flex-row" href="/">
            <img alt="LCWD Logo"
            className="h-12 w-12 mr-2 my-auto"
              src="/Imgs/lcwd_logo.png"
             


            />
            <h1 className="ml-5 my-auto font-semibold text-[2rem] text-gradient bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600 "> LCWD </h1>
          </a>

</div>
<div className="flex flex-col justify-center"  onClick={hideMenu}>
  <svg className="w-9 h-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
</svg>
</div>
</div>
<div className="border-b-8 border-primary-dark block py-10 rounded-b-xl space-y-3 ">
<NavLink className="flex flex-row" href="/" onClick={hideMenu}>
<h1 className="mx-auto w-fit text-lg font-semibold">Home</h1>
</NavLink>
<NavLink className="flex flex-row" href='/about' onClick={hideMenu}>
<h1 className="mx-auto w-fit text-lg font-semibold flex-row">Blogs</h1>
</NavLink>

<a target="_blank"  className="flex flex-row" href="https://courses.learncodewithdurgesh.com/learn">
<h1 className="mx-auto w-fit text-lg font-semibold">Premium Courses</h1>
</a>
<h1 className="mx-auto w-fit text-lg font-semibold text-red-600 flex flex-row">Free Courses</h1>
<NavLink className="flex flex-row" href='/about' onClick={hideMenu}>
<h1 className="mx-auto w-fit text-lg font-semibold">About</h1>
</NavLink>

<NavLink className=" flex flex-row" href='/contact' onClick={hideMenu}>
<h1 className="mx-auto w-fit text-lg font-semibold">Contact</h1>
</NavLink>
<a className="mx-auto w-fit text-lg font-semibold text-red-600 flex flex-row" target="_blank" href="https://www.youtube.com/learncodewithdurgesh">
<img src="/Imgs/youtube.png" className='h-6 w-6 mr-2 my-auto'/>
<p>Youtube</p>
</a>
</div>
</div>
</div>
    </div>
    </>


  )
}

export default Navbar
