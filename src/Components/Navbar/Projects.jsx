import React from 'react'
import ProjectsCard from './Projectscard';


const Projects = () => {
  return (
    <div id='Project' className=' p-10 md:p-24 text-white'>
        <h1 className=' text-2xl md:text-4xl  text-white font-bold'> Projects</h1>
      <div className=' py-12 px-8 flex flex-wrap gap-5 '>
        <ProjectsCard 
        Title="Blogging Website" main="This is a blogging website Created in react.js and use some component library"/>
        <ProjectsCard
         Title="Youtube Clone" main="This is a blogging website Created in react.js and use some component library"/>
     
        
      </div>
    </div>
  );
};

export default Projects;
