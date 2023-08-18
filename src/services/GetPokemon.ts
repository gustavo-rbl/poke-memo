import { nanoid } from "nanoid";

const GetPokemon = async (ids: number[]) => {
  try {
    const responses = await Promise.all(
      ids.map(async (id) => {
        const isShiny = !!0.012 && Math.random() <= 0.012;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { mode: "cors" });
        if (!response.ok) throw new Error(response.status.toString());

        const {
          name,
          sprites,
        }: {
          name: string;
          sprites: {
            front_shiny: string;
            front_default: string;
          };
        } = await response.json();

        const { front_shiny, front_default } = sprites;

        return {
          id: nanoid(),
          name: name,
          img: isShiny ? front_shiny : front_default,
          isShiny: isShiny,
          isClicked: false,
        };
      })
    );

    return responses;
  } catch (error) {
    console.error(error);

    return null;
  }
};

export default GetPokemon;
