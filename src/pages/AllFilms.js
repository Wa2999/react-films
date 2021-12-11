import { useContext } from "react"
import { Row } from "react-bootstrap"
import MovieItem from "../components/MovieItem"
import FilmsContext from "../utils/FilmsContext"

function AllFilms() {
  const { films } = useContext(FilmsContext)

  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">All films</h4>
      </Row>
      <Row md={5}>
        {films.map(film => (
          <MovieItem film={film} key={film._id} />
        ))}
      </Row>
    </>
  )
}

export default AllFilms
