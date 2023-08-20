import { Link } from "react-router-dom";
import Rules from "../../components/Rules/Rules";

function About() {
  return (
    <div className="fade--in">
      <h2>About</h2>

      <p>
        PokeMemo is a classic memory or concentration game. The game consist of a set of cards
        featuring up to 251 Pokemon{" "}
        <Link
          to="https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_National_Pok%C3%A9dex_number"
          target="_blank"
        >
          (up to gen 2)
        </Link>
        .
      </p>

      <Rules />

      <h4>Acknowledgment:</h4>
      <p>
        PokeMemo was made possible thanks to{" "}
        <Link to="https://pokeapi.co/" target="_blank">
          Pokemon API
        </Link>
      </p>
    </div>
  );
}

export default About;
