/* eslint-disable no-alert */
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Navigation from '../components/Navigation'

const Contact = () => (
  <div className="contact">
    <Navigation />
    <div className="contactContent">
      <div className="header" />
      <div className="contactBox">
        <h1>Contactez-moi !</h1>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt" />
            <span>Paris</span>
          </li>
          <li>
            <i className="fas fa-mobile-alt" />
            <CopyToClipboard text="0612345678">
              <span
                className="clickInput"
                onClick={() => {
                  alert('téléphone copié !')
                }}
              >
                06 12 34 56 78
              </span>
            </CopyToClipboard>
          </li>
          <li>
            <i className="far fa-envelope" />
            <CopyToClipboard text="monmail@coucou.fr">
              <span
                className="clickInput"
                onClick={() => {
                  alert('email copié !')
                }}
              >
                monmail@coucou.fr
              </span>
            </CopyToClipboard>
          </li>
        </ul>
      </div>
      <div className="socialNetwork">
        <ul>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <h4>LinkedIn</h4>
            <i className="fab fa-linkedin" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <h4>Github</h4>
            <i className="fab fa-github" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <h4>Twitter</h4>
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <h4>Codepen</h4>
            <i className="fab fa-codepen" />
          </a>
        </ul>
      </div>
    </div>
  </div>
)

export default Contact
