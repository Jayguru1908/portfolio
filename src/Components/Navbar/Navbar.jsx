import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line} from "@remixicon/react";
const Navbar= () => {
const [menu,openMenu] = useState(false);
const [showMenu, setShowmenu]= useState(true);

  return (
    <nav className=' flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 sticky top-0 shadow-xl shadow-amber-30 rounded-2xl z-50'>
      <span className=' text-xl font-bold tracking-wide'> Portfolio  </span>

<ul className={`$
      hidden  mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:flex gap-6` }  >
  
    <a href="#About">
    <li className=' text-md transition-all duration-300 p-1 md:p-0'>About</li></a>
    <a href="#Experience">
    <li className=' text-md transition-all duration-300 p-1 md:p-0'>Experience</li></a>
    <a href="#Project">
    <li className=' text-md transition-all duration-300 p-1 md:p-0'>Projects</li></a>
    <a href="#Fotter">
    <li className=' text-md transition-all duration-300 p-1 md:p-0'>Contact</li></a>
</ul>
{ showMenu ? ( 
<RiMenu2Line size={30} className="md:hidden absolute right-10 top-6 transition-all duration-300" onClick={()=>{openMenu(!menu); setShowmenu(!showMenu);}}/>


):<RiCloseLine size= {30} className="md:hidden absolute right-10 top-6 transition-all duration-300"/>}
    </nav> 
  );
};

export default Navbar;
