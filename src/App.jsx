import React from "react";
import cardData from "./data";
import "./css/app.css";
// main components
import Navbar from "./components/nav.jsx";
import Hero from "./components/hero.jsx";
import Card from "./components/card.jsx";
import Helmet from "react-helmet";

function App() {
  // console.table(cardData);
  const cardSet = cardData.map((el) => {
    return <Card key={el.id} {...el} />;
  });

  return (
    <>
      <Helmet>
        <script src="/motion.js" type="text/javascript" defer></script>
      </Helmet>
      <Navbar />
      <Hero />
      {/* section el added by me */}
      <div id="rel-box" style={{ position: "relative" }}>
        <section className="card-section">{cardSet}</section>
        <p className="btn" id="left-btn">
          «
        </p>
        <p className="btn" id="right-btn">
          »
        </p>
      </div>
    </>
  );
}

export default App;
