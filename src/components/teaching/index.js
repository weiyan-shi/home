import React from 'react';
import { teaching } from '../config'; // Ensure this path is correct for your project structure
import './index.css';

const Teaching = () => {
  return (
    <div className="teaching">
      <h1>Teaching</h1>
      {Object.entries(teaching).map(([section, data], index) => (
        <div key={index} className="section">
          <h2>{section}</h2>
          {data.summary && <p className="summary">{data.summary}</p>}
          {data.details.map((detail, detailIndex) => (
            <div key={detailIndex} className="subcategory">
              <h3>{detail.title}</h3>
              {detail.courses && detail.courses.map((course, courseIndex) => (
                <div key={courseIndex} className="course">
                  <p><strong>{course.name}</strong></p>
                  <p>{course.description}</p>
                  {course.points && course.points.map((point, pointIndex) => (
                    <p key={pointIndex}>{point}</p>
                  ))}
                </div>
              ))}
              {detail.mentorship && detail.mentorship.map((mentorship, mentorshipIndex) => (
                <div key={mentorshipIndex} className="mentorship">
                  <p><strong>Mentorship:</strong> {mentorship.name}</p>
                  <p>{mentorship.project}{mentorship.year && ` (${mentorship.year})`}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Teaching;
