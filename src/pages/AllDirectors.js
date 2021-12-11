import { useContext } from "react"
import { Row } from "react-bootstrap"
import CastItem from "../components/CastItem"

import FilmsContext from "../utils/FilmsContext"

function AllDirectors() {
  const { directors } = useContext(FilmsContext)

  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">All directors</h4>
      </Row>
      <Row md={5}>
        {directors.map(director => (
          <CastItem key={director._id} cast={director} />
        ))}
      </Row>
    </>
  )
}

export default AllDirectors
