import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Playlist from "./components/Playlist";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/życiorys" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/fototeka" element={<Playlist />} />
      </Routes>
      {/* <Home />
      <About />
      <Contact />
      <Playlist /> */}
      <Footer />
    </>
  );
}

export default App;
