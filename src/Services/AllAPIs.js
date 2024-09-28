import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

//Register API Call => post method => localhost:3000/api/register
export const registerAPI = async (user) => {
    return await commonAPI('post', `${serverURL}/api/register`, user,"") //double quotes for request header...it will be empty
}

