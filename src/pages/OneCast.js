import { useContext } from "react"
import { Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"
import MovieItem from "../components/MovieItem"

function OneCast() {
  const { actorId, directorId } = useParams()
  const { actors, directors } = useContext(FilmsContext)

  if (directors.length === 0 || actors.length === 0) return <h1>Loading...</h1>
  let cast
  if (actorId) cast = actors.find(actor => actor._id === actorId)
  else cast = directors.find(director => director._id === directorId)

  return (
    <>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${cast.photo}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
          minHeight: 400,
        }}
      >
        <Col md="4">
          <img variant="top" src={cast.photo} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>
            {cast.firstName} {cast.lastName}
          </h1>
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Films</h3>
        {cast.films.map(film => (
          <MovieItem film={film} key={film._id} />
        ))}
      </Row>
    </>
  )
}

export default OneCast
