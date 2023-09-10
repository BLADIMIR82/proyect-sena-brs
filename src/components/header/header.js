import { Link } from "react-router-dom";
import Logo from "../../assets/game-covers/logo-provisional.PNG";

import { CartBlock } from "../cart-block/cart-block";

import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="logo">
          <Link to="home" className="logo">
            <img src={Logo} />
          </Link>
        </div>
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDarkDropdown"
            aria-controls="navbarNavDarkDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="home">
                  <a className="nav-link active" aria-current="page" href="id">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/">
                  <a className="nav-link active" aria-current="page" href="id">
                    Products
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about">
                  <a className="nav-link active" aria-current="page" href="id">
                    About us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="login">
                  <a className="nav-link active" aria-current="page" href="id">
                    Login
                  </a>
                </Link>
              </li>
            </ul>
            <Link to="panel-admi">
            <button type="button" class="btn btn-danger">Admin</button>
            </Link>
          </div>
        </div>
        <div className="header__cart">
          <CartBlock />
        </div>
      </nav>
    </header>
  );
};
