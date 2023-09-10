import React, { useState, useRef, useEffect } from "react";
import { GAMES } from "../home-page/gamesData";
import "./panel-admi.css";
import { GameGenre } from "../../components/game-genre";

export const PanelAdmi = ({ props }) => {
  const [data, setData] = useState(GAMES);
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState([]);
  const [price, setPrice] = useState("");
  const [video, setVideo] = useState("");
  const [description, setDescription] = useState("");

  const handleUrlChange = (e) => {
    setImage(e.target.value);
  };
  console.log(GAMES);
  //CREATE//
  const handleCreate = () => {
    const newObj = {
      image,
      title,
      genres,
      price,
      video,
      id: Date.now(),
      description,
    };

    setData([newObj, ...data]);
    GAMES.unshift(newObj);

    // Restablece los campos del formulario
    setTitle("");
    setDescription("");
    setImage("");
    console.log(GAMES);
    console.log("New objet create:", newObj);
  };

  //DELETE//
  const handleDelete = (id) => {
    const updatedData = data.filter((obj) => obj.id !== id);
    setData(updatedData, ...data);
    GAMES.splice(updatedData);
    console.log("Objet delete:", id);
  };

  console.log(data);
  console.log(GAMES);

  return (
    <div className="panel-admi">
      <h1>PANEL ADMIN PAGE</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreate();
        }}
      >
        <input
          type="text"
          value={image}
          onChange={handleUrlChange}
          placeholder="URL image"
        />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genres"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> */}
        <br />
        <button type="submit">Create</button>
      </form>
      <div className="panel-card">
        {data?.map((item) => (
          <div key={item.id} class="card text-light  mb-3">
            <div>
              <img src={item.image} alt="image" />
              <div className="">
                <h2 className="card-title"></h2>
              </div>
            </div>
            <div className="title">
              <h4>{item.title}</h4>
            </div>
            <GameGenre genre={item.genres} />
            <h4 className="price"> {item.price} USD</h4>
            <div className="buttom-delete">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        <div className="genre-container"></div>
      </div>
    </div>
  );
};
