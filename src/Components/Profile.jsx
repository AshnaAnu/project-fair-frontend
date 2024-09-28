import React, { useState } from 'react'
import { FaChevronCircleUp } from "react-icons/fa";
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';


function Profile() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);
    return (
        <div>
            <div className="row">
                <div className="col-6">
                    <h6 style={{fontWeight:"bold"}}>Profile Update!</h6>
                </div>
                <div className="col-6">
                    <button onClick={toggleOpen} className='btn 'style={{float:"right"}}><FaChevronCircleUp className='fs-4'/></button>
                </div>
            </div>
            <MDBCollapse open={isOpen}>
            <div className="row text-center">
                <label >
                    <input type="file" style={{ display: "none" }} />
                    <img src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="" height={'200px'} width={'240px'} className='mb-3'/>
                    <input type="text" className='form-control mb-3' placeholder='Username' />
                    <input type="text" className='form-control mb-3' placeholder='GitHub Link' />
                    <input type="text" className='form-control mb-3' placeholder='LinkedIn' />
                    <button className='btn btn-success mt-3 mb-2'>Update</button>
                </label>
            </div>
            </MDBCollapse>
        </div>
    )
}

export default Profile