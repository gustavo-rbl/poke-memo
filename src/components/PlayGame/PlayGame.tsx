import { useEffect, useState } from "react";
import FisherYatesShuffle from "../../modules/FisherYatesShuffle";
import Card from "../Card/Card";
import Scoreboard from "../ScoreBoard/ScoreBoard";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

type PlayGameProps = {
  cards: {
    id: string;
    name: string;
    img: string;
    isShiny: boolean;
    isClicked: boolean;
  }[];
  toggleNewGame: () => void;
};

function PlayGame({ cards, toggleNewGame }: PlayGameProps) {
  const [pokemonCards, setPokemonCards] = useState(cards);
  const [isAlive, setIsAlive] = useState(true);
  const [isWin, setIsWin] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);
  const [score, setScore] = useState(0);

  function shuffleCards(id: string) {
    const tempCards = pokemonCards.map((c) => {
      if (c.id === id) {
        return { ...c, isClicked: !c.isClicked };
      }
      return c;
    });

    setPokemonCards(FisherYatesShuffle(tempCards));
  }

  function handleIsClicked(id: string) {
    pokemonCards.forEach((c) => {
      if (c.id === id && c.isClicked) {
        // ends game is same card is clicked
        setIsAlive((old) => !old);

        // deduct previously added point
        setScore((old) => old - 1);
        return;
      }
    });
  }

  function handleClick(id: string) {
    setIsShuffling((old) => !old);
    setScore((old) => old + 1);
    shuffleCards(id);
    handleIsClicked(id);

    setTimeout(() => {
      setIsShuffling((old) => !old);
    }, 250);
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let isMounted = false;

    if (pokemonCards.every((c) => c.isClicked)) {
      setIsWin((old) => !old);
      setIsAlive((old) => !old);
    }

    return () => {
      isMounted = true;
    };
  }, [pokemonCards]);

  const pokeCards = pokemonCards.map((card) => (
    <Card key={card.id} handleClick={handleClick} {...card} isShuffling={isShuffling} />
  ));

  return (
    <>
      <Scoreboard score={score} max={cards.length} />

      {isAlive ? (
        <div className="jello grid card-container fade--in">{pokeCards}</div>
      ) : isWin ? (
        <Heading text="Congratulations!, You Win!" />
      ) : (
        <Heading text="Game Over" />
      )}

      {!isAlive && <Button handleClick={toggleNewGame} text="New Game" />}
    </>
  );
}

export default PlayGame;
