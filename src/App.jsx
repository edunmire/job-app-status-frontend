import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const JobCard = ({ title }) => {
  const [jobStatus, setJobStatus] = useState("watching");

  useEffect(() => {
    console.log(`${title} has been changed to ${jobStatus}`);    
  })

  return (
    <div className="jobcard">
      <h2>{title}</h2>

      <select className="status-select" onChange={(e) => setJobStatus(e.target.value)}>
        <option value="watching">Watching</option>
        <option value="applied">Applied</option>
        <option value="rejected">Rejected</option>
        <option value="accepted">Accepted</option>
      </select>
      
    </div>
  )
}

const App = () => {
  return (
    <>
    <h1>Current Job Applications</h1>

    <div className='jobcard-container'>
      <JobCard title='Oracle Design Intern'/>
      <JobCard title='SWE Apple Engineer II'/>
      <JobCard title='God Help Me! I cant'/>
      <JobCard title='Dont stop believin'/>
    </div>

    <div>
      <button id="new-job-button" onClick={()=>{console.log("Add new job")}}>+</button>
    </div>
    </>
  )
}

export default App
