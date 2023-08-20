import { Link } from "react-router-dom";
import errorImg from "../../assets/img/error.gif";

function NotFound() {
  return (
    <>
      <h2>Uh oh...</h2>

      <p>We are experiencing problems</p>

      <p>Please try again later</p>

      <img src={errorImg} alt="Error Image" className="error--img" />

      <Link to="/" className="button--v01">
        Try Again
      </Link>
    </>
  );
}

export default NotFound;
