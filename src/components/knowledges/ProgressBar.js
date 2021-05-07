const ProgressBar = ({ title, languages, className }) => (
  <div className={className}>
    <h3>{title}</h3>
    <div className="years">
      <span>années d'expérience</span>
      <span>Un an</span>
      <span>Deux ans</span>
    </div>
    <div>
      {languages.map(language => {
        let xpYears = 2
        let progressBar = (language.xp / xpYears) * 100 + '%'
        return (
          <div key={language.id} className="languagesList">
            <li>{language.value}</li>
            <div className="progressBar" style={{ width: progressBar }} />
          </div>
        )
      })}
    </div>
  </div>
)

export default ProgressBar
