import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
      <div
        className="container mb-3 about_container"
        style={{ minHeight: "100%" }}
      >
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 500 }}>
            <h2>W komedii nie miał sobie równych&nbsp;..."</h2>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
              }}
            >
              Przez 17 lat kariery filmowej Bogumił Kobiela wystąpił w 25
              produkcjach. Pojawił się m.in. w pełnym rozmachu "Rękopisie
              znalezionym w Saragossie", u Andrzeja Munka w "Eroice", u Jerzego
              Skolimowskiego w filmie "Ręce do góry", w komediach
              "Przekładaniec" i "Człowiek z M-3", filmie psychologicznym
              "Wszystko na sprzedaż" czy w "Popiele i diamencie", u boku swojego
              najlepszego przyjaciela Zbigniewa Cybulskiego.
            </p>
            <p
              style={{
                color: "#666",
                letterSpacing: ".5px",
                marginTop: 2,
                lineHeight: 2,
              }}
            >
              Sam o swojej karierze filmowej mówił z dystansem: "W filmach gram
              dość często, choć ważnych ról, ciekawych postaci nie miałem wiele.
              Ciągle jednak mam nadzieję, że trafię na swoją rolę".
            </p>
            <p>
              <em>Karolina Małas</em>
            </p>
          </div>
          <div className="right_container mt-3">
            <img src="assets/1.jpeg" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
