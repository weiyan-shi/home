import React from 'react';
import { education, workExperience, publicationList } from '../config';
import './index.css';


const CV = () => {
  return (
    <div className='cv'>
      <h1>Education</h1>
      <div className='section'>
        {education.map((edu, index) => (
          <div key={index} className='education'>
            <div className='edu-title'>
              <p><strong>{edu.institution}</strong></p>
              <p><strong>{edu.period}</strong></p>
            </div>
            <p>{edu.school}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>

      <h1>Publications</h1>
      <div className='section'>
        <div className='publications'>
          {publicationList.masterPeriod.map((pub, index) => (
            <div key={index} className="publication">
              <p className="publication-title">{`[${index + 1}] ${pub.title} (${pub.type})`}</p>
              <p className="publication-details">{`${pub.author}`}</p>
              <p className="publication-details">{`${pub.source}, ${pub.year}`}</p>
            </div>
          ))}
        </div>
      </div>

      <h1>Working Experience</h1>
      <div className='section'>
        {workExperience.map((job, index) => (
          <div key={index} className='education'>
            <div className='edu-title'>
              <p><strong>{job.title}</strong></p>
              <p><strong>{job.period}</strong></p>
            </div>
            <p>{job.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CV;