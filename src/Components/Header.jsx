import React from 'react'
import { FaLaptopCode } from "react-icons/fa";

function Header() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{ fontSize: '30px', fontWeight: '700' }}><FaLaptopCode className=' p-2' style={{ fontSize: '50px' }}/> PROJECT FAIR</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
     
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header