import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import { CiSearch } from "react-icons/ci";

function Projects() {
  return (
    <>
      <div className='d-flex flex-column align-items-center m-5 p-5'>
        <h1 className='text-center mb-5'>All Projects</h1>
       <div className='d-flex justify-content-evenly' >
       <input
          type="text"
          className='form-control '
          placeholder='Search by Technology'
         
        />
        <CiSearch style={{position:"relative",left:"-225px",top:"14px"}} className='fs-4'/>
       </div>

      </div>
      <div className=" m-2">
        <div className="col">
          <ProjectCard />
        </div>
      </div>
    </>
  )
}

export default Projects