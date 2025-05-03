import React from 'react'
import logo from '../../assets/jay-removebg-preview.png';
import TextChanger from './TextChanger';
// import { IoArrowForward } from "react-icons/io5"
const Home = () => {
  return (
    <div className=' text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className=' md:w-2/4 md:pt-10'>
      <h1 className=' text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'><TextChanger/></h1>  
      <p className=' text-2xl md:text-2xl tracking-tight '> Hey..! i'm Jay Singh and i'm feontend developer. I love Working on the web and making sure it continues to be palce for everyone and our creative, personal and weird passions.</p>
      <button  className=' mt-5 md:md-10 text-white py-02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:sc-105 font-semibold rounded-3xl bg-[#465697]'> <a href="#Fotter">Contact Me</a></button>
      </div>
    <img className=' w-2/5 'src={logo} alt="" />
 
        </div>
  );
};

export default Home;
