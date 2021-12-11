import { useContext } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import FilmsContext from "../utils/FilmsContext"

function OneStar(props) {
  const { fill, setFill, starNumber, filmId } = props
  const { addRating } = useContext(FilmsContext)
  return fill >= starNumber ? (
    <AiFillStar size="25" onMouseOver={() => setFill(starNumber)} onClick={() => addRating(filmId, starNumber)} />
  ) : (
    <AiOutlineStar size="25" onMouseOver={() => setFill(starNumber)} />
  )
}

export default OneStar
