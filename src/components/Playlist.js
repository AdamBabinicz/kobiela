import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import projectData from "./data";
import "./playlist.css";
import Spinner from "react-bootstrap/Spinner";

const Playlist = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1500);
  }, []);

  return (
    <>
      {spin ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "90vh" }}
        >
          <Spinner animation="border" variant="success" />
          &nbsp;&nbsp; Ładuje się ...
        </div>
      ) : (
        <div className="container">
          <h2 className="text-center mt-2">Fototeka</h2>
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-start">
              {projectData.map((el, index) => {
                return (
                  <>
                    <Card
                      style={{ width: "20rem", maxHeight: "fit-content" }}
                      className="mt-4 mb-4 car"
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          marginLeft: -13,
                        }}
                        src={el.imgsrc}
                      />
                      <Card.Body className="d-flex justify-content-center flex-column">
                        <Card.Title className="text-left">
                          {el.projectName}
                        </Card.Title>
                        <a
                          href={el.demo}
                          target="_blank"
                          className="text-decoration-none text-light"
                        >
                          <Button variant="primary">Zobacz</Button>
                        </a>
                      </Card.Body>
                    </Card>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Playlist;
