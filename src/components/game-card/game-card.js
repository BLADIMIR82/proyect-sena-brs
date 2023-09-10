import { useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { GameGenre } from '../game-genre'
import { GameCover } from '../game-cover'
import { GameBuy } from '../game-buy'
import { setCurrentGame } from '../../redux/games/reducer'

import './game-card.css'

export const GameCard = (props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(setCurrentGame(props))
    navigate(`/app/${props.title}`)//url name
  }
  return(
    <div className="game-card" onClick={handleClick}>
      <GameCover image={props.image} />

      <div className="game-card__details">
        <div className="game-card__title">{props.title}</div>
        <div className="game-card__genres">
          {props.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-card__buy">
          <GameBuy game={props} />
        </div>
      </div>
    </div>
  )
}