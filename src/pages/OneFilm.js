import { useContext } from "react"
import { Button, Card, Col, Image, OverlayTrigger, Row, Tooltip } from "react-bootstrap"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { toast } from "react-toastify"
import RatingStars from "../components/RatingStars"

function OneFilm() {
  const { filmId } = useParams()
  const { films } = useContext(FilmsContext)

  if (films.length === 0) return <h1>Loading...</h1>

  const film = films.find(film => film._id === filmId)
  return (
    <>
      <Row
        style={{
          backgroundImage: `linear-gradient(rgba(2,25,160, 0.5), rgba(255,255,255, 0.3)),  url("${film.poster}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          color: "white",
        }}
      >
        <Col md="4">
          <img variant="top" src={film.poster} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col md={{ offset: 1 }}>
          <h1>{film.title}</h1>
          <div className="mb-2">
            {film.genres.map(genre => (
              <span>{genre.name}</span>
            ))}
          </div>
          <h3>Rating</h3>
          <Row className="d-flex align-items-center">
            <Col md="2">
              <span>{film.ratingAverage} / 5</span>
            </Col>
            <Col>
              <RatingStars filmId={film._id} />
            </Col>
          </Row>
          <h3>Overview</h3>
          <p>{film.description}</p>
          <h3>Director</h3>
          <p>
            {film.director.firstName} {film.director.lastName}
          </p>
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Actors</h3>
        {film.actors.map(actor => (
          <Col md="2">
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/actor/${actor._id}`}>
                <Card.Img
                  variant="top"
                  src={actor.photo}
                  height="220px"
                  style={{ borderRadius: "10px", objectFit: "cover" }}
                />
              </Link>
              <Card.Body>
                <Link to={`/actor/${actor._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>
                    {actor.firstName} {actor.lastName}
                  </Card.Title>
                </Link>
                <Card.Text className="text-muted">{actor.type}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5">
        <h3>Comments</h3>

        {film.comments.map(comment => (
          <Card style={{ margin: 20, maxWidth: 1100 }}>
            <Row>
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col md="1">
                  <Image src={comment.owner.avatar} width="80px" roundedCircle />
                </Col>
                <Col>
                  {comment.owner.firstName} {comment.owner.lastName}
                </Col>
              </Row>
              <Row>
                <Col md={{ offset: 1 }}>{comment.comment}</Col>
              </Row>
            </Row>
          </Card>
        ))}
      </Row>
    </>
  )
}

export default OneFilm
