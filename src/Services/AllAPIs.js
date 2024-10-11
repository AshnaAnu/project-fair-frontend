import { serverURL } from "./serverUrl";
import { commonAPI } from "./commonAPI";

//Register API Call => post => localhost:3000/api/register
export const registerAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/api/register`,user,"")
}

//Login API Call => post => localhost:3000/api/login
export const loginAPI = async(user)=>{
    return await commonAPI('post',`${serverURL}/api/login`,user,"")
}


//add projects
export const addProject = async(project,reqHeader)=>{
    return await commonAPI('post' ,`${serverURL}/api/addProject`,project,reqHeader)
}

//get all user projects
export const getAllProjectsAPI = async(reqHeader)=>{
    return await commonAPI('get' ,`${serverURL}/api/getAllProjects`,"",reqHeader)
}
//get a particular user project
export const getUserProjectsAPI = async(reqHeader)=>{
    return await commonAPI('get' ,`${serverURL}/api/getUserProjects`,"",reqHeader)
}
//get home projects
export const getHomeProjectsAPI = async()=>{
    return await commonAPI('get' ,`${serverURL}/api/getHomeProjects`,"","")
}


//Edit Project API
export const editProject = async(project,reqHeader)=>{
    return await commonAPI('post' ,`${serverURL}/api/editProject`,project,reqHeader)
}



// import { serverURL } from "./serverURL";
// import { commonAPI } from "./commonAPI";

// //Register API Call => post method => localhost:3000/api/register
// export const registerAPI = async (user) => {
//     return await commonAPI('post', `${serverURL}/api/register`, user,"") //double quotes for request header...it will be empty
// }

// //Login API Call => post method => localhost:3000/api/login
// export const loginAPI = async (user) => {
//     return await commonAPI('post', `${serverURL}/api/login`, user, "") //empty request header
// }


// //Add projects

// export const addProject = async(project,reqHeader)=>{
//     return await commonAPI('post', `${serverURL}/api/addProject`, project, reqHeader)
// }

// //get all user projects
// export const getAllProjectsAPI = async(reqHeader)=>{
//     return await commonAPI('get', `${serverURL}/api/getAllProjects`, "", reqHeader)
// }

// //get a particular userproject
// export const getUserProjectsAPI = async(reqHeader)=>{
//     return await commonAPI('get', `${serverURL}/api/getUserProjects`, "", reqHeader)
// }
//  //get home projects to display in home page
//  export const getHomeProjectsAPI = async()=>{
//     return await commonAPI('get', `${serverURL}/api/homeProjects`, "", "")
// }
