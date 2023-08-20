import { useEffect, useState } from "react";
import GenerateIDSRecursive from "../../modules/GenerateIDSRecursive";
import GetPokemon from "../../services/GetPokemon";
import Loader from "../Loading/Loading";
import PlayGame from "../PlayGame/PlayGame";
import NotFound from "../../pages/NotFound/NotFound";

type LoadProps = {
  toggleNewGame: () => void;
  difficulty: number;
};

function Load({ toggleNewGame, difficulty }: LoadProps) {
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [cards, setCards] = useState<
    {
      id: string;
      name: string;
      img: string;
      isShiny: boolean;
      isClicked: boolean;
    }[]
  >([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let hasFetched = false;

    GetPokemon(GenerateIDSRecursive(difficulty))
      .then((data) => {
        if (data) {
          setCards(data);
        } else {
          setError(true);
        }
      })
      .finally(() => setLoading(false));

    return () => {
      hasFetched = true;
    };
  }, [difficulty]);

  if (loading) return <Loader />;

  if (error) return <NotFound />;

  return <PlayGame cards={cards} toggleNewGame={toggleNewGame} />;
}

export default Load;
