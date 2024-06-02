import React from 'react';
import { education, workExperience, publicationList } from '../config';
import { Typography } from 'antd';
import './index.css';

const { Paragraph } = Typography;


const CV = () => {
  return (
    <div className='cv'>
      <h1>About Me</h1>
      <div className='section'>
        <p>I am about to pursue a Ph.D. degree at the Singapore University of Technology and Design.
          I previously obtained my bachelor's degree from Beijing Institute of Technology, followed by a master's degree from Peking University.
          My research interests lie in Human-Computer Interaction and Ubiquitous Computing.
        </p>
        Contact info:
        <Paragraph copyable className='email'>weiyanshi6@gmail.com</Paragraph>
      </div>
      <h1>Education</h1>
      <div className='section'>
        {education.map((edu, index) => (
          <div key={index} className='education'>
            <div className='edu-title'>
              <p>{edu.institution}</p>
              <p>{edu.period}</p>
            </div>
            <p>{edu.school}</p>
            <p>{edu.details}</p>
          </div>
        ))}
      </div>

      <h1>Publications</h1>
      <div className='section'>
        {publicationList.masterPeriod.map((pub, index) => (
          <div key={index} className="publication">
            <p>{`[${index + 1}] ${pub.title} (${pub.type})`}</p>
            <p>{`${pub.author}`}</p>
            <p>{`${pub.source}, ${pub.year}`}</p>
          </div>
        ))}
      </div>

      <h1>Working Experience</h1>
      <div className='section'>
        {workExperience.map((job, index) => (
          <div key={index} className='education'>
            <div className='edu-title'>
              <p>{job.title}</p>
              <p>{job.period}</p>
            </div>
            <p>{job.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CV;