import React from "react";
import cardData from "./data";
import "./css/app.css";
// main components
import Navbar from "./components/nav.jsx";
import Hero from "./components/hero.jsx";
import Card from "./components/card.jsx";

function App() {
  // console.table(cardData);
  const cardSet = cardData.map((el) => {
    return <Card key={el.id} {...el} />;
  });

  return (
    <>
      <Navbar />
      <Hero />
      {/* section el added by me */}
      <section className="card-section">{cardSet}</section>
    </>
  );
}

export default App;
