import React from 'react';
import {
  awardsAndCompetitions,
  softwareDevelopment,
  industrialAndResearchContributions,
  patentsAndDisclosures,
  network
} from '../config';
import './index.css';

const Other = () => {
  return (
    <div className="other">
      {/* Awards and Competitions */}
      <h1>{awardsAndCompetitions.title}</h1>
      {awardsAndCompetitions.categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.content}</h2>
          <ul>
            {category.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Software Development */}
      <h1>{softwareDevelopment.title}</h1>
      {softwareDevelopment.categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.content}</h2>
          <ul>
            {category.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Industrial and Research Contributions */}
      <h1>Industrial and Research Contributions</h1>
      {industrialAndResearchContributions.map((contribution, index) => (
        <div key={index} className="contribution">
          <div className="contribution-header">
            <h3>{contribution.period}</h3>
            <h3>{contribution.institution}</h3>
          </div>
          {contribution.contributions.map((project, projectIndex) => (
            <div key={projectIndex}>
              <h3>{project.project}</h3>
              <ul>
                {project.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}

      {/* Patents and Technical Disclosures */}
      <h1>{patentsAndDisclosures.title}</h1>
      {patentsAndDisclosures.categories.map((category, index) => (
        <div key={index} className="category">
          <h2>{category.content}</h2>
          <ul>
            {category.details.map((detail, detailIndex) => (
              <li key={detailIndex}>{detail}</li>
            ))}
          </ul>
        </div>
      ))}

      {/* Network */}
      <h1>{network.title}</h1>
      <p>{network.content}</p>

    </div>
  );
};

export default Other;
