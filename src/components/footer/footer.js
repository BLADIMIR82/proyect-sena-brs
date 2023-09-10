import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/game-covers/logo-provisional.PNG";
import "./footer.css";
import { BsFacebook, BsInstagram, BsYoutube, BsDiscord } from "react-icons/bs";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

export const Footer = () => {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="social-media">
          <h3>follow us</h3>
          <MDBBtn
            outline
            color="light"
            className="m-1"
            href="https://es-la.facebook.com/"
            target="_blank"
            role="button"
          >
            <span className="icon">
              <BsFacebook />
            </span>
          </MDBBtn>
          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.instagram.com/"
            target="_blank"
            role="button"
          >
            <span className="icon">
              <BsInstagram />
            </span>
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://www.youtube.com/?reload=9"
            target="_blank"
            role="button"
          >
            <span className="icon">
              <BsYoutube />{" "}
            </span>
          </MDBBtn>

          <MDBBtn
            outline
            color="light"
            floating
            className="m-1"
            href="https://discord.com/"
            target="_blank"
            role="button"
          >
            <span className="icon">
              <BsDiscord />{" "}
            </span>
          </MDBBtn>
        </section>
        <section className="mb-4"></section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <div className="logo-footer">
                <Link to="home" className="logo">
                  <img src={Logo} alt="img" />
                </Link>
              </div>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Shipping Policy
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Return Policy
                  </a>
                </li>
              </ul>
            </MDBCol>
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Suggestions
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:&nbsp;
        <a className="text-white" href="https://mdbootstrap.com/">
          Proyect SENA
        </a>
      </div>
    </MDBFooter>
  );
};
