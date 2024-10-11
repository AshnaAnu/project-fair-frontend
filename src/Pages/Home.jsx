import React, { useEffect, useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import ProjectCard from '../Components/ProjectCard';
import { getHomeProjectsAPI } from '../Services/AllApis';

function Home() {

  let token = sessionStorage.getItem('token');
  const [projects,setProjects]=useState([])
  const getHomeProjects=async()=>{
   
         try{
          const HomeProjects = await getHomeProjectsAPI()
          console.log(HomeProjects);
          if(HomeProjects.status==200){
            setProjects(HomeProjects.data)
          }
          else{
            console.log("Cant get projects");
            
          }
         }
         catch(error){
          console.log(error);
          
         }
    
     
      
  }
  useEffect(()=>{
    getHomeProjects()
  },[])
  return (
    <div>
      <div className="row m-5">
                <div className="col m-5 ">
                    <h1>Project Fair</h1>
                    <h5>Where projects transform into possibilities!</h5>
                    <p style={{ textAlign: "justify" }}>Project management is a structured approach to planning and guiding a project from inception to completion. It encompasses a range of activities, including defining the project’s goals, outlining tasks, managing resources, and controlling budgets. One of the fundamental aspects of project management is balancing the project's scope, time, and cost—a concept known as the "triple constraint."
                        A project fair is an event where individuals or teams present their innovative projects to a broader audience, including peers, educators, professionals, and potential investors. These fairs serve as a platform for showcasing creativity and innovation, providing participants with the opportunity to display their work through presentations, demonstrations, or posters. Project fairs often focus on specific themes or fields, such as science, technology, arts, or social innovation, allowing participants to delve deeply into a subject and share their findings with others. For many participants, these events are a chance to gain recognition for their hard work and to receive valuable feedback from experts and attendees.</p>
                   <div>
                    {token ? <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }} >
                        <button type="button" class="btn btn-primary">View Dashboard <span style={{ marginLeft: "5px", position: "relative", top: "-2px" }}><FaArrowRight /></span>  </button>


                    </Link>: <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }} >
                        <button type="button" class="btn btn-primary">GET STARTED  <span style={{ marginLeft: "5px", position: "relative", top: "-2px" }}><FaArrowRight /></span>  </button>


                    </Link>}
                   </div>

                </div>
                <div className="col ">
                    <img src="https://img.freepik.com/premium-photo/cartoon-business-man-working-laptop_1000714-734.jpg" alt="" height="500px" />
                </div>
            </div>
      <div className="row m-5">
      <h1 className='text-center mt-3 mb-3'>Explore Our Projects</h1>
            <div className="row">
              {
                projects.length>0?projects.map(item=>(
                  <div className="col">
                    <ProjectCard projects={item}/>
                  </div>
                ))        : <p className='text-danger fw-bolder'>Can't fetch data</p>

              }
            </div>
   
     </div>
     <div className='text-center'>
      <Link to={'/projects'}>
      <button className='btn btn-primary m-5'>View Projects</button>
      </Link>
    
     </div>

                <h1 className='text-center mt-3 '>Our Services</h1>
             <div className="row m-4">

                 <div className="col m-5">
                    <div class="card text-white bg-primary mb-3" style={{ maxWidth: "30rem" }}>
                        <div class="card-header">Services</div>
                         <div class="card-body">
                             <h4 class="card-title">Web Designing</h4>
                             <p class="card-text" style={{ textAlign: "justify" }}>Web designing is the process of creating and organizing content, graphics, and interactive elements for websites. It combines creativity with technology to build  user-friendly interfaces that attract and retain visitors. A well-designed website is not only visually appealing but also functional and accessible, ensuring that users can easily navigate through the content and perform desired actions.Web design relies on various tools and technologies to create visually appealing websites. Web designers play a crucial role in shaping the digital experiences of users.</p>
                         </div>
                     </div>
                </div>
                 <div className="col m-5"><div class="card text-white bg-primary mb-3" style={{ maxWidth: "30rem" }}>
                    <div class="card-header">Services</div>
                     <div class="card-body">
                        <h4 class="card-title">Web Development</h4>
                         <p class="card-text" style={{ textAlign: "justify" }}>Web development is the process of creating, building, and maintaining websites and web applications that are accessed over the internet or an intranet. It involves a range of tasks, from developing simple static web pages to complex web-based applications, electronic businesses, and social network services. Web development combines creativity with technical expertise to bring ideas to life on the web, playing a crucial role in shaping the digital experience for users around the globe.They ensure that the end product provides seamless user experience.</p>
                     </div>
                </div></div>
                 <div className="col m-5"><div class="card text-white bg-primary mb-3" style={{ maxWidth: "30rem" }}>
                    <div class="card-header">Services</div>
                    <div class="card-body">
                         <h4 class="card-title">Full Stack Development</h4>
                        <p class="card-text" style={{ textAlign: "justify" }}>Full stack development refers to the practice of working on both the front-end (client side) and back-end (server side) of a web application. A full stack developer possesses the skills and expertise to build an entire web application from scratch, handling everything from user interface design to server-side programming and database management. This versatility makes full stack developers valuable assets in web development teams, can work across multiple layers of a web application. Developers facilitate communication.</p>
                     </div>
                 </div></div>
             </div>
    </div>
  )
}

export default Home


// import React, { useEffect, useState } from 'react'

