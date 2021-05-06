/* eslint-disable no-unused-vars */
import ProgressBar from './ProgressBar'
import { useState } from 'react'

const Languages = () => {
  const [languages, setLanguages] = useState([
    { id: 1, value: 'JavaScript', xp: 1.8 },
    { id: 2, value: 'Java', xp: 1.5 },
    { id: 3, value: 'C', xp: 0.8 },
  ])

  const [frameworks, setFrameworks] = useState([
    { id: 1, value: 'React', xp: 1.7 },
    { id: 2, value: 'Angular(2+)', xp: 1.3 },
    { id: 3, value: 'Spring', xp: 0.7 },
  ])
  return (
    <div className="languagesFrameworks">
      <ProgressBar languages={languages} className="languagesDisplay" title="languages" />
      <ProgressBar languages={frameworks} className="frameworksDisplay" title="frameworks et bibliothèques" />
    </div>
  )
}

export default Languages
