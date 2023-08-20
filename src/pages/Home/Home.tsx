import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="fade--in">
      <h2>Welcome to Poke Memo</h2>

      <Link to="game" className="button--v01">
        Play
      </Link>
    </div>
  );
}

export default Home;
