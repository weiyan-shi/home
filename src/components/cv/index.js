import React from 'react';
import { education, workExperience } from '../config';
import './index.css';


const CV = () => {
  return (
    <div className='cv'>
      <div className='section'>
        <h1>Education</h1>
        {education.map((edu, index) => (
          <div key={index} className='education'>
            <p><strong>{edu.period}</strong></p>
            <p><strong>{edu.institution}</strong></p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>
      <div className='section'>
        <h1>Working Experience</h1>
        {workExperience.map((job, index) => (
          <div key={index} className='experience'>
            <p><strong>{job.period}</strong></p>
            <p><strong>{job.institution}</strong></p>
            <p>{job.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CV;