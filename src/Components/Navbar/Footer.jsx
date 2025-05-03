import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div id='Fotter' className=' flex justify-around bg-[#465697] text-white h-40 p-10 md:p-12 items-center'>
  <div> <h1 className=' trxt-2 md:text-6xl font-bold'>Contact</h1>
  <h3 className=' text-sm md:text-2xl font-normal '> Feel Free To Reach Out</h3>
  </div>
  <ul className=' text-sm md:text-xl'>
  <li className=' flex gap-2 items-center'><MdOutlineEmail size={20}/>Jaisinghgour3@gmail.com</li>
<a href="www.linkedin.com/in/jaysinghgour"><li  className=' flex gap-2 items-center'> <CiLinkedin size={20}/>Linkdlin/Jay Singh Gour</li></a> 
 {/* <NavLink to="www.linkedin.com/in/jaysinghgour"><li  className=' flex gap-2 items-center'><FaGithub size={20}/> github.com/Jayguru1908</li></NavLink>  */}
  </ul>
    </div>
 
 
  );
   
};

export default Footer;
