import { useEffect, useState } from "react";
import Heading from "../Heading/Heading";

type ScoreboardProps = {
  score: number;
  max: number;
};

function Scoreboard({ score, max }: ScoreboardProps) {
  const [bestScore, setBestScore] = useState(
    () => JSON.parse(localStorage.getItem("bestScore") || "false") || 0
  );

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let isMounted = false;

    if (score > bestScore) setBestScore(score);

    localStorage.setItem("bestScore", JSON.stringify(bestScore));

    return () => {
      isMounted = true;
    };
  }, [score, bestScore]);

  return (
    <>
      <Heading text={`Score: ${score} / ${max}`} />
      <Heading text={`Best Score: ${bestScore}`} />
    </>
  );
}

export default Scoreboard;