// import { FaArrowRight } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import ProjectCard from '../Components/ProjectCard'; 
// import { getHomeProjectsAPI } from '../Services/AllApis';


// function Home() {
//     let token = sessionStorage.getItem('token');
   
   
//     const [projects,setProjects] = useState([])

//     const getHomeProjects = async () => {

//           try {
//             const HomeProjects = await getHomeProjectsAPI()
//             console.log(HomeProjects);
//             if (HomeProjects.status == 200) {
//               setProjects(HomeProjects.data)
//             }
//             else{
//                 console.log('cant get projects');
                
//             }
    
//           } catch (error) {
//             console.log("Error" + error);
    
//           }

//           useEffect(() => {
//            getHomeProjects()
        
//           }, [])
      
      
    
    
//       }
//     return (
//         <div>
//             <div className="row m-5">
//                 <div className="col m-5 ">
//                     <h1>Project Fair</h1>
//                     <h5>Where projects transform into possibilities!</h5>
//                     <p style={{ textAlign: "justify" }}>Project management is a structured approach to planning and guiding a project from inception to completion. It encompasses a range of activities, including defining the project’s goals, outlining tasks, managing resources, and controlling budgets. One of the fundamental aspects of project management is balancing the project's scope, time, and cost—a concept known as the "triple constraint."
//                         A project fair is an event where individuals or teams present their innovative projects to a broader audience, including peers, educators, professionals, and potential investors. These fairs serve as a platform for showcasing creativity and innovation, providing participants with the opportunity to display their work through presentations, demonstrations, or posters. Project fairs often focus on specific themes or fields, such as science, technology, arts, or social innovation, allowing participants to delve deeply into a subject and share their findings with others. For many participants, these events are a chance to gain recognition for their hard work and to receive valuable feedback from experts and attendees.</p>
//                    <div>
//                     {token ? <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }} >
//                         <button type="button" class="btn btn-primary">View Dashboard <span style={{ marginLeft: "5px", position: "relative", top: "-2px" }}><FaArrowRight /></span>  </button>


//                     </Link>: <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }} >
//                         <button type="button" class="btn btn-primary">GET STARTED  <span style={{ marginLeft: "5px", position: "relative", top: "-2px" }}><FaArrowRight /></span>  </button>


//                     </Link>}
//                    </div>

//                 </div>
//                 <div className="col ">
//                     <img src="https://img.freepik.com/premium-photo/cartoon-business-man-working-laptop_1000714-734.jpg" alt="" height="500px" />
//                 </div>
//             </div>
            
//             <h1 className='text-center mt-3 '>Explore Our Projects</h1>
//             <div className="row">
//                 {
//                     projects.length>0?projects.map(item=>(
//                         <div className='col'>
//                              <ProjectCard projects={item}/>

//                         </div>

//                     )) : <p className='text-danger fw-bolder'>cant fetch data</p>
//                 }
//             </div>

            
           

//             <div className='text-center'>
//                 <Link to={"/projects"}><button className='btn btn-primary m-5'>View Projects</button></Link>
//             </div>
            
//             <h1 className='text-center mt-3 '>Our Services</h1>
//             <div className="row m-4">

//                 <div className="col m-5">
//                     <div class="card text-white bg-primary mb-3" style={{ maxWidth: "30rem" }}>
//                         <div class="card-header">Services</div>
//                         <div class="card-body">
//                             <h4 class="card-title">Web Designing</h4>
//                             <p class="card-text" style={{ textAlign: "justify" }}>Web designing is the process of creating and organizing content, graphics, and interactive elements for websites. It combines creativity with technology to build  user-friendly interfaces that attract and retain visitors. A well-designed website is not only visually appealing but also functional and accessible, ensuring that users can easily navigate through the content and perform desired actions.Web design relies on various tools and technologies to create visually appealing websites. Web designers play a crucial role in shaping the digital experiences of users.</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col m-5"><div class="card text-white bg-primary mb-3" style={{ maxWidth: "30rem" }}>
//                     <div class="card-header">Services</div>
//                     <div class="card-body">
//                         <h4 class="card-title">Web Development</h4>
//                         <p class="card-text" style={{ textAlign: "justify" }}>Web development is the process of creating, building, and maintaining websites and web applications that are accessed over the internet or an intranet. It involves a range of tasks, from developing simple static web pages to complex web-based applications, electronic businesses, and social network services. Web development combines creativity with technical expertise to bring ideas to life on the web, playing a crucial role in shaping the digital experience for users around the globe.They ensure that the end product provides seamless user experience.</p>
//                     </div>
//                 </div></div>
//                 <div className="col m-5"><div class="card text-white bg-primary mb-3" style={{ maxWidth: "30rem" }}>
//                     <div class="card-header">Services</div>
//                     <div class="card-body">
//                         <h4 class="card-title">Full Stack Development</h4>
//                         <p class="card-text" style={{ textAlign: "justify" }}>Full stack development refers to the practice of working on both the front-end (client side) and back-end (server side) of a web application. A full stack developer possesses the skills and expertise to build an entire web application from scratch, handling everything from user interface design to server-side programming and database management. This versatility makes full stack developers valuable assets in web development teams, can work across multiple layers of a web application. Developers facilitate communication.</p>
//                     </div>
//                 </div></div>
//             </div>


//         </div>
//     )
// }

// export default Home