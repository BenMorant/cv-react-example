import Navigation from '../components/Navigation'

const Home = () => (
  <div className="home">
    <Navigation />
    <div className="homeContent">
      <div className="content">
        <h1>Ben M</h1>
        <h2>Développeur full stack</h2>
        <div className="pdf">
          <a href="./media/CV.pdf" target="_blank">
            Télécharger CV
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Home
