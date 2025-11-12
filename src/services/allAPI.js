// resume add api - called when finish button clicked

import { resume } from "react-dom/server"
import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

export const addResumeAPI = async (resume)=>{
  return await commonAPI(`${ServerURL}/resumes`,"POST",resume)

}
// get resume api
export const getResumeAPI = async (id)=>{
    return await commonAPI (`${ServerURL}/resumes/${id}`,"GET",{})
}
// update resume api 
export const updateResumeAPI = async (id,resume)=>{
    return await commonAPI (`${ServerURL}/resumes/${id}`,"PUT",resume)
}

// add history api
// get history api 
// remove history api