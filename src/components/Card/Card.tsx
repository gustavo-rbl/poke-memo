import Loading from "../Loading/Loading";

type CardProps = {
  id: string;
  name: string;
  img: string;
  handleClick: (id: string) => void;
  isShiny: boolean;
  isShuffling: boolean;
};

function Card({ id, name, img, handleClick, isShiny, isShuffling }: CardProps) {
  return (
    <div onClick={() => handleClick(id)} className="card--v01 cursor--pointer">
      {isShuffling ? (
        <Loading />
      ) : (
        <>
          <img src={img} alt={name} />
          <p className={`card--v01--text ${isShiny ? "card--v01-text-shiny" : ""}`}>{name}</p>
        </>
      )}
    </div>
  );
}

export default Card;
