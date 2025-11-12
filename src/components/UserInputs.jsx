import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaXmark } from "react-icons/fa6";
import { addResumeAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';

const steps = ['basic Information', 'Contact Details', 'Educational Details', 'Work Experience', 'Skills and Certifications', 'Review & Submit'];
function Userinputs({resumeDetails,setResumeDetails}) {
  const skillSuggestionArray = ["NODE JS", "REACT", "PYTHON", "EXPRESS JS", "MONGO DB", "JAVASCRIPT", "C++", "COMMUNICATION", "EXCEL", "C"]
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  // create state for stroing resume deatils
  // const[resumeDetails,setResumeDetails]= React.useState({
  //  username:"", 
  //  jobtiles:"",
  //  location:"",
  //  email:"",
  //  mobile:"",
  //  github:"",
  //  linkedin:"",
  //  portfolio:"",
  //  course:"", 
  //  college:"",
  //  university:"",
  //  passoutyear:"",
  //  Jobtype:"",
  //  company:"",
  //  clocation:"",
  //  duration:"",
  //  userSkills:[],
  //  summary:""
  // })
  // reference to skill input tag
  const skillRef = React.useRef()
  //  to navigate 
   const navigate = useNavigate()

  console.log(resumeDetails);
  
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };  

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

  const renderSteps = (stepCounts) => {
    switch (stepCounts) {
      case 0: return (
        <div>
          <h3> personal Details</h3>
          <div className='row p-3' >
            <TextField value={resumeDetails.username} onChange={e=>setResumeDetails({...resumeDetails,username:e.target.value})} id="standard-basic-name" label="Full Name" variant="standard" />
            <TextField  value={resumeDetails.jobtiles} onChange={e=>setResumeDetails({...resumeDetails,jobtiles:e.target.value})} id="standard-basic-job" label="Job titles" variant="standard" />
            <TextField value={resumeDetails.location} onChange={e=>setResumeDetails({...resumeDetails,location:e.target.value})} id="standard-basic-location" label="Location" variant="standard" />
          </div>

        </div>
      )
      case 1: return (
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
      )
      case 2: return (
        <div>
          <h3> Education Details</h3>
          <div className='row p-3' >
            <TextField value={resumeDetails.course} onChange={e=>setResumeDetails({...resumeDetails,course:e.target.value})} id="standard-basic-course" label="Course Name" variant="standard" />
            <TextField value={resumeDetails.college} onChange={e=>setResumeDetails({...resumeDetails,college:e.target.value})} id="standard-basic-college" label="College Name" variant="standard" />
            <TextField value={resumeDetails.university} onChange={e=>setResumeDetails({...resumeDetails,university:e.target.value})} id="standard-basic-university" label="University" variant="standard" />
            <TextField value={resumeDetails.passoutyear} onChange={e=>setResumeDetails({...resumeDetails,passoutyear:e.target.value})} id="standard-basic-passout" label="Year of Passout" variant="standard" />
          </div>
        </div>
      )
      case 3: return (
        <div>
          <h3>Professional Details</h3>
          <div className='row p-3' >
            <TextField value={resumeDetails.Jobtype}  onChange={e=>setResumeDetails({...resumeDetails,Jobtype:e.target.value})} id="standard-basic-internship" label="job or Internship" variant="standard" />
            <TextField value={resumeDetails.company}  onChange={e=>setResumeDetails({...resumeDetails,company:e.target.value})} id="standard-basic-company" label="Company Name" variant="standard" />
            <TextField value={resumeDetails.clocation}  onChange={e=>setResumeDetails({...resumeDetails,clocation:e.target.value})} id="standard-basic-clocation" label="Company Location" variant="standard" />
            <TextField value={resumeDetails.duration}  onChange={e=>setResumeDetails({...resumeDetails,duration:e.target.value})} id="standard-basic-duration" label="Duration" variant="standard" />
          </div>
        </div>
      )
      case 4: return (
        <div>
          <h3>Skills</h3>
          <div className='d-flex align-items-center justify-content-center p-3 w-100' >
            <input ref={skillRef} placeholder='Add skills' type="text" className='form-control' />
            <Button onClick={()=>addSkill(skillRef.current.value)} variant='text' >Add</Button>
          </div>
          <h5>Suggestion</h5>
          <div className='d-flex justify-content-between flex-wrap my-3'  >
            {
              skillSuggestionArray.map((item, index) => (
                <Button onClick={()=>addSkill(item)} key={index} variant='outlined' className='m-2' >{item}</Button>
              ))
            }
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
      )
      case 5: return (
        <div>
          <h3> Summary</h3>
          <div className='p-3 row' >
            <TextField onChange={e=>setResumeDetails({...resumeDetails,summary:e.target.value})} id="standard-basic-summary" label="write a short summary of yourself" variant="standard" multiline rows={3} defaultValue={'Passionate MERN Stack Developer skilled in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Focused on creating responsive, user-friendly interfaces and efficient backend systems with clean, maintainable code.'} />
          </div>
        </div>
      )
      default: return null 
    }
  }
  const handleAddResume = async()=>{
    const {username,jobtiles,location} = resumeDetails
    if(!username && !jobtiles, !location){
      alert("please fill the form compleately...")
    }else{
      console.log("Api Call");
      try{
        const result = await addResumeAPI(resumeDetails)
        if(result.status==201){
          alert("resume added succesfully")
         const {id} = result.data
         navigate(`/resume/${id}/view`)
        }
      }catch(error){
        console.log(error);
        
      }
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}> 
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Typography sx={ { mt: 2, mb: 1 }}>Step {activeStep + 1} </Typography>
          {/* render content according to the strp */}
          <Box>
            {renderSteps(activeStep)}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            {activeStep === steps.length - 1 ?             
             <Button onClick={handleAddResume}>Finish </Button>
             :
             <Button onClick={handleNext}>Next </Button>
             }
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}

export default Userinputs