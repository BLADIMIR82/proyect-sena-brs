
import './game-cover.css'

export const GameCover = ({image = ''}) => {
  return(
    <div className="game-cover" style={{backgroundImage: `url(${image})`}} alt="Game cover" />
    
  )
}