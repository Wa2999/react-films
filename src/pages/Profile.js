import { useContext } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import FilmsContext from "../utils/FilmsContext"

function Profile() {
  const { profile } = useContext(FilmsContext)
  if (!profile) return <h1>Loading...</h1>
  return (
    <Container>
      <Row
        style={{
          backgroundColor: `rgba(50,12,240, 0.3)`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Col md="4">
          <img variant="top" src={profile.avatar} width="100%" style={{ borderRadius: "10px", margin: "20px" }} />
        </Col>
        <Col>
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>

          <p>{profile.email}</p>
        </Col>
      </Row>
      <Row className="mt-5">
        <h3>Favourite movies</h3>
        {profile.likes.map(film => (
          <Col key={film._id} md="2">
            <Card border="light" style={{ maxWidth: "200px" }}>
              <Link to={`/film/${film._id}`}>
                <Card.Img variant="top" src={film.poster} height="220px" style={{ borderRadius: "10px" }} />
              </Link>
              <Card.Body>
                <Link to={`/film/${film._id}`} className="text-black" style={{ textDecoration: "none" }}>
                  <Card.Title>{film.title}</Card.Title>
                </Link>
                <Card.Text className="text-muted">{film.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Profile
