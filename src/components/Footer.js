import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px",
  };

  return (
    <>
      <div className="footer">
        <div
          className="container footer_container
          d-flex
          justify-content-around
          flex-wrap"
        >
          <div className="first mt-5">
            <h4>"Komediant profesjonalny"</h4>
            <p>Radom, 2023 - {new Date().getFullYear()}.</p>
            <p className="d-flex">
              <a
                href="https://www.instagram.com/explore/tags/bogumilkobiela"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.facebook.com/watch/?ref=search&v=408452153068018&external_log_id=bf62a49c-30f8-46e0-be31-de20de77d17e&q=bogumi%C5%82%20kobiela"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook mx-3"></i>
              </a>
            </p>
          </div>
          <div className="second mt-5">
            <h4>w liście do żony Małgorzaty, lekarki w 1965 r. pisał:</h4>
            <p>
              "Naprawdę boję się coraz częściej, że może zdarzyć się coś
              nieprzewidzianego, złego, bo nam za dobrze. A ja myślę, że
              przyroda zawsze wyrównuje, niestety"
            </p>
            <p>puaro@vp.pl</p>
          </div>
          <div className="third mt-5">
            <NavLink
              to="/życiorys"
              className="text-decoration-none"
              style={common}
            >
              <h4>Życiorys</h4>
            </NavLink>
            <NavLink
              to="/kontakt"
              className="text-decoration-none"
              style={common}
            >
              <p>Kontakt</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
