import React from 'react'
import UserInputs from '../components/UserInputs'
import Preview from '../components/Preview'

function UserForm() {
  // create state for stroing resume deatils
    const[resumeDetails,setResumeDetails]= React.useState({
     username:"", 
     jobtiles:"",
     location:"",
     email:"",
     mobile:"",
     github:"",
     linkedin:"",
     portfolio:"",
     course:"", 
     college:"",
     university:"",
     passoutyear:"",
     Jobtype:"",
     company:"",
     clocation:"",
     duration:"",
     userSkills:[],
     summary:""
    })
  return (
<div className='container'>
        <div className="row p-5">
            <div className="col-lg-6">
              <UserInputs resumeDetails={resumeDetails} setResumeDetails={setResumeDetails} />
            </div>
            <div className="col-lg-6">
              {
                resumeDetails.username && 
                <Preview resumeDetails={resumeDetails} />

              }
            </div>
        </div>
    </div>
  )
}

export default UserForm