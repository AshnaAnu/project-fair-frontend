import React from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <>

      <div className="row p-5 m-2">
        <h2>Welcome User</h2>
        <div className="col-7 shadow p-5 m-4">
          <div className="row d-flex justify-content-center">
            <div className="col-6"><h3>My Projects</h3></div>
            <div className="col-6"><Add /></div>

          </div>
          <div className="row mt-3">
            <div className="col ">
              <View />
            </div>
          </div>

        </div>
        <div className="col-4 shadow p-5 m-4">
          <Profile />


        </div>





      </div>

    </>
  )
}

export default Dashboard