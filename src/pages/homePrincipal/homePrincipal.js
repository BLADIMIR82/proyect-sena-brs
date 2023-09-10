import "./homePrincipal.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/game-covers/logo-provisional.PNG";

export const HomePrincipal = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <div className="home_principal">
      <div className="logo-home">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>
      <Link to="/discount">
        <div className="call-action">
          <h1 className="tittle-principal text-white">
          Products Up To <em className="discount">15%</em> Discount!
          </h1>
        </div>
      </Link>
      <h2 className="tittle-carrousel">Featured Products</h2>
      <div className="carousel-home">
        <div
          id="carouselExampleFade"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img id="image1" className="?" />
              <h3>Game 1</h3>
            </div>
            <div className="carousel-item ">
              <img id="image2" className="" />
              <h3>Game 2</h3>
            </div>
            <div className="carousel-item ">
              <img id="image3" className="" />
              <h3>Game3 </h3>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              class="carousel-control-prev-icon btn-dark"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon btn-dark"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};
