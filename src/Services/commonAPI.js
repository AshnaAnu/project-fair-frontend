//import axios in node
import axios from 'axios'

//API Fetching configure =>get,post,put,delete

export const commonAPI = async(httpMethod,url,reqBody,reqHeader) =>{
    //register =>method:post , url:localhost:3000/api/register, data:username,email,password


    let reqConfig = {
        method:httpMethod,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{
            "Content-Type":"application/json"
        }
    }


return await axios(reqConfig).then((response)=>{
    return response
})
.catch((error)=>{
    return error
})

}

export default commonAPI