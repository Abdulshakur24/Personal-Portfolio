import React from "react";
import Banner from "./Home/Banner";
import About from "./Home/About";
import Projects from "./Home/Projects";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import "./scss/App.scss";
import Skills from "./Home/Skills";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
