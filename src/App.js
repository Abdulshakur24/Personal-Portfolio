import React from "react";
import Body from "./pages/Home/Body";
import Footer from "./pages/Home/Footer";
import Header from "./pages/Home/Header";

import "./scss/_App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
