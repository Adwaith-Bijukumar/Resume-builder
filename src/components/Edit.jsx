import React, { useState,useRef } from 'react'
import { FaEdit } from "react-icons/fa";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxHeight:'80vh',
  overflowY:'auto',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function Edit({resumeDetails,setResumeDetails}) {
    const [open, setOpen] = useState(false)
    const skillRef = useRef()
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

     const addSkill = (skill)=>{
    if(resumeDetails.userSkills.includes(skill)){
      alert("The given Skill already added, Please add another!!!")
    }else{
      setResumeDetails({...resumeDetails,userSkills:[...resumeDetails.userSkills,skill]})
      // to clear add skill box
      skillRef.current.value = ""
    }
  }

  const removeSkill = (skill)=>{
    setResumeDetails({...resumeDetails,userSkills:resumeDetails.userSkills.filter(item=>item!=skill)})
  }

  return (
    <div>  
   <button onClick={handleOpen} className="btn fs-4 text-warning"> <FaEdit/></button>
   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Edit Resume Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {/* {.personal details} */}
             <div>
                     <h3> personal Details</h3>
                      <div className='row p-3' >
                        <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
                        <TextField  value={resumeDetails.jobtiles} onChange={e=>setResumeDetails({...resumeDetails,jobtiles:e.target.value})} id="standard-basic-job" label="Job titles" variant="standard" />
                        <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
                      </div>
                    </div>
          {/* {contact} */}
           <div>
                    <h3> Contact Details</h3>
                    <div className='row p-3' >
                      <TextField value={resumeDetails.email} onChange={e=>setResumeDetails({...resumeDetails,email:e.target.value})} id="standard-basic-email" label="Email" variant="standard" />
                      <TextField value={resumeDetails.mobile} onChange={e=>setResumeDetails({...resumeDetails,mobile:e.target.value})} id="standard-basic-number" label="Phone Number" variant="standard" />
                      <TextField value={resumeDetails.github} onChange={e=>setResumeDetails({...resumeDetails,github:e.target.value})} id="standard-basic-github" label="Github Profile Link" variant="standard" />
                      <TextField value={resumeDetails.linkedin} onChange={e=>setResumeDetails({...resumeDetails,linkedin:e.target.value})} id="standard-basic-linkedin" label="Linkedin Profile Link" variant="standard" />
                      <TextField value={resumeDetails.portfolio} onChange={e=>setResumeDetails({...resumeDetails,portfolio:e.target.value})} id="standard-basic-portfolio" label="Portfolio Link" variant="standard" />
                    </div>
                  </div>
                  {/* {education} */}
                  <div>
                            <h3> Education Details</h3>
                            <div className='row p-3' >
                              <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
                              <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
                              <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
                              <TextField value={resumeDetails.passoutyear} onChange={e=>setResumeDetails({...resumeDetails,passoutyear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
                            </div>
                          </div>
              {/* {professional} */}
              <div>
                        <h3>Professional Details</h3>
                        <div className='row p-3' >
                          <TextField value={resumeDetails.Jobtype}  onChange={e=>setResumeDetails({...resumeDetails,Jobtype:e.target.value})} id="standard-basic-internship" label="job or Internship" variant="standard" />
                          <TextField value={resumeDetails.company}  onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
                          <TextField value={resumeDetails.clocation}  onChange={e=>setResumeDetails({...resumeDetails,clocation:e.target.value})} id="standard-basic-clocation" label="Company Location" variant="standard" />
                          <TextField value={resumeDetails.duration}  onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
                        </div>
                      </div>
            {/* {skill} */}
                <div>
          <h3>Skills</h3>
          <div className='d-flex align-items-center justify-content-center p-3 w-100' >
            <input ref={skillRef} placeholder='Add skills' type="text" className='form-control' />
            <Button onClick={()=>addSkill(skillRef.current.value)} variant='text' >Add</Button>
          </div>
          <h5>Added  skills</h5>
          <div className='d-flex flex-wrap justify-content-between my-3' >
            {
              resumeDetails.userSkills?.length>0?
              resumeDetails.userSkills?.map((skill,index)=>(
              <Button key={index} variant='contained' className='m-1' >{skill} <FaXmark onClick={()=>removeSkill(skill)} className='ms-2' /> </Button>

              ))
              :
              <p className='fw-bolder'> No Skills are added yet</p>
            }
          </div>
        </div>
            {/* {summary} */}
            <div>
                      <h3> Summary</h3>
                      <div className='p-3 row' >
                        <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="write a short summary of yourself" variant="standard" multiline rows={3} defaultValue={'Passionate MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Focused on creating responsive, user-friendly interfaces and efficient backend systems with clean, maintainable code.'} />
                      </div>
                    </div>
                    <div className="text-center">
                        <div className="btn btn-success text-light">
                            Update
                        </div>
                    </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit