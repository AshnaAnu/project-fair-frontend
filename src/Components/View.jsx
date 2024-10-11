import React, { useContext, useEffect, useState } from 'react'
// import { FaEdit } from "react-icons/fa";
import { HiLink } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Edit from './Edit';
import { addProjectContextResponse } from '../ContextAPI/ContextShare';
import { getUserProjectsAPI } from '../Services/AllApis'



function View() {
  const {addProjectRes,setAddProjectRes} = useContext(addProjectContextResponse)
  // console.log(projects);

  const [projects,setProjects]=useState([])

  const getUserProjects=async()=>{
    let token = sessionStorage.getItem('token');
    if(token){
      const reqHeader={
        "Content-Type": "application/json",
        "Authorization":"Bearer " + token
         }
         try{
          const allProjects = await getUserProjectsAPI(reqHeader)
          console.log(allProjects.data);
          if(allProjects.status==200){
            setProjects(allProjects.data)
          }
          else{
            console.log("Cant get projects");
            
          }
         }
         catch(error){
          console.log(error);
          
         }
    }
     
      
  }
  useEffect(()=>{
    getUserProjects()
  },[addProjectRes])
  
  return (
    <div>
  <div className="">
  {
              projects.length>0?projects.map(item=>(
                <div className="col mb-4">
              <div className="col my-4 border shadow p-3">
      <div className='row'>
        <div className="col-8">
          <h4>{item.title}</h4>
        </div>
        <div className="col-4">
          {/* <FaEdit className='fs-3 text-success fw-bolder me-2' /> */}
          <Edit item={item}/>
          <HiLink className='fs-4 text-info fw-bolder me-2' />
          <FaGithub className='fs-4 text-black fw-bolder me-2' />
          <MdDelete className='fs-4 text-danger fw-bolder me-2' />
        </div>
      </div>
    </div>
            </div>
              )):"No data found"
            }
    
  </div>
</div>

  )
}

export default View