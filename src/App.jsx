import React from 'react'
import About from "./Components/Navbar/About";
import Home from "./Components/Navbar/Home";
import Navbar from "./Components/Navbar/Navbar";
import Experience from "./Components/Navbar/Experience";

import Footer from './Components/Navbar/Footer';
import TextChanger from './Components/Navbar/TextChanger';
import Projects from './Components/Navbar/Projects';
 function App() {
  return (
    <div className=' bg-[#171d32] h-auto w-full overflow-hidden'>
       <Navbar/>
       <Home/>
       <About/>
       <Experience/>
       <Projects/>
     
       <Footer/>
       
    </div>
  );
};
export default App;
