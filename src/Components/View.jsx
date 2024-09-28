import React from 'react'
import { FaEdit } from "react-icons/fa";
import { HiLink } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function View() {
  return (
    <div>
  <div className="row">
    <div className="col border shadow p-3">
      <div className="row d-flex justify-content-between">
        <div className="col">
          <h4>Project name</h4>
        </div>
        <div className="col-auto">
          <FaEdit className='fs-3 text-success fw-bolder me-2' />
          <HiLink className='fs-3 text-info fw-bolder me-2' />
          <FaGithub className='fs-3 text-black fw-bolder me-2' />
          <MdDelete className='fs-3 text-danger fw-bolder me-2' />
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default View