import { useContext } from "react"
import { Row } from "react-bootstrap"
import CastItem from "../components/CastItem"
import FilmsContext from "../utils/FilmsContext"

function AllActors() {
  const { actors } = useContext(FilmsContext)

  return (
    <>
      <Row>
        <h4 className="mt-5 mb-4">All actors</h4>
      </Row>
      <Row md={5}>
        {actors.map(actor => (
          <CastItem key={actor._id} cast={actor} />
        ))}
      </Row>
    </>
  )
}

export default AllActors
