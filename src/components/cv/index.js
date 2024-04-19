import React from 'react';
import { education, workExperience, researchGrants } from '../config';
import './index.css';


const CV = () => {
  return (
    <div className='cv'>
      <h1>Education</h1>
      <div className='section'>
        {education.map((edu, index) => (
          <div key={index} className='education'>
            <p><strong>{edu.institution}</strong></p>
            <p><strong>{edu.period}</strong></p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>

      <h1>Working Experience</h1>
      <div className='section'>
        {workExperience.map((job, index) => (
          <div key={index} className='experience'>
            <p><strong>{job.institution}</strong></p>
            <p><strong>{job.period}</strong></p>
            <p>{job.details}</p>
          </div>
        ))}
      </div>

      <h1>Research Grants</h1>
      <div className='section'>
        {researchGrants.map((grant, index) => (
          <div key={index} className='grant'>
            <p><strong>{grant.role}</strong></p>
            <p><strong>{grant.title}</strong></p>
            <p>Funded by: {grant.fundingAgency || 'Various Agencies'}</p>
            <p>Grant Amount: {grant.grantAmount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CV;