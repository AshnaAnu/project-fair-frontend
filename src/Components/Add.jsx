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
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


function Add() {
    const [optSmModal, setOptSmModal] = useState(false);

    const toggleOpen = () => setOptSmModal(!optSmModal);
    return (
        <div>
            <button className='btn btn-primary' style={{ float: "right" }} onClick={toggleOpen}>Add</button>
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
                                        <input type="file" style={{ display: "none" }} />
                                        <img src={project1} width={"300px"} height={"350px"} />
                                    </label>
                                </div>
                                <div className="col-6">

                                    <input type="text" className='form-control mb-3' placeholder='Title' />
                                    <input type="text" className='form-control mb-3' placeholder='Language' />
                                    <input type="text" className='form-control mb-3' placeholder='GitHub' />
                                    <input type="text" className='form-control mb-3' placeholder='Website' />
                                    <textarea name="" id="" className='form-control mb-3'>Overview</textarea>
                                    <div className=''>
                                        <button type='submit' className='btn btn-success'>Add</button>
                                        <button type='submit' onClick={toggleOpen} className='btn btn-danger mx-3'>Cancel</button>
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

export default Add