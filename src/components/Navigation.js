import { NavLink } from 'react-router-dom'

const Navigation = () => (
  <div className="sidebar">
    <div className="id">
      <div className="idContent">
        <img src="./media/billGates.jpg" alt="profil-pic" />
        <h3>Ben M</h3>
      </div>
    </div>

    <div className="navigation">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="navActive">
            <i className="fas fa-home" />
            <span>Accueil</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/competences" activeClassName="navActive">
            <i className="fas fa-mountain" />
            <span>Compétences</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/portfolio" activeClassName="navActive">
            <i className="fas fa-image" />
            <span>Portfolio</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="navActive">
            <i className="fas fa-address-book" />
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </div>

    <div className="SocialNetwork">
      <ul>
        <li>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" />
          </a>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-codepen" />
          </a>
        </li>
      </ul>
      <div className="signature">
        <p>Ben H. - 2021</p>
      </div>
    </div>
  </div>
)

export default Navigation
