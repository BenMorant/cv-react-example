/* eslint-disable no-unused-vars */
import Project from './Project'
import { portfolioData } from 'data/portfolioData'
import { useState } from 'react'

const ProjectList = () => {
  const [projects, setProjects] = useState(portfolioData)

  const [radios, setRadios] = useState([
    { id: 1, value: 'javascript' },
    { id: 2, value: 'css' },
    { id: 3, value: 'react' },
    { id: 4, value: 'php' },
    { id: 5, value: 'java' },
  ])

  const [selectedRadio, setSelectedRadio] = useState('javascript')

  const handleRadio = e => {
    setSelectedRadio(e.target.value)
  }

  return (
    <div className="portfolioContent">
      <ul className="radioDisplay">
        {radios.map(radio => (
          <li key={radio.id}>
            <input
              type="radio"
              name="radio"
              checked={radio.value === selectedRadio}
              value={radio.value}
              id={radio.value}
              onChange={handleRadio}
            />
            <label htmlFor={radio.value}>{radio.value}</label>
          </li>
        ))}
      </ul>
      <div className="projects">
        {projects
          .filter(project => project.languages.includes(selectedRadio))
          .map(project => (
            <Project key={project.id} project={project} />
          ))}
      </div>
    </div>
  )
}

export default ProjectList
