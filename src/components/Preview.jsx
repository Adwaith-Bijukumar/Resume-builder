import { Divider,Button } from '@mui/material'
import React from 'react'


function Preview() {
  return (
    <div style={{margin:'70px'}} className='shadow p-5 w-100 rounded text-center'>
      <h3>Name</h3>
      <h5>Job Title</h5>
      <h6><span className="mx-2">Location</span>|<span className="mx-2">E Mail</span>|<span className="mx-2">Mobile</span></h6>
      <p className="my-3 ">
        <a href="" target='_blank'>GITHUB</a>|
        <a href="" target='_blank'>LINKEDIN</a>|
        <a href="" target='_blank'>PORTFOLIO</a>

      </p>
      <Divider sx={{fontSize:'25px'}}>Summary</Divider>
      <p style={{textAlign:'justify'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident rem libero asperiores doloremque dolor corporis, aspernatur corrupti hic laudantium cum fuga voluptates eligendi! Possimus optio repellat ipsa voluptatum voluptate amet!
      </p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Education</Divider>
       <h5>Course name</h5>
      <p><span className="mx-2">Collage</span>|<span className="mx-2">University</span>|<span className="mx-2">Passout year</span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Professional Experience</Divider>
       <h5>job / Internship</h5>
      <p><span className="mx-2">Company Name</span>|<span className="mx-2">Company Location</span>|<span className="mx-2">Duration </span></p>
      <Divider sx={{fontSize:'25px',marginBottom:'10px'}}>Skills </Divider>
      <div className="d-flex flex-wrap justify-content-between ">
         <Button variant='contained' className='m-1'>NODE JS </Button>
        </div>
      


    </div>
  )
}

export default Preview