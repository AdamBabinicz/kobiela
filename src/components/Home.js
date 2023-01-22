import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./home.css";

const Home = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="container home_container">
        <div className="home_innerdiv">
          <div className="left_div">
            <h1>
              Bobek <span style={{ color: "#6c63ff" }}>i jego pasja</span>
            </h1>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              Bogumił Kobiela był jedną z największych gwiazd polskiego kina lat
              60. XX wieku. Aktor zyskał ogromną popularność dzięki roli Jana
              Piszczyka w Zezowatym szczęściu Andrzeja Munka. Jego karierę
              przerwał jednak tragiczny wypadek samochodowy, do którego doszło 2
              lipca 1969 roku.
            </p>
            <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2 }}>
              Początkowo wydawało się, że Bobek nie odniósł większych obrażeń,
              gdy pojawiło się pogotowie, to kazał zająć się żoną, która była
              ranna w głowę. Chwilę potem jednak zemdlał, trafił do szpitala w
              Bydgoszczy, lekarze stwierdzili pękniętą śledzionę i liczne
              obrażenia wewnętrzne. Śmigłowcem przetransportowano go do Gdańska,
              gdzie przeszedł dwie operacje. Walka o jego życie trwała osiem
              dni, 10 lipca 1969 roku aktor zmarł.
            </p>
            <p>
              <em>Sławomir Koper</em>
            </p>
            <div className="btn_div mt-4">
              <Button
                onClick={() => toggleTab(1)}
                variant="danger"
                style={{
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  background: "#2f2d69",
                  marginRight: 24,
                }}
              >
                Czytaj
              </Button>

              <div
                className={
                  toggleState === 1
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">"Upamiętnienie"</h3>
                  <p className="services__modal-description">
                    Dla upamiętnienia aktora w rodzinnej miejscowości Tenczynek
                    w woj. małopolskim jedna z ulic nosi nazwę Bogumiła Kobieli.
                    Imieniem aktora nazwano też ulicę w Gdańsku. Bracia Bogumił
                    i Marek byli niezwykle do siebie podobni, co sprawiło, że w
                    1968 r. Andrzej Wajda zaangażował Marka do roli w komedii
                    „Przekładaniec”. Zagrał oczywiście brata słynnego aktora. Na
                    ścianie warszawskiego Kina Praha znajduje się płaskorzeźba
                    upamiętniająca m.in. Bogumiła Kobielę i Zbigniewa
                    Cybulskiego; popiersie aktora znajduje się także w
                    Katowicach, a na ulicy Piotrkowskiej w Łodzi aktor ma swoją
                    gwiazdę.
                  </p>
                  <div className="services__modal-services">
                    <img src="assets/23.jpg" alt="..." />
                  </div>
                </div>
              </div>

              <Button
                onClick={() => toggleTab(2)}
                variant="danger"
                style={{
                  letterSpacing: "1px",
                  border: "none",
                  borderRadius: 4,
                  background: "#6c63ff",
                }}
              >
                Więcej
              </Button>

              <div
                className={
                  toggleState === 2
                    ? "services__modal active-modal"
                    : "services__modal"
                }
              >
                <div className="services__modal-content">
                  <i
                    onClick={() => toggleTab(0)}
                    className="uil uil-times services__modal-close"
                  ></i>
                  <h3 className="services__modal-title">"Ciekawostki"</h3>
                  <p className="services__modal-description">
                    Ciekawe kreacje stworzył w filmach dokumentalnych. W 1963 r.
                    przy pomocy ukrytej kamery Andrzej Kondratiuk nakręcił
                    krótkometrażowy film „Kobiela na plaży”. Pomysł był o tyle
                    nietypowy, że dziwnym zachowaniem aktor miał wzbudzić
                    zainteresowanie plażowiczów. Wcielał się w różne role:
                    spacerował na nartach po piasku, kontrolował karty
                    pływackie, udawał wyjeżdżającego z kurortu plażowicza. W
                    1968 r. zagrał samego siebie we „Wszystko na sprzedaż” –
                    filmie poświęconym tragicznie zmarłemu Zbigniewowi
                    Cybulskiemu (1967).
                  </p>
                  <div className="services__modal-services">
                    <img src="assets/24.jpg" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_div">
            <img src="assets/2.png" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
