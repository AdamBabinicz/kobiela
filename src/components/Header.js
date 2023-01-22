import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

const Header = () => {
  const common = {
    marginRight: 15,
    fontSize: 17,
    letterSpacing: ".5px",
  };

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <div>
            <h1 className="mt-2 h2_right" style={{ color: "#6c63ff" }}>
              <NavLink to="/" className="text-decoration-none">
                Bogumił Kobiela
              </NavLink>
            </h1>
          </div>
          <Nav className="">
            <div className="mt-2">
              <NavLink to="/" className="text-decoration-none" style={common}>
                Start
              </NavLink>
              <NavLink
                to="/życiorys"
                className="text-decoration-none"
                style={common}
              >
                Życiorys
              </NavLink>
              <NavLink
                to="/fototeka"
                className="text-decoration-none"
                style={common}
              >
                Fototeka
              </NavLink>
              <NavLink
                to="/kontakt"
                className="text-decoration-none"
                style={common}
              >
                Kontakt
              </NavLink>
            </div>
            <div>
              <NavLink
                to="//www.google.com/search?q=ma%C5%82y+kabaret+kobiela&rlz=1C1YTUH_plPL942PL942&biw=1536&bih=754&ei=jezLY7ScFJD3sAfZuouoBA&ved=0ahUKEwj0lv6R5tj8AhWQO-wKHVndAkU4ChDh1QMIDw&uact=5&oq=ma%C5%82y+kabaret+kobiela&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAEyBQghEKABOgoIABBHENYEELADOgYIABAWEB5KBAhBGABKBAhGGABQxwdYjxhg9BpoAXABeACAAacBiAHGBpIBAzEuNpgBAKABAcgBCMABAQ&sclient=gws-wiz-serp#fpstate=ive&vld=cid:696da147,vid:utwkODK_0U0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="danger">YouTube</Button>
              </NavLink>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
