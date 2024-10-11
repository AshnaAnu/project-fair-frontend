import React, { createContext, useState } from 'react'

//create context
export const addProjectContextResponse = createContext()

function ContextShare({children}) {
 
    const [addProjectRes,setAddProjectRes]=useState("") //to hold the value

  return (
    <div>
        <addProjectContextResponse.Provider value={{addProjectRes,setAddProjectRes}}>     
        {/* //pass the states as object  */}
            {children}
        </addProjectContextResponse.Provider>
    </div>
  )
}

export default ContextShare