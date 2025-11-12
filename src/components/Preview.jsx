import { Divider,Button } from '@mui/material'
import React from 'react'


function Preview({resumeDetails}) {
  return (
    <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>{resumeDetails?.username}</h3>
      <h5>{resumeDetails?.jobtiles}</h5>
      <h6><span className="mx-2">{resumeDetails?.location}</span>|<span className="mx-2">{resumeDetails?.email}</span>|<span className="mx-2">{resumeDetails?.mobile}</span></h6>
      <p className="my-3 ">
        <a href={resumeDetails?.github} target='_blank'>GITHUB</a> |
        <a href={resumeDetails?.linkedin} target='_blank'>LINKEDIN</a> |
        <a href={resumeDetails?.protfolio} target='_blank'>PORTFOLIO</a>

      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}>{resumeDetails?.summary}
      </p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
       <h5>{resumeDetails?.course}</h5>
      <p><span className="mx-2">{resumeDetails?.college}</span>|<span className="mx-2">{resumeDetails?.university}</span>|<span className="mx-2">{resumeDetails?.passoutyear}</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
       <h5>{resumeDetails?.jobtype}</h5>
      <p><span className="mx-2">{resumeDetails?.company}</span>|<span className="mx-2">{resumeDetails?.cloaction}</span>|<span className="mx-2">{resumeDetails?.duration} </span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills </Divider>
      <div className="d-flex flex-wrap justify-content-between ">
        {
          resumeDetails?.userSkills?.map((item,index)=>(
                     <Button key={index} variant='contained' className='m-1'>{item} </Button>

          ))
        }
        </div>
      


    </div>
  )
}

export default Preview