import React,{useEffect, useState} from 'react'
import Preview from '../components/Preview'
import { useParams,Link } from 'react-router-dom'
import { getResumeAPI } from '../services/allAPI';
import { resume } from 'react-dom/server';
import { FaFileDownload } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { FaBackward } from "react-icons/fa";
import Edit from '../components/Edit';

function ViewResume() {
  const {id} =useParams()
  console.log(id);
  const[resume,setResume] = useState({})

  useEffect(()=>{
    getResumeDetails()
  },[])

  const getResumeDetails = async ()=>{
    const result = await getResumeAPI(id)
    console.log(result);
    if(result.status==200){
      setResume(result.data)
    }
    
  }


  return (
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 c0l-12">
              <div className="d-flex justify-content-center align-items-center mt-5">
                <button className="btn fs-4 text-danger"> <FaFileDownload/></button>
                <Edit resumeDetails={resume} setResumeDetails={setResume} />
                <Link to={'/history'} className="btn fs-4 text-primary"> <MdOutlineHistory/></Link>
                <Link to={'/resume'} className="btn fs-4 text-success"> <FaBackward/></Link>

              </div>
                <Preview resumeDetails={resume} setResume={setResume}/>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    </>
  )
}

export default ViewResume