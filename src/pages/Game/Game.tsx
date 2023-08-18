import { useState } from "react";
import Button from "../../components/Button/Button";
import Load from "../../components/Load/Load";
import Heading from "../../components/Heading/Heading";

function Game() {
  const [difficulty, setDifficulty] = useState(8);
  const [isNewGame, setIsNewGame] = useState(true);

  function toggleNewGame() {
    setIsNewGame((old) => !old);
  }

  function handleDifficulty(quantity: number) {
    setDifficulty(quantity);
    toggleNewGame();
  }

  return (
    <>
      {isNewGame && (
        <>
          <Heading text="Please choose a difficulty" />
          <Button handleClick={() => handleDifficulty(8)} text="Easy" />
          <Button handleClick={() => handleDifficulty(16)} text="Medium" />
          <Button handleClick={() => handleDifficulty(24)} text="Hard" />
        </>
      )}
      {!isNewGame && <Load toggleNewGame={toggleNewGame} difficulty={difficulty} />}
    </>
  );
}

export default Game;
