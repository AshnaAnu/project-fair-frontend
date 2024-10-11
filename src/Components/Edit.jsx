import React, { useContext, useEffect, useState } from 'react'
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody
} from 'mdb-react-ui-kit';
import project1 from '../assets/images/bookcart.png'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import initialimg from '../assets/images/bookcart.png'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { serverURL } from '../Services/serverUrl';

function Edit({item}) {
  console.log(item);
  
  const [optSmModal, setOptSmModal] = useState(false);

  const toggleOpen = () => {
    setOptSmModal(!optSmModal);
    setProjectDetails({title:item.title, language: item.language, github: item.github, website: item.website, overview: item.overview, projectImg: item.projectImg})
    setPreviewImg("")
  }

  const [projectDetails, setProjectDetails] = useState({
    title:item.title, language: item.language, github: item.github, website: item.website, overview: item.overview, projectImg: item.projectImg
  });
  console.log(projectDetails);

  const [imgFileStatus, setImgFileStatus] = useState(false);
  //to assign image url
  const [previewImg, setPreviewImg] = useState("");

  useEffect(() => {
    if (projectDetails.projectImg.type === 'image/png' || projectDetails.projectImg.type === 'image/jpeg' || projectDetails.projectImg.type === 'image/png') {
      setImgFileStatus(true)
      //convert image file in to URL
      setPreviewImg(URL.createObjectURL(projectDetails.projectImg))
    }
    else {
      setImgFileStatus(false)
      // setProjectDetails({...projectDetails,projectImg})
    }
  }, [projectDetails.projectImg])

  const handleAdd = async () => {
    console.log("Inside Add");
    const { title, language, github, website, overview, projectImg } = projectDetails;
    if (!title || !language || !github || !website || !overview || !projectImg) {
      toast.warn('please fill the form!.', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

    } else {
      const reqBody = new FormData()
      reqBody.append("title", title)
      reqBody.append("language", language)
      reqBody.append("github", github)
      reqBody.append("website", website)
      reqBody.append("overview", overview)
      reqBody.append("projectImg", projectImg)

      const token = sessionStorage.getItem("token")
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        try {
          //api calling
          const response = await addProject(reqBody, reqHeader)
          console.log(response);
          if (response.status == 200) {
            setAddProjectRes(response.data)  //contextshare contextapi set
            toast.success('Project Added Successfully', {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
            toggleOpen()
            // projectDetails({
            //     title:"",
            //     language:"",
            //     github:"",
            //     website:"",
            //     overview:"",
            //     projectImg:""
            // })
            setPreviewImg(initialimg)

          }
          else {
            toast.error(response.data, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              transition: Bounce,
            });
          }


        } catch (error) {
          console.log("Error" + error);

        }
      }
    }


  }
  return (
    <div>
      <button className='border-0 bg-light' style={{ float: "right" }} onClick={toggleOpen}><FaEdit className='fs-3 text-success fw-bolder me-2' /></button>
      <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Book Cart App</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <div className="row">

                <div className="col-6">
                  <label >
                    <input onChange={(e) => { setProjectDetails({ ...projectDetails, projectImg: e.target.files[0] }) }} type="file" style={{ display: "none" }} />
                    <img src={ previewImg ? previewImg :`${serverURL}/uploads/${projectDetails.projectImg}`} width={"380px"} height={"350px"} />
                  </label>
                  {
                    !imgFileStatus && <div className='text-danger fw-bolder text-center mt-1'>
                      Only allowed the following file types <br /> (.jpg .jpeg .png)
                    </div>
                  }
                </div>
                <div className="col-6">

                  <input type="text" value={projectDetails.title} onChange={(e) => { setProjectDetails({ ...projectDetails, title: e.target.value }) }} className='form-control mb-3' placeholder='Title' />
                  <input type="text" value={projectDetails.language} onChange={(e) => { setProjectDetails({ ...projectDetails, language: e.target.value }) }} className='form-control mb-3' placeholder='Language' />
                  <input type="text" value={projectDetails.github} onChange={(e) => { setProjectDetails({ ...projectDetails, github: e.target.value }) }} className='form-control mb-3' placeholder='GitHub' />
                  <input type="text" value={projectDetails.website} onChange={(e) => { setProjectDetails({ ...projectDetails, website: e.target.value }) }} className='form-control mb-3' placeholder='Website' />
                  <textarea onChange={(e) => { setProjectDetails({ ...projectDetails, overview: e.target.value }) }} name="" id="" className='form-control mb-3' value={projectDetails.overview}>Overview</textarea>
                  <div className=''>
                    <button type='submit' className='btn btn-success' onClick={handleAdd}>Edit</button>
                    <button type='submit' onClick={toggleOpen} className='btn btn-danger mx-3'>Cancel</button>
                  </div>

                </div>
              </div>
            </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
    </div>
  )
}

export default Edit