import React, { useState } from 'react'

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
import project2 from '../assets/images/ecommerceapp.png'
import project3 from '../assets/images/moviesearchapp.png'
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

function ProjectCard() {
    const [optSmModal, setOptSmModal] = useState(false);

    const toggleOpen = () => setOptSmModal(!optSmModal);
    return (
        <div>
            <div className="row m-5">
                <div className="col">
                    <div class="card" style={{ width: "25rem" }} onClick={toggleOpen}>
                        <img class="card-img-top" src={project1} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Book Cart App</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div></div>
                <div className="col">
                    <div class="card" style={{ width: "25rem" }} onClick={toggleOpen}>
                        <img class="card-img-top" src={project2} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">eCommerce App</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div></div><div className="col">
                    <div class="card" style={{ width: "25rem" }} onClick={toggleOpen}>
                        <img class="card-img-top" src={project3} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Movie Search App</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div></div>

                <a href="" className='text-center m-4'>See More Projects</a>
            </div>
            {/* Modal  */}

            <MDBModal open={optSmModal} tabIndex='-1' onClose={() => setOptSmModal(false)}>
                <MDBModalDialog size='lg'>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Book Cart App</MDBModalTitle>
                            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <div className="row">
                                <div className="col-6"> <img src={project1} width={"300px"} height={"350px"} /></div>
                                <div className="col-6">
                                    <h2>Description</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat eius dolor, quidem distinctio quam libero ullam. Iusto, accusantium. Accusantium iusto quidem minima molestiae non.</p>
                                    <h3>Technologies: React</h3>
                                    <hr />
                                    <div className="row d-flex justify-content-start gap-2">
                                        <div className='col-auto'><FaGithub className='fs-3' /></div>
                                        <div className='col-auto'><FaLink className='fs-3' /></div>
                                    </div>
                                </div>
                            </div>
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </div>
    )
}

export default ProjectCard