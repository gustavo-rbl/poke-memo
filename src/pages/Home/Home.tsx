import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h2>Welcome to Poke Memo</h2>

      <Link to="game">Play</Link>
    </>
  );
}

export default Home;
