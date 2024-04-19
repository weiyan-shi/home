import { Layout, Menu, Avatar } from 'antd';
import { publicationList, academicActivities } from '../config'
import './index.css'

console.log(publicationList);

const Publications = () => {
  return (
    <div className='publications'>
      <h1>Publications (Google Scholar Citation: 733+)</h1>
      <div className='publication-container'>
        <h2>Data-driven Operation and Control of Power Systems:</h2>
        {publicationList.dataDrivenOperationAndControl.map((pub, index) => (
          <div key={index} className="publication">
            <p className="publication-title">{`[${index + 1}] ${pub.title}`}</p>
            <p className="publication-details">{`${pub.source}, ${pub.year}. (Citation: ${pub.citationCount})`}</p>
          </div>
        ))}
      </div>

      <div className='publication-container'>
        <h2>Reliability and Planning of Power Systems:</h2>
        {publicationList.reliabilityAndPlanning.map((pub, index) => (
          <div key={index} className="publication">
            <p className="publication-title">{`[${index + 1}] ${pub.title}`}</p>
            <p className="publication-details">{`${pub.source}, ${pub.year}. (Citation: ${pub.citationCount})`}</p>
          </div>
        ))}
      </div>

      <div className='publication-container'>
        <h2>Cyber Security for Power Systems:</h2>
        {publicationList.cyberSecurity.map((pub, index) => (
          <div key={index} className="publication">
            <p className="publication-title">{`[${index + 1}] ${pub.title}`}</p>
            <p className="publication-details">{`${pub.source}, ${pub.year}. (Citation: ${pub.citationCount})`}</p>
          </div>
        ))}
      </div>

      {/* <h2>(4 More Submitted/In Revision Manuscripts in 2024)</h2> */}

      <h1>Academic Activities</h1>
      <div className='publication-container'>
        <h2>Academic Presentations and Services:</h2>
        {academicActivities["Academic Presentations and Services"].map((activity, index) => (
          <div key={index} className="activity">
            <h3>{activity.content}</h3>
            <ul>
              {activity.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className='publication-container'>
        <h2>Undergraduate Study:</h2>
        {academicActivities["Undergraduate study"].map((study, index) => (
          <div key={index} className="study">
            <h3>{study.content}</h3>
            <ul>
              {study.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Publications;