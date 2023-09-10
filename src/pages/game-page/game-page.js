
import { useSelector } from 'react-redux'
import { GameBuy } from '../../components/game-buy';
import { GameCover } from '../../components/game-cover';
import { GameGenre } from '../../components/game-genre';

import './game-page.css'

export const GamePage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  
  const game = useSelector((state) => state.game.currentGame);
  if (!game) return null;
  return(
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>

      <div className="game-page__content">
        <div className="game-page__video">
          <iframe width="100%" height="400px" src={game.video} frameBorder="0" title="Youtube video player" ></iframe>
        </div>

        <div className="game-page__about">
          <GameCover image={game.image} />
          <p className="game-page__about-description">{game.description}</p>

          
          <p className="scondary-text">Popular genres of this product:</p>

          <div className="game-page__about-genre">
            {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
            ))}
          </div>
          

          <div className="game-page__buy"><GameBuy game={game}/></div>
        </div>
      </div>
    </div>
  )
}