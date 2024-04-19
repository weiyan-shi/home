import { Layout, Menu, Avatar } from 'antd';
import {publicationList} from '../config'
import './index.css'

console.log(publicationList);

const Publications = () => {
  return (
    <div className='publications'>
      <h1>Publications</h1>
      <strong>Google Scholar Citation: 733+</strong>
      <h2>Data-driven Operation and Control of Power Systems:</h2>
      {publicationList.dataDrivenOperationAndControl.map((pub, index) => (
        <div key={index} className="publication">
        <p className="publication-title">{`[${index + 1}] ${pub.title}`}</p>
        <p className="publication-details">{`${pub.source}, ${pub.year}. (${pub.citations})`}</p>
        <p className="publication-citation">Citation: {pub.citationCount}</p>
      </div>
      ))}

      <h2>Reliability and Planning of Power Systems:</h2>
      {publicationList.reliabilityAndPlanning.map((pub, index) => (
        <div key={index} className="publication">
        <p className="publication-title">{`[${index + 1}] ${pub.title}`}</p>
        <p className="publication-details">{`${pub.source}, ${pub.year}. (${pub.citations})`}</p>
        <p className="publication-citation">Citation: {pub.citationCount}</p>
      </div>
      ))}

      <h2>Cyber Security for Power Systems:</h2>
      {publicationList.cyberSecurity.map((pub, index) => (
        <div key={index} className="publication">
        <p className="publication-title">{`[${index + 1}] ${pub.title}`}</p>
        <p className="publication-details">{`${pub.source}, ${pub.year}. (${pub.citations})`}</p>
        <p className="publication-citation">Citation: {pub.citationCount}</p>
      </div>
      ))}

      <h2>(4 More Submitted/In Revision Manuscripts in 2024)</h2>
    </div>
  )
}

export default Publications;