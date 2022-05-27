import { Link } from 'react-router-dom'

const Card = ({ personaje }) => {
  return (
    <div className="personaje-item">
      <Link to={`/personaje/${personaje.id}`}>
        <img src={personaje.imageUrl} alt="" />
        <div className="personaje-item__info">
          <h2>{personaje.fullName}</h2>
          <p><b>"{personaje.title}"</b></p>
        </div>
      </Link>
    </div>
  )
}

export default Card