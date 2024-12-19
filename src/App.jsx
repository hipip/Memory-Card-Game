import { useState } from "react";
import "./App.css";

const BASEURL =
  "https://raw.githubusercontent.com/bablubambal/All_logo_and_pictures/refs/heads/main/programming%20languages/";

function App() {
  const [cards, setCards] = useState([
    { name: "bash", clickTimes: 0 },
    { name: "c++", clickTimes: 0 },
    { name: "haskell", clickTimes: 0 },
    { name: "java", clickTimes: 0 },
    { name: "javascript", clickTimes: 0 },
    { name: "kotlin", clickTimes: 0 },
    { name: "python", clickTimes: 0 },
    { name: "ruby", clickTimes: 0 },
    { name: "rust", clickTimes: 0 },
    { name: "typescript", clickTimes: 0 },
  ]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffleArray = (arr) => {
    return arr.sort((a, b) => Math.random() - 0.5);
  };

  const cardOnClick = (e) => {
    const currentCard = cards.find((c) => c.name === e.currentTarget.id);
    if (currentCard.clickTimes === 0) {
      setCards(
        shuffleArray([
          ...cards.filter((c) => c.name !== e.currentTarget.id),
          { ...currentCard, clickTimes: 1 },
        ])
      );
      setScore(score + 1);
    } else {
      console.log("game over");
      setCards(cards.map((card) => ({ ...card, clickTimes: 0 })));
      setBestScore(Math.max(score, bestScore));
      setScore(0);
    }
  };

  return (
    <>
      <h1>Memory Card Game</h1>
      <h2>Score : {score}</h2>
      <h2>Best Score : {bestScore}</h2>
      <div className="cards-container">
        {cards.map((card) => (
          <div
            className="card"
            key={card.name}
            id={card.name}
            onClick={cardOnClick}
          >
            <img
              src={BASEURL + encodeURI(card.name + ".svg")}
              className="card-img"
            />
            <h2>{card.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
