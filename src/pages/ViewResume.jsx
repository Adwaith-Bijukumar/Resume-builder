import React,{useEffect, useState} from 'react'
import Preview from '../components/Preview'
import { useParams,Link } from 'react-router-dom'
import { getResumeAPI,addHistoryAPI } from '../services/allAPI';
import { resume } from 'react-dom/server';
import { FaFileDownload } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { FaBackward } from "react-icons/fa";
import Edit from '../components/Edit';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';


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
  
  const handleDownloadResume = async()=>{
  //  create pdf doc
  const doc = new jsPDF();
  const preview = document.getElementById("preview")
  // screenshot of preview
  const canvas = await html2canvas(preview,{scale:2})
  // canvas to image
  const resumeImg = canvas.toDataURL('image/png')
  console.log(resumeImg);
  
  // add screenshot to pdf
  const pageWidth = doc.internal.pageSize.getWidth()
  // const imgHeight = doc.internal.pageSize.getHeight()
  const imgWidth = pageWidth-20  
  const imgHeight = canvas.height*imgWidth/canvas.width
  doc.addImage(resumeImg,"PNG",0,0,imgWidth,imgHeight)
  // download pdf
  doc.save(`${resume.username}-resume.pdf`)
  // local time 
 const localTimeData = new Date()
 const timeStamp = `${localTimeData.toLocaleDateString()}, ${localTimeData.toLocaleTimeString()}`
 try{
  await addHistoryAPI({timeStamp,resumeImg})
 }catch(err){
  console.log(err);
  
 }
  }

  return (
    <>
    <div className="container my-5">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 c0l-12">
              <div className="d-flex justify-content-center align-items-center mt-5">
                <button onClick={handleDownloadResume} className="btn fs-4 text-danger"> <FaFileDownload/></button>
                <Edit resumeDetails={resume} setResumeDetails={setResume} />
                <Link to={'/history'} className="btn fs-4 text-primary"> <MdOutlineHistory/></Link>
                <Link to={'/resume'} className="btn fs-4 text-success"> <FaBackward/></Link>

              </div>
                <div id='preview'><Preview resumeDetails={resume} setResume={setResume}/></div>
            </div>
            <div className="col-md-2"></div>
        </div>
    </div>
    </>
  )
}

export default ViewResume