import { Link, NavLink, Outlet } from "react-router-dom";
import AudioPlayer from "../AudioPlayer/AudioPlayer";

function RootLayout() {
  return (
    <>
      <header>
        <h1 className="hero">
          <Link to="/">Poke Memo</Link>
        </h1>

        <nav>
          <ul className="pri-nav flex">
            <li>
              <NavLink to="/" className="button--v01 button--v02">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="about" className="button--v01 button--v02">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <AudioPlayer />
      </footer>
    </>
  );
}

export default RootLayout;
