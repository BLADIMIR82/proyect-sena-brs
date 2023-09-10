import { GameCard } from "../../components/game-card/game-card";
import "./home-page.css";
import { GAMES } from "./gamesData";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";

export const HomePage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [genres, setGenres] = useState();

  const handleChange = (e) => {
    setGenres(e.target.value);
  };

  const categorias = [...new Set(GAMES.map((item) => item.genres[0]))];
  console.log(categorias);
  const handleFiltroClick = (categoria) => {
    setGenres(categoria);
  };
  const datosFiltrados = genres
    ? GAMES.filter(
        (item) =>
          item.genres[0] === genres ||
          item.title.toUpperCase().includes(genres.toUpperCase().slice(" "))
      )
    : GAMES;
  console.log(datosFiltrados);

  const cardElement = datosFiltrados.map((game) => {
    return <GameCard key={game.id} {...game} />;
  });
  console.log(cardElement);

  return (
    <div className="home-page">
      <div className="filter-categories">
      <div className="search">
        <input
          type="text"
          value={genres}
          onChange={handleChange}
          placeholder="Search"
        />  
        <AiOutlineSearch />
      </div>

      <div className="button-categories">
        {categorias.map((categoria) => (
          <button
            type="button"
            class="btn btn-outline-danger"
            key={categoria}
            onClick={() => handleFiltroClick(categoria)}
          >
            {categoria}
          </button>
        ))}
        <button
          type="button"
          class="btn btn-outline-danger"
          onClick={() => setGenres("")}
        >
          Show All
        </button>
      </div>

      </div>
      
      {cardElement.length > 0 ? (
        cardElement
      ) : (
        <div className="home-page">
          <h2>No Results Found !!</h2>
        </div>
      )}
    </div>
  );
};
